<template>
  <div class="center">
    <div class="container" id="container">
      <!-- 注册画面部分 -->
      <div class="form-container sign-up-container">
        <el-form :model="form" :rules="rules" ref="form" action="#" label-width="110px">
          <h1>注册您的账户</h1>
          <el-form-item
            id="gameName"
            style="margin-bottom: 0px; border-right-width: 50px; margin-right: 110px"
            prop="userName"
          >
            <el-input
              id="userNameId"
              class="input"
              type="text"
              :class="{ empty: existed }"
              v-model="form.userName"
              :validate-event="false"
              :placeholder="vpcPlaceholder"
              style="width: 282px"
            />
          </el-form-item>
          <el-form-item
            id="gameEmail"
            prop="userEmail"
            style="margin-bottom: 0px; border-right-width: 50px; margin-right: 110px"
          >
            <el-input
              type="email"
              prop="userEmail"
              v-model="form.userEmail"
              placeholder="邮箱"
              style="width: 282px"
            />
          </el-form-item>
          <!-- <el-form-item prop = "userPwd"> -->
          <el-input type="password" prop="userPwd" v-model="form.userPwd" placeholder="密码" />
          <!-- </el-form-item> -->

          <el-row>
            <el-col :span="11">
              <el-select v-model="form.currentRankLevel" placeholder="当前段位">
                <el-option
                  v-for="item in rankLevelOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
            <el-col :span="11" :offset="2">
              <el-select v-model="form.bestRankLevel" placeholder="最高段位">
                <el-option
                  v-for="item in rankLevelOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="11">
              <el-select v-model="form.priorityPosition" placeholder="首选位置">
                <el-option
                  v-for="item in occupationOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
            <el-col :span="11" :offset="2">
              <el-select v-model="form.secondaryPosition" placeholder="次选位置">
                <el-option
                  v-for="item in occupationOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
          </el-row>

          <button style="margin: 20px 0" @click="register">注册</button>
        </el-form>
      </div>

      <!-- 登录画面部分 -->
      <div class="form-container sign-in-container">
        <form action="#" prop="register">
          <h1>登录</h1>
          <input type="email" required="required" v-model="form.useremail" placeholder="邮箱" />
          <span class="errTips" v-if="emailError">* 邮箱填写错误 *</span>
          <input type="password" v-model="form.userpwd" placeholder="密码" />
          <span class="errTips" required="required" v-if="passwordError">* 密码填写错误 *</span>
          <a href="#">忘记了您的密码?</a>
          <button @click="login">登录</button>
        </form>
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
import { validateEMail, isPassword, validateNecessary } from '@/utils/validate';

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
      // 控制placeholder 文字
      isValid: true,
      // 控制placeholder 样式
      existed: false,
      userNameError: '',
      rules: {
        userName: [{ required: true, message: '请输入用户名' }, { validator: validateNecessary }],
        userEmail: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { validator: validateEMail, trigger: 'blur' },
        ],
        userPwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: isPassword, trigger: 'blur' },
        ],
      },
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
  computed: {
    vpcPlaceholder() {
      return this.isValid ? '请输入游戏昵称' : this.userNameError;
    },
  },
  methods: {
    changeType(paramType) {
      // 横幅展示画面注册和登录按钮切换
      const container = document.getElementById('container');
      paramType
        ? container.classList.remove('right-panel-active')
        : container.classList.add('right-panel-active');
      // 初始化数据
      this.form = [];
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
    register() {
      const self = this;

      this.$refs['form'].validate((valid) => {
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
                occupation: self.form.occupation,
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
          self.isValid = false;
          self.existed = true;
          self.userNameError = document.getElementsByClassName('el-form-item__error')[0].innerText;
          document.getElementsByClassName('el-form-item__error')[0].innerText = '';
          document.getElementsByClassName('el-form-item__error')[1].innerText = '';
        }
      });
    },
  },
};
</script>

<style scoped>
@import '../assets/css/login.css';

/* error状态 placeholder字体变红*/
.empty /deep/ input::-webkit-input-placeholder {
  -webkit-text-fill-color: red;
}
</style>
