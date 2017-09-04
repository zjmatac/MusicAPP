<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">Chicken Music</h1>

    <div class="head-nav">
          <ul class="nav-list">
            <li> {{ username }}</li>
            <li v-if="username!== ''" class="nav-pile">|</li>  
            <li v-if="username!== ''" @click="quit">退出</li>
            <li v-if="username=== ''" @click="logClick">登录</li>
          <!--   <li class="nav-pile">|</li> -->
          </ul>
      </div>  
    <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      <log-form @has-log="onSuccessLog"></log-form>
    </my-dialog>

  </div>
</template>

<script type="text/ecmascript-6">
import Dialog from 'base/dialog'
import LogForm from 'base/logForm'
  export default {
  data() {
      return {
        username: '',
        isShowLogDialog: false
      }
    },
  components: {
    MyDialog: Dialog,
    LogForm
  
  },
   methods: {
    logClick () {
      this.isShowLogDialog = true
    },
    quit () {
       this.username=''
    },
    closeDialog (attr) {
      this[attr] = false
    },
    onSuccessLog (data) {
      let index=data.indexOf("@")
      this.closeDialog ('isShowLogDialog')
      this.username = data.substring(0,index)
  }
 }
 }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  @keyframes circle
    0%
      -webkit-transform  rotate(0deg)
    100%
      -webkit-transform  rotate(-360deg)
  .m-header
    position: relative
    height: 44px
    text-align: center
    color: $color-theme
    font-size: 5px
    .icon
      display: inline-block
      vertical-align: top
      margin-top: 6px
      width: 30px
      height: 32px
      margin-right: 9px
      bg-image('logo')
      background-size: 30px 32px
      -webkit-animation:circle 2s infinite linear;
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
    span
      display:block
      position: absolute
      width:10px
      height:10px
      top: 10px
      right: 0
      background-color:yellow
    .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: $color-theme
    .head-nav 
      position: absolute;
      right: 6px;
      top: 33px;
      width: 70px;
      ul 
         overflow: hidden;
         li 
           cursor: pointer;
           float: left;
           height:20px;
         .nav-pile 
           padding: 0 10px;

</style>