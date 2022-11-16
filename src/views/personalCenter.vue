<template>
      <el-dialog title="欢迎菜鸡" :visible.sync="detailVisible" width="55%">
      <div class="el-dialog-div">
      <div class="PersonTop">
        <!-- <div class="PersonTop_img">
          <img v-image-preview :src="avatar" />
        </div> -->
        <div>
  </div>
        <div class="PersonTop_text">
          <div class="user_text">
          <div class="avtart">
           <div v-html="avatar" class="avtart-block"></div>
          </div>
            <div class="user_name">
                <el-input class="input-text" v-model="userId" @input="changeInput" style="height:33px" placeholder="输入昵称生成你的头像吧！"></el-input>
            </div>
            <div class="user-v">
              <span class="user-v-font">黄金</span>
            </div>
            <div class="user_qianming">
                休息嘻嘻嘻嘻嘻嘻
              <span> {{ design }}</span>
            </div>
            <div class="user_anniu">
              <el-button
                class="el-icon-edit"
                type="primary"
                size="medium"
                plain
                @click="edit"
                >编辑</el-button
              >
            </div>
          </div>
          <div class="user_num">
            <div style="cursor: pointer" @click="">
              <div class="num_number">{{  }}</div>
              <span class="num_text">粉丝</span>
            </div>
            <div style="cursor: pointer" @click="">
              <div class="num_number">{{ followCounts }}</div>
              <span class="num_text">关注</span>
            </div>
            <div>
              <div class="num_number">{{ goodCounts }}</div>
              <span class="num_text">获赞</span>
            </div>
          </div>
        </div>
      </div>
      <div class="person_body">
        <div class="person_body_left">
          <el-card class="box-card" :body-style="{ padding: '0px' }">
            <div slot="header" class="clearfix">
              <span class="person_body_list" style="border-bottom: none"
                >个人中心</span>
            </div>
            <el-menu
              router
              active-text-color="#00c3ff"
              class="el-menu-vertical-demo"
            >
              <el-menu-item
                index="info"
                :route="{ name: 'info', params: $route.params.id }"
              >
                <i class="el-icon-user"></i>
                <span slot="title">个人简介</span>
              </el-menu-item>
              <el-menu-item
                index="myarticle"
                :route="{ name: 'myarticle', params: $route.params.id }"
              >
                <i class="el-icon-edit-outline"></i>
                <span slot="title">发帖</span>
              </el-menu-item>
              <el-menu-item
                index="mycollect"
                :route="{ name: 'mycollect', params: $route.params.id }"
              >
                <i class="el-icon-document"></i>
                <span slot="title">收藏</span>
              </el-menu-item>
              <el-menu-item
                index="myfan"
                :route="{ name: 'myfan', params: $route.params.id }"
              >
                <i class="el-icon-tableware"></i>
                <span slot="title">粉丝</span>
              </el-menu-item>
              <el-menu-item
                index="myfollow"
                :route="{ name: 'myfollow', params: $route.params.id }"
              >
                <i class="el-icon-circle-plus-outline"></i>
                <span slot="title">关注</span>
              </el-menu-item>
            </el-menu>
          </el-card>
        </div>
        <div class="person_body_right">
          <router-view></router-view>
        </div>
      </div>
    </div>
</el-dialog>
</template>
    
<script>
import multiavatar from '@multiavatar/multiavatar'

export default {
    name: "dialogComponent",
    data(){
      return{
        avatar: '',
        userId: '',
        watch: {},
        detailVisible:false
      }
    },
  methods:{
    init(data){
      this.detailVisible=true;
      console.log(data);
    },
    changeInput(value) {
      console.log('b', value)
      this.avatar = multiavatar(value)
    }
  }
}
</script>

<style scoped>

.me-video-player {
  background-color: transparent;
  width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
  position: fixed;
  left: 0;
  z-index: 0;
  top: 0;
}
.PersonTop {
  width: 900px;
  height: 50px;
  background-color: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  border-radius: 5px;
}

.PersonTop_img {
  width: 140px;
  height: 123px;
  background-color: #1361cf;
  margin-right: 24px;
  margin-left: 20px;
  overflow: hidden;
  border-radius: 20px;
}

.PersonTop_img img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

.PersonTop_text {
  height: 20px;
  width: 880px;
  display: flex;
}

.user_text {
  width: 60%;
  height: 100%;
  line-height: 30px;
}

.user_name {
  font-weight: bold;
}
.user-v {
  margin-bottom: -5px;
}
.user-v-img {
  width: 15px;
  height: 15px;
}
.user-v-font {
  font-size: 15px;
  color: #1be989;
}
.user_qianming {
  font-size: 14px;
  color: #999;
}

.user_num {
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
}

.user_num > div {
  text-align: center;
  border-right: 1px dotted #999;
  box-sizing: border-box;
  width: 80px;
  height: 40px;
  line-height: 20px;
}

.num_text {
  color: #999;
}

.num_number {
  font-size: 20px;
  color: #333;
}
.el-menu-item>span {
  font-size: 16px;
  color: #999;
}

/*下面部分样式*/
.person_body {
  width: 1000px;
  margin-top: 210px;
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
}

.person_body_left {
  width: 27%;
  height: 600px;
  border-radius: 5px;
  margin-right: 3%;
  text-align: center;
}

.person_body_list {
  width: 100%;
  height: 50px;
  margin-top: 25px;
  font-size: 22px;
  border-bottom: 1px solid #f0f0f0;
  background-image: -webkit-linear-gradient(
    left,
    rgb(42, 134, 141),
    #e9e625dc 20%,
    #3498db 40%,
    #e74c3c 60%,
    #09ff009a 80%,
    rgba(82, 196, 204, 0.281) 100%
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-background-size: 200% 100%;
  -webkit-animation: masked-animation 4s linear infinite;
}

.el-menu-item {
  margin-top: 22px;
}

.person_body_right {
  width: 70%;
  height: 450px; 
  border-radius: 5px;
  background-color: rgb(7, 204, 211);
}

.box-card {
  height: 500px;
}

/*ui样式*/
.el-button {
  width: 84px;
}
.el-dialog-div {
    height: 700px;
    overflow: auto;
}

/*头像*/
.avtart-block {
  height: 70px;
  width: 70px;
  border-radius: 50%;
  margin-left: 10px;
  padding-bottom: 5px;
}

.input-block {
  width: 100%;
  text-align: left;
  margin-top: 40px;
}

.input-text {
  width: 190px;
  height: 36px;
}

.avtart {
  width: 50%;
  text-align: center;
}
</style>




