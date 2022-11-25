<template>
  <div class="center">
    <div class="container" id="container">
      <!-- 注册画面部分 -->
      <div class="form-container sign-up-container">
        <el-form action="#" ref="registerForm" :model="form" :rules="registerRules">
          <h1>注册您的账户</h1>
          <el-form-item prop="userName">
            <el-input v-model="form.userName" placeholder="游戏昵称" />
          </el-form-item>
          <el-form-item prop="userEmail">
            <el-input v-model="form.userEmail" placeholder="邮箱" />
          </el-form-item>
          <el-form-item prop="userPwd">
            <el-input type="password" v-model="form.userPwd" placeholder="密码" show-password />
          </el-form-item>

          <el-row>
            <el-col :span="11">
              <el-form-item prop="currentRankLevel">
                <el-select v-model="form.currentRankLevel" placeholder="当前段位">
                  <el-option v-for="item in rankLevelOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="11" :offset="2">
              <el-form-item prop="bestRankLevel">
                <el-select v-model="form.bestRankLevel" placeholder="最高段位">
                  <el-option v-for="item in rankLevelOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="11">
              <el-form-item prop="priorityPosition">
                <el-select v-model="form.priorityPosition" placeholder="首选位置">
                  <el-option v-for="item in occupationOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="11" :offset="2">
              <el-form-item prop="secondaryPosition">
                <el-select v-model="form.secondaryPosition" placeholder="次选位置">
                  <el-option v-for="item in occupationOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <button style="margin: 20px 0" @click="register('registerForm')">注册</button>
        </el-form>
      </div>

      <!-- 登录画面部分 -->
      <div class="form-container sign-in-container">
        <el-form action="#" ref="loginForm" :model="form" :rules="loginRules">
          <h1>登录</h1>
          <el-form-item prop="userEmail">
            <el-input type="email" v-model="form.userEmail" placeholder="邮箱" />
          </el-form-item>
          <el-form-item prop="userPwd">
            <el-input type="password" v-model="form.userPwd" placeholder="密码" />
          </el-form-item>
          <a href="#">忘记了您的密码?</a>
          <button @click="login">登录</button>
        </el-form>
      </div>
      <!-- 提示横幅部分 -->
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <el-image :src="require('../assets/logo.png')" class="logo"></el-image>
            <p>与我们一起开黑，请使用您的个人信息登录</p>
            <button class="ghost" id="signIn" @click="changeType(true)">登录</button>
          </div>

          <div class="overlay-panel overlay-right">
            <el-image :src="require('../assets/logo.png')" class="logo"></el-image>
            <p>输入您的个人详细信息，与我们一起开黑！</p>
            <button class="ghost" id="signUp" @click="changeType(false)">注册</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 页脚 -->
    <footer>
      <p>梦里寻他，踏马而来，寻找最强战队！</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'login-register',
  data() {
    return {
      // 登录验证
      emailError: false,
      passwordError: false,
      // 注册唯一性验证
      emailExisted: false,
      // TODO 不知道干啥的，问李优确认
      newSign: false,
      // 用户表单
      form: {
        userName: '',
        userEmail: '',
        userPwd: '',
        currentRankLevel: '',
        bestRankLevel: '',
        priorityPosition: '',
        secondaryPosition: '',
      },

      registerRules: {
        userName: [{ required: true, message: '请输入您的昵称', trigger: 'blur' }],
        userEmail: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] },
        ],
        userPwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { pattern: /(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,12}/, message: '请至少输入八位数字+字母+符号密码', trigger: ['blur', 'change'] },
        ],
        currentRankLevel: [{ required: true, message: '请选择当前段位', trigger: ['blur', 'change'] }],
        bestRankLevel: [{ required: true, message: '请选择最高段位', trigger: ['blur', 'change'] }],
        priorityPosition: [{ required: true, message: '请选择首选位置', trigger: ['blur', 'change'] }],
        secondaryPosition: [{ required: true, message: '请选择次选位置', trigger: ['blur', 'change'] }],
      },

      loginRules: {
        userEmail: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] },
        ],
        userPwd: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },

      rankLevelOptions: [
        {
          value: '9',
          label: '钻石及以上',
        },
        {
          value: '8',
          label: '白金',
        },
        {
          value: '6',
          label: '黄金',
        },
        {
          value: '4',
          label: '白银',
        },
        {
          value: '2',
          label: '青铜及以下',
        },
      ],

      occupationOptions: [
        {
          value: 'Top',
          label: '上单',
        },
        {
          value: 'Mid',
          label: '中单',
        },
        {
          value: 'Jug',
          label: '打野',
        },
        {
          value: 'ADC',
          label: 'ADC',
        },
        {
          value: 'Sup',
          label: '辅助',
        },
      ],
    };
  },
  methods: {
    changeType(paramType) {
      // 横幅展示画面注册和登录按钮切换
      const container = document.getElementById('container');
      paramType ? container.classList.remove('right-panel-active') : container.classList.add('right-panel-active');
      // 初始化数据
      this.form = {};
      this.emailError = false;
      this.passwordError = false;
      // 注册请求时，email唯一性验证
      this.emailExisted = false;
    },

    // 帐号登录
    login() {
      console.log('123132213');
      debugger;
      const self = this;
      if (self.form.useremail != '' && self.form.userpwd != '') {
        self
          .$axios({
            method: 'post',
            url: 'http://127.0.0.1:10520/api/user/login',
            data: {
              email: self.form.useremail,
              password: self.form.userpwd,
            },
          })
          .then((res) => {
            switch (res.data) {
              case 0:
                const param = self.form.useremail;
                this.$router.push({ path: '/organizeteam', query: { email: param } });
                if (!self.newSign) {
                  this.$message.success('登陆成功！');
                }
                break;
              case -1:
                // TODO 用户不存在，即邮箱填写错误
                this.emailError = true;
                break;
              case 1:
                // TODO 用户名正确，密码错误
                this.passwordError = true;
                break;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    register(formName) {
      const self = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          self
            .$axios({
              method: 'post',
              url: 'http://127.0.0.1:10520/api/user/add',
              data: {
                username: self.form.userName,
                password: self.form.userPwd,
                email: self.form.userEmail,
                currentRankLevel: self.form.currentRankLevel,
                bestRankLevel: self.form.bestRankLevel,
                priorityPosition: self.form.priorityPosition,
                secondaryPosition: self.form.secondaryPosition,
              },
            })
            .then((res) => {
              switch (res.data) {
                case 0:
                  this.$message.success('注册成功！');
                  this.newSign = true;
                  this.login();
                  break;
                case -1:
                  this.emailExisted = true;
                  this.form.username = '';
                  this.$message.error('用户名已存在，请重新输入!');
                  break;
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
@import '../assets/css/login.css';
</style>
