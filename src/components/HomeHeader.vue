<template>
  <div class="header">
    <div class="header-one">
    <el-header>
      <div class="logo">
        <img src="../../static/logo.png" alt="">
      </div>
      <div class="open">打开APP</div>
      <div class="charge">充值</div>
      <div class="search">
      </div>
    </el-header>
    <el-main>
      <el-row class="tuijian">
        <el-col class="header-nav" :span="4">
          <p>推荐</p>
        </el-col>
        <el-col :span="20">
          <ul class="content" v-for="(data,index) in datas">
            <router-link :to="'/homemore/' + data.shortName + '?name=' + data.name + '&mix='+ 'list'">
            <li >{{data.name}} </li>
            </router-link>
          </ul>

        </el-col>
      </el-row>
    </el-main>

      <span class="menu" @click="chuanzhi"></span>
    </div>

    <div class="lunbo">
    <div class="block">
      <el-carousel trigger="click" height="212px">
        <!--item in imgs-->
        <el-carousel-item v-for="item in imgs" :key="item">
          <img :src="imgs" alt="">
          <!--<h3>{{ item }}</h3>-->
        </el-carousel-item>
      </el-carousel>
    </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data: function () {
      return {
        datas: '',
        isshow:true,
        imgs:['../assets/images/01.jpg','../assets/images/02.jpg','../assets/images/03.jpg','../assets/images/04.jpg','../assets/images/05.jpg','../assets/images/06.jpg'],
      }
    },
    methods:{
      chuanzhi(){
        this.$emit('chuanle',this.isshow)
      }
    },
    mounted() {

      // https://m.douyu.com/api/cate/recList?cid=&ct=
      axios.get('/douyu/api/cate/recList?cid=&ct=').then((val) => {
        console.log(val)
        this.datas = val.data.data
      }).catch((err) => {
        console.log(err);
      })

    },

  }



</script>

<style scoped>
  .header {
    overflow: hidden;
  }
  .header .header-one{
    position: fixed;
    z-index: 10;
    position: relative;
  }

  .header .logo {
    float: left;
    margin: 10px 0 0 -10px;
    width: 76px;
    height: 34px;
  }

  .header .logo img {
    width: 100%;
    height: 100%;
  }

  .header .open {
    float: left;
    width: 74px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    border-radius: 2px;
    border: 1px solid #ff5d23;
    color: #ff5d23;
    font-size: 12px;
    margin: 15px 0 0 10px;
  }

  .header .charge {
    float: left;
    height: 28px;
    width: 49px;
    color: white;
    background-color: #ff5d23;
    text-align: center;
    line-height: 28px;
    font-size: 12px;
    border-radius: 2px;
    margin: 15px 0 0 10px;
  }

  .header .search {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUxpcTIyMjExMTExMTExMTIyMjIyMjExMTQ0NDExMTMzM1VVVTExMT8/PzExMTAwMDQ0NDMzM+qFs/IAAAARdFJOUwA4j+fcooP1FWVLA7UIzihTGdI73wAAASBJREFUOMu1VElixCAMGxabLQT4/2fHkJadtoeOTwQU2UYyr9dHguElVFISjD4gnJGpxcW2LPdzqoirBKxsJh9JZJ7WOkL5ChMGaVMYV781J5gaU5pcxUjPqELVczH6DdxErgl1+9YX1Xy5pUwtUsI+mdhdjKWEdZ94zfbqrkbFqFu3V4BOWvt4UIFyhErKDiBeC6EmTnpSS/xZke4nW1B/8KzoAo7eqaA/Md0/1vTVOKQUD6B2ZCrnHF7VJLqXaM52dxLxLVEvKltMWPXqRIWtVyLZ1Y4mXGwf1dRQoA1hh3p4Hqux1OzybiD996COqFBmU3JjrTVl7BLwBeVRpT6kLXaaL0djewzuZ1AzanFtMAgAGHVnTfX7a4QK//NxewM4RxEY8NzUNwAAAABJRU5ErkJggg==");
    width: 18px;
    height: 18px;
    background-size: 100% 100%;
    float: right;
    margin: 18px -10px 0 0;

  }
  .header .el-main{
    padding: 0;
    height: 30px;

  }


   .header .tuijian .header-nav p{
     width: 30px;
     color: #ff5d23;
    border-bottom: 2px solid #ff5d23;
    font-size: 14px;
     margin: 0 10px 0;
     font-weight: bold;
  }
  .header .tuijian .content{
   width: 395vw;
  }
  .header .tuijian .content li{
   float: left;
    margin: 0 10px;
    font-size: 14px;
    color: #3f3f3f;
  }
   .header .menu{
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYBAMAAACDuy0HAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURUxpcb+/v7u7u7a2try8vP///zMzMzk5OZWVlaNuOewAAAAFdFJOUwAIKxVFAsTUVAAAAVVJREFUSMftl9tpAzEURHU7kNgOhBqI1MHiFpakAqcCuwOTtqPHYvwA7xls/4Rc2+CP4TB6XY2c+6/ny5zvX6Ts2vrXb2vrL9RiJnxYNutsImCxM8Pk6jhwsgXBhhknV2yYJkqu6o8CxR1Mxa6BobiNbqLipi4lY3LVRib23UWk5KblZC5uLnIUbFCxDRcCOSZOzjHPdIDVxpwguY9vh8k5zhfin9Pyddyv9X16TD4els/9uQ6XYq+SY0w7PsAExV4lR0oeWyPReZbIt563pu6K/GBR7M6zRJY8v242yptWUNx1wn4euy7SRVFOigmne5AT7BsWtL6BG+PaRWehi/LOX5TOH7g4KLeVUy7NMM4K9GzCDdvQ+KJvE40jRItTQt7oah57cKDqSZRHtZ6GcXD1XGzOFLKUn5Vk3hM0j/H1DSE8ELZfHFdS+qS5ebG8uPz6+WP1C9S1QTqg0vTQAAAAAElFTkSuQmCC");
    position: absolute;
     right: 0;
     top: 45px;
    width: 50px;
    height:50px;
    background-size: 100% 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(7) {
    background-image: url("../assets/images/01.jpg");
    background-size: 100% 100%;
  }

  .el-carousel__item:nth-child(8) {
    background-image: url("../assets/images/02.jpg");
    background-size: 100% 100%;
  }
  .el-carousel__item:nth-child(3) {
    background-image: url("../assets/images/03.jpg");
    background-size: 100% 100%;
  }
  .el-carousel__item:nth-child(4) {
    background-image: url("../assets/images/04.jpg");
    background-size: 100% 100%;
  }
  .el-carousel__item:nth-child(5) {
    background-image: url("../assets/images/05.jpg");
    background-size: 100% 100%;
  }

  .el-carousel__item:nth-child(6) {
    background-image: url("../assets/images/06.jpg");
    background-size: 100% 100%;
  }
  /deep/ .el-carousel__button{
    width:16px;
    height: 6px;
    border-radius: 2px;
    background: #ff5d23;
    margin-bottom: 8px;
  }


  .lunbo{
    width: 94%;
    margin: auto;
  }
</style>
