<template>
  <el-row>
    <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item open index="1">组队中心</el-menu-item>
      <el-menu-item index="2">开黑语音</el-menu-item>
      <el-menu-item index="3" disabled>战绩查询</el-menu-item>
      <el-menu-item index="4" disabled>消息中心</el-menu-item>
      <el-menu-item style="padding-left: 1450px;" index="5">退出登录</el-menu-item>
    </el-menu>
    
    <el-row>
      <!-- 欢迎画面 -->
      <el-row v-if="welcomeScreen">
        <!--TODO-->
        <iframe src="https://101.qq.com/#/hero-rank-interest?tier=30" width="100%" height="900px" allowtransparency="true" frameborder="0"></iframe>
      </el-row>
      <!-- 组队中心 -->
      <el-row v-if="viewId == 'teamCenter'">
        <el-row>
          <el-table :data="tableData" height="350" border style="width: 95%; margin: 2%" v-if="viewId == 'teamCenter'" @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              prop="date"
              label="召唤师姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="段位"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="擅长位置">
            </el-table-column>
          </el-table>

          <div style="text-align: center;">
            <el-button type="success" icon="el-icon-trophy" size="medium " :loading="false">开始战斗</el-button>
          </div>
        </el-row>
        <el-row style="margin: 2%">
          <el-col :span="10">
            <p class="teamTitle" style="color: #F56C6C;">红队</p>
            <el-card class="red-card">
              <div v-for="o in 5" :key="o" class="text item">
                {{'小仙女拉克丝 ' + o }}
              </div>
            </el-card>
          </el-col>
          <el-col :span="4" style="font-size: 200px; text-align: center; height: 300px; line-height: 300px;">
            <p>vs</p>
          </el-col>
          <el-col :span="10">
            <p class="teamTitle" style="color: #409EFF;">蓝队</p>
            <el-card class="blue-card">
              <div v-for="o in 5" :key="o" class="text item">
                {{'小仙女拉克丝 ' + (o+3) }}
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-row>
      <!-- 开黑语音部分展示内容 -->
      <el-row v-if="viewId == 'voice'" class="voice">
        <iframe src="https://kookapp.cn/widget?id=4876588041648115&theme=dark" width="100%" height="700px" allowtransparency="true" frameborder="0"></iframe>
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
        viewId: '',

        tableData: [{
          date: '小仙女拉克丝',
          name: '大师',
          address: 'Top,Mid,Adc'
        }, {
          date: '小仙女拉克丝',
          name: '大师',
          address: 'Top,Mid,Adc'
        }, {
          date: '小仙女拉克丝',
          name: '大师',
          address: 'Top,Mid,Adc'
        }, {
          date: '小仙女拉克丝',
          name: '大师',
          address: 'Top,Mid,Adc'
        }, {
          date: '小仙女拉克丝',
          name: '大师',
          address: 'Top,Mid,Adc'
        }, {
          date: '小仙女拉克丝',
          name: '大师',
          address: 'Top,Mid,Adc'
        }, {
          date: '小仙女拉克丝',
          name: '大师',
          address: 'Top,Mid,Adc'
        }]
      };
    },
    created: {
      
    },
    methods: {
      handleSelect(key, keyPath) {
        this.welcomeScreen = false;
        if(key == 1) {
          this.viewId = 'teamCenter'
        }
        if(key == 2) {
          this.viewId= 'voice'
        }
        if(key == 5) {
          this.$router.go(-1)
        }
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
      }

    }
  }
</script>


<style>
  .voice {
    margin: 20px;
  }

  .teamCenter{
    margin: 20px;
  }

  /* 匹配结果显示 start*/
  .teamTitle {
    font-size: 30px;
    margin: 15px;
    text-align: center;
  }
  .red-card {
    background-color: #F56C6C;
    font-size: 30px;
    text-align: center;
    color: aliceblue;
  }
  .blue-card {
    background-color: #409EFF;
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
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  /* 首页 */

</style>