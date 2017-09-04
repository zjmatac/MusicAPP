<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" autofocus="autofocus"
          v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error" autofocus>{{ userErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" 
          v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{ passwordErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
      <p>{{ errorText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usernameModel: '',
      passwordModel: '',
      errorText: ''
    }
  },
  computed: {
    userErrors () {
      let errorText, status
      if (!/@/g.test(this.usernameModel)) {
        status = false
        errorText = '不包含@'
      }
      else {
        status = true
        errorText = ''
      }
      if (!this.userFlag) {
        errorText = ''
        this.userFlag = true
      }
      return {
        status,
        errorText
      }
    },
    passwordErrors () {
      let errorText, status
      if (!/^\w{1,6}$/g.test(this.passwordModel)) {
        status = false
        errorText = '密码不是1-6位'
      }
      else {
        status = true
        errorText = ''
      }
      if (!this.passwordFlag) {
        errorText = ''
        this.passwordFlag = true
      }
      return {
        status,
        errorText
      }
    }
  },
  methods: {
    onLogin () {
      if (!this.userErrors.status || !this.passwordErrors.status) {
        this.errorText = '部分选项未通过'
      }
      else {
        this.$emit('has-log', this.usernameModel)
        }
      }
    }
    
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .g-form-line {
  padding: 15px 0px ;

}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input{
  display: inline-block;
 
}
.g-form-input input{
   height: 20px;
   line-height: 20px;
   vertical-align: middle;
   padding: 0 10px;
   border: 1px solid #ccc;
}
.button {
  display: inline-block;
  outline: none;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font: 14px/100% Arial, Helvetica, sans-serif;
  padding: .5em 2em .55em;
  text-shadow: 0 1px 1px rgba(0,0,0,.3);
  -webkit-border-radius: .5em; 
  -moz-border-radius: .5em;
  border-radius: .5em;
  -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);
  -moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);
  box-shadow: 0 1px 2px rgba(0,0,0,.2);
  color:#ffcd32;
}
  .button:hover{
    text-decoration: none;
  } 
  .button:active{
    position: relative;
    top: 1px;
  } 
            
 .g-form-error{ 
    color: red;
    padding-left: 15px;
    float: left;
    margin-left: 27px;
  } 
           
</style>
