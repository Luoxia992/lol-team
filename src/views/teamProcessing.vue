<template>
  <el-row>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item open index="1">组队中心</el-menu-item>
      <el-menu-item index="2">开黑语音</el-menu-item>
      <el-menu-item index="3" disabled>战绩查询</el-menu-item>
      <el-menu-item index="4" disabled>消息中心</el-menu-item>
      <el-menu-item index="5" disabled>个人中心</el-menu-item>
      <el-menu-item index="5" disabled>bate-V0.1</el-menu-item>
    </el-menu>

    <el-row>
      <!-- 欢迎画面 -->
      <el-row v-if="welcomeScreen">
        <!--TODO-->
        <iframe
          src="https://101.qq.com/#/hero-rank-interest?tier=30"
          width="100%"
          height="900px"
          allowtransparency="true"
          frameborder="0"
        ></iframe>
      </el-row>
      <!-- 组队中心 -->
      <el-row v-if="viewId === 'teamCenter'">
        <el-row>
          <el-table
            :data="tableData"
            ref="userTable"
            height="350"
            border
            style="width: 95%; margin: 2%"
            v-if="viewId === 'teamCenter'"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column
              prop="userName"
              label="召唤师姓名"
              width="180"
            ></el-table-column>
            <el-table-column prop="rankLevel" label="段位" width="180">
              <template slot-scope="scope">
                <span v-if="scope.row.rankLevel == 1">黑铁</span>
                <span v-if="scope.row.rankLevel == 2">青铜</span>
                <span v-if="scope.row.rankLevel == 3">白银</span>
                <span v-if="scope.row.rankLevel == 4">黄金</span>
                <span v-if="scope.row.rankLevel == 6">白金</span>
                <span v-if="scope.row.rankLevel == 7">钻石</span>
                <span v-if="scope.row.rankLevel == 8">大师</span>
                <span v-if="scope.row.rankLevel == 9">王者</span>
              </template>
            </el-table-column>
            <el-table-column prop="occupation" label="擅长位置">
              <template slot-scope="scope">
                <span v-if="scope.row.occupation == 'Top'">上单</span>
                <span v-if="scope.row.occupation == 'Mid'">中单</span>
                <span v-if="scope.row.occupation == 'Jug'">打野</span>
                <span v-if="scope.row.occupation == 'ADC'">ADC</span>
                <span v-if="scope.row.occupation == 'Sup'">辅助</span>
              </template>
            </el-table-column>
          </el-table>

          <el-row style="text-align: center">
            <el-button
              type="success"
              icon="el-icon-trophy"
              :loading="false"
              @click="startMatch"
            >
              开始战斗
            </el-button>
          </el-row>
        </el-row>
        <!-- 分组结果部分 -->
        <el-row style="margin: 2%">
          <el-col :span="10">
            <p class="teamTitle" style="color: #f56c6c">红队</p>
            <el-card class="red-card" body-style="height:220px;">
              <div
                v-for="(item, index) in blueteam"
                :key="index"
                class="text item"
              >
                {{ item.userName }}
              </div>
            </el-card>
          </el-col>
          <el-col
            :span="4"
            style="
              font-size: 200px;
              text-align: center;
              height: 300px;
              line-height: 300px;
            "
          >
            <p>vs</p>
          </el-col>

          <el-col :span="10">
            <p class="teamTitle" style="color: #409eff">蓝队</p>
            <el-card class="blue-card" body-style="height:220px;">
              <div
                v-for="(item, index) in redteam"
                :key="index"
                class="text item"
              >
                {{ item.userName }}
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-row>
      <!-- 开黑语音部分展示内容 -->
      <el-row v-if="viewId == 'voice'" class="voice">
        <iframe
          src="https://kookapp.cn/widget?id=4876588041648115&theme=dark"
          width="100%"
          height="700px"
          allowtransparency="true"
          frameborder="0"
        ></iframe>
      </el-row>
    </el-row>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      // 欢迎画面，开发文档开关
      welcomeScreen: true,
      // 页码标识
      viewId: '',
      loginEmail: '',
      // 用于选择的所有用户表单显示
      tableData: [],
      // 被选中的用户组
      multipleSelection: [],
      // 分组的红队
      redteam: [],
      // 分组的蓝队
      blueteam: [],
    };
  },
  created: {},
  methods: {
    handleSelect(key, keyPath) {
      this.welcomeScreen = false;
      // 组队中心
      if (key == 1) {
        this.viewId = 'teamCenter';
        // 获取数据库内所有用户数据
        const self = this;
        self
          .$axios({
            method: 'get',
            url: 'http://127.0.0.1:10520/api/user/selectAllUser',
          })
          .then((res) => {
            this.tableData = res.data;
          });
      }
      // 开黑语音
      if (key == 2) {
        this.viewId = 'voice';
      }
      // 战绩查询
      if (key == 3) {
        this.viewId = 'voice';
      }
      // 消息中心
      if (key == 4) {
        this.viewId = 'voice';
      }
      // 个人中心
      if (key == 5) {
      }
      // 退出登录
      if (key == 6) {
        this.$router.go(-1);
      }
    },

    startMatch() {
      if (this.multipleSelection.length != 10) {
        this.$message.error('请选择十名勇士！！！');
        return;
      }
      this.blueteam = [];
      this.redteam = [];
      const tempSortTeam = this.multipleSelection.sort((a, b) => {
        return a.rankLevel - b.rankLevel;
      });
      this.blueteam.push(
        tempSortTeam[0],
        tempSortTeam[9],
        tempSortTeam[3],
        tempSortTeam[6],
        tempSortTeam[5],
      );
      this.redteam.push(
        tempSortTeam[1],
        tempSortTeam[8],
        tempSortTeam[2],
        tempSortTeam[7],
        tempSortTeam[4],
      );
    },
    // 格式化段位显示名称
    rankLevelFormatter(row, column) {
      debugger;
      console.log(row);
      return row.userName;
    },

    // toggleSelection(rows) {
    //   if (rows) {
    //     rows.forEach(row => {
    //       this.$refs.multipleTable.toggleRowSelection(row);
    //     });
    //   } else {
    //     this.$refs.multipleTable.clearSelection();
    //   }
    // },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    // handleClick(init) {
    //   const data = this.$route.query.email
    //   this.Visiable = true;
    //   this.$nextTick(() => {
    //     this.$refs.dialog.init(data);
    //   })
    // }
  },
};
</script>

<style>
.voice {
  margin: 20px;
}

.teamCenter {
  margin: 20px;
}

/* 匹配结果显示 start*/
.teamTitle {
  font-size: 30px;
  margin: 15px;
  text-align: center;
}

.red-card {
  background-color: #f56c6c;
  font-size: 30px;
  text-align: center;
  color: aliceblue;
}

.blue-card {
  background-color: #409eff;
  font-size: 30px;
  text-align: center;
  color: aliceblue;
}

.item {
  margin-top: 12px;
  margin-bottom: 12px;
}

/* 匹配结果显示 end*/

/* 首页start */
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
