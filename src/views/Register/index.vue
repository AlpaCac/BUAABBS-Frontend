<script setup>

</script>

<template>
<div class="container">
    <div class="login-wrapper" id="login-wrapper">
        <div class="header">Register</div>
        <div class="form-wrapper">
            <input type="text" name="username" placeholder="username" class="input-item">
            <div class="msg_fail">{{msg_username}}</div>
            <input type="password" name="password" placeholder="password" class="input-item">
            <div class="msg_fail">{{msg_password}}</div>
            <input type="password" name="confirmPW" placeholder="confirm password" class="input-item">
            <div class="msg_fail">{{msg_comfirmPW}}</div>
            <input type="text" name="mail" placeholder="E-mail" class="input-item">
            <div class="msg_fail">{{msg_email}}</div>
            <input type="text" name="checkCode" placeholder="checkcode" id="checkcode" class="input-item">
            <input type="button" @click="sendCode()" name="send" placeholder="mail" id="send" class="input-item" value="发送验证码" >
            <div class="msg_fail" id="msg_checkCode">{{msg_checkCode}}</div>
            <div class="btn" @click="submit()">Register</div>
        </div>
        <div class="msg">
            Already have account?
            <router-link to="/login">Login</router-link>
        </div>
    </div>
</div>
</template>

<style scoped>
.container {
    height: 100%;
}
.login-wrapper {
    background-color: rgba(0,0,0,0.6);
    width: 358px;
    height: 588px;
    border-radius: 15px;
    padding: 0 50px;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.header {
    font-size: 38px;
    font-weight: bold;
    text-align: center;
    line-height: 120px;
    color: #fff;
    user-select: none;
}
.input-item {
    display: block;
    width: 90%;
    margin-bottom: 0px;
    margin-top:10px;
    /*border: 0;*/
    padding: 10px;
    /*border-bottom: 1px solid rgb(128, 125, 125);*/
    font-size: 15px;
    outline: none;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgb(128, 125, 125);
    border-radius: 5px;
}
#checkcode{
    float: left;
    width: 50%;
}
#send{
    margin-left: 18px;
    float: left;
    width: 35%;
}
#send:hover{
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.9);
}
#send:active{
    background-color: rgba(255, 255, 255,0.6);
}
#msg_checkCode{
    float: left;
}
.input-item::placeholder {
    text-transform: uppercase;
}
.btn {
    text-align: center;
    padding: 10px;
    width: 90%;
    /*margin-top: 40px;*/
    margin-top: 90px;
    /*background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);*/
    background-color: #ffffff90;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;

    user-select: none;
}
.btn:hover{
    background-color: #ffffff80;
}
.msg {
    text-align: center;
    line-height: 88px;
}
.msg_fail{
    color: red;
    font-size: 5px;
    height: 10px;
}
a {
    text-decoration-line: none;
    color: #abc1ee;
}
</style>