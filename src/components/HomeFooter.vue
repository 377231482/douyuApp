<template>
  <div>
    <el-container>
      <el-header>

      </el-header>
      <el-main>

      </el-main>
      <el-footer>
        <span @click="move"><i class="header-top"></i>返回顶部</span>
        <div>下载客户端</div>
        <p>
          客服热线：027-87057679 <br>
          武汉斗鱼网络科技有限公司 <br>
          湖北省武汉市东湖开发区光谷软件园F4栋8楼 <br>
          版权所有 www.douyu.com 鄂ICP备15011961号-1
        </p>
      </el-footer>
    </el-container>
  </div>
</template>

<script>

  export default {
    data: function () {
      return {}
    },
    methods:{
    move:function () {
      $('html').animate({scrollTop:0},200)
    }
    }
  }

</script>

<style scoped>
  .el-header, .el-footer {

    color: #333;

    height: 100px;
  }
  .el-main {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-container {
    margin-bottom: 40px;
  }
  .el-footer span{
    font-size: 18px;
    margin: 10px;
    color: #666;
    cursor: pointer;
  }
  .el-footer div{
    width: 80%;
    margin:18px auto;
    background-color:#f70 ;
    color: #fff;
    height: 45px;
    font-size: 14px;
    line-height: 45px;
    border-radius: 6px;
    cursor: pointer;
  }
  p{
    font-size: 10px;
    margin-bottom: 50px;
    color: #999;
  }
  .header-top{
    background-image:url("https://shark.douyucdn.cn/app/douyu-mobile/m-douyu-v3/build/images/icon-v2ed53f0.png") ;
    display: inline-block;
    background-size: 245px 20px;
    height: 16px;
    width: 15px;
    background-position: -190px 0;
  }
</style>
