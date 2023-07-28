<script setup>

</script>

<template>
<div class="container">
    <div class="login-wrapper" id="login-wrapper">
        <div class="header">Login</div>
        <div class="form-wrapper">
            <input type="text" name="username" placeholder="username" class="input-item">
            <input type="password" name="password" placeholder="password" class="input-item">
            <div id="msg_fail">{{msg_fail}}</div>
            <div class="btn" @click="submit()">Login</div>
        </div>
        <div class="msg">
            Don't have account?
            <router-link to="/register">Sign up</router-link>
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
    line-height: 200px;
    color: #fff;
    user-select: none;
}
.input-item {
    display: block;
    width: 90%;
    margin-bottom: 20px;
    /*border: 0;*/
    padding: 10px;
    /*border-bottom: 1px solid rgb(128, 125, 125);*/
    font-size: 15px;
    outline: none;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgb(128, 125, 125);
    border-radius: 5px;
}
.input-item::placeholder {
    text-transform: uppercase;
}
.btn {
    text-align: center;
    padding: 10px;
    width: 90%;
    margin-top: 20px;
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
#msg_fail{
    color: red;
    font-size: 5px;
    height: 10px;
}
a {
    text-decoration-line: none;
    color: #abc1ee;
}
</style>