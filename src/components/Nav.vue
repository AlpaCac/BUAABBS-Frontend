<script setup>
import '@/styles/font.less'
import { useWindowScroll } from '@vueuse/core'
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'

const { x, y } = useWindowScroll()
const loggedin = 1;
const username = ref("2121-咕叽咕叽");
const searchInput = ref('');

</script>

<template>
  <el-affix>
    <div class="nav" :class="{unshow: y > 50}">
      <img src="@/assets/logo1.png" alt="*" class="logo">
      <div class="title">BUAABBS</div>

      <div class="search">
        <el-input
          v-model="searchInput"
          size="large"
          placeholder="Please Input"
          :prefix-icon="Search"
        />
      </div>

      <div class="right" v-if="loggedin">
        <div class="username">{{ username }}</div>
        <el-avatar class="userImg" src="https://f.pz.al/pzal/2023/08/10/df8f0acb86452.jpg"></el-avatar>
      </div>
      <div class="right" v-else>
        <div class="register button">注册</div>
        <div class="login button">登录</div>
      </div>

    </div>
  </el-affix>    
</template>

<style lang="scss" scoped>
.nav{
  background-color: $backgroundColor;
  height: $navHeight;
}
.logo{
  height: $navHeight;
  margin-left: 180px;
  float: left;
  user-select: none;
}
.title{
  font-family: Kaph;
  font-size: 28px;
  line-height: $navHeight;
  // text-align: center;
  color: rgba(255,255,255,0.9);
  float: left;
  user-select: none;
}
.unshow{
  display: none;
}
.userImg{
  float: right;
  height: $navHeight;
  width: $navHeight;
  margin-right: 10px;
}
.username{
  float: right;
  width: 120px;
  height: $navHeight;
  overflow: hidden;
  line-height: $navHeight;
  margin-right: 200px;
  // color: white;
}
.button{
  height: $navHeight;
  line-height: $navHeight;
  width: 80px;
  text-align: center;
  cursor: pointer;
}
.button:hover{
  background-color: rgba(255,255,255,0.9);
}
.login{
  float: right;
}
.register{
  float: right;
  margin-right: 180px;
}
.search{
  float: left;
  margin-top: 5px;
  margin-left: 150px;
  height: $navHeight;
  width: 500px;
}
</style>
<style lang="less" scoped>
:deep(.el-input__wrapper){
  background-color: rgba(20,20,20,0.3);
}
:deep(.el-input){
  --el-input-text-color: white;
  --el-input-icon-color: white;
  --el-input-placeholder-color: white;
}
</style>