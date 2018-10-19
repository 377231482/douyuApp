<template>
  <div>
      <el-header>
        <div class="logo">
          <img src="../../static/logo.png" alt="">
        </div>
        <div class="open">打开APP</div>
        <div class="charge">充值</div>
        <span class="class">
          </span>
        <span class="mores">分类</span>
      </el-header>
    <el-row>
      <el-col :span="24">
        <div class="tutu">
          <img src="../assets/images/07.png" alt="">
          {{name}}
        </div>
      </el-col>
    </el-row>
    <el-main>
      <ul class="two">
        <li class="three" v-for="(listone,index) in data" :key=index>
          <span class="huo"><i></i>{{listone.hn}}</span>
          <span class="people"><i></i>{{listone.nickname}}</span>
          <img :src="listone.roomSrc" alt="">
          <p>{{listone.roomName}}</p>
        </li>

      </ul>
      <el-button plain @click="removes" v-if="num<=3" style="width: 80vw;margin-top: 10px;font-size: 12px;color: #7a7a7a;border-radius:5px ">
         加载更多
      </el-button>
    </el-main>
  </div>
</template>

<script>
import axios from 'axios';
    export default {
        data: function () {
            return {
              data:[],
              name:'',
              num:0,
            }
        },
        mounted(){
        this.removes()
        },
        methods:{
          removes(){
            this.num +=1;
            let tab = this.$route.params.id;
            this.name = this.$route.query.name;
            let mix =this.$route.query.mix;
            // this.min = this.$route.query.min;
            // console.log(tab);
            // https://m.douyu.com/api/room/list?page=1&type=jdqs
            axios.get('/douyu/api/room/'+ mix,
              {params:{page:this.num,type:tab}}).then((val) => {
              this.data= this.data.concat(val.data.data.list);
              // console.log(val);

            }).catch((err) => {
              console.log(err);
            })
          }
        }
    }
</script>

<style scoped>
  .logo {
    float: left;
    margin: 10px 0 0 -10px;
    width: 76px;
    height: 34px;
  }

   .logo img {
    width: 100%;
    height: 100%;
  }

   .open {
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

   .charge {
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
   .el-header{
     width: 100%;
     height: 60px;
     position: relative;
     /*position: fixed;*/
     background-color: #f8f8f8 ;
   }
  .class{
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYBAMAAACDuy0HAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURUxpcb+/v7u7u7a2try8vP///zMzMzk5OZWVlaNuOewAAAAFdFJOUwAIKxVFAsTUVAAAAVVJREFUSMftl9tpAzEURHU7kNgOhBqI1MHiFpakAqcCuwOTtqPHYvwA7xls/4Rc2+CP4TB6XY2c+6/ny5zvX6Ts2vrXb2vrL9RiJnxYNutsImCxM8Pk6jhwsgXBhhknV2yYJkqu6o8CxR1Mxa6BobiNbqLipi4lY3LVRib23UWk5KblZC5uLnIUbFCxDRcCOSZOzjHPdIDVxpwguY9vh8k5zhfin9Pyddyv9X16TD4els/9uQ6XYq+SY0w7PsAExV4lR0oeWyPReZbIt563pu6K/GBR7M6zRJY8v242yptWUNx1wn4euy7SRVFOigmne5AT7BsWtL6BG+PaRWehi/LOX5TOH7g4KLeVUy7NMM4K9GzCDdvQ+KJvE40jRItTQt7oah57cKDqSZRHtZ6GcXD1XGzOFLKUn5Vk3hM0j/H1DSE8ELZfHFdS+qS5ebG8uPz6+WP1C9S1QTqg0vTQAAAAAElFTkSuQmCC");
    position: absolute;
    right: 38px;
    top: 8px;
    width: 48px;
    height:48px;
    background-size: 100% 100%;
  }
  .mores{
   position: absolute;
    top: 22px;
    right: 10px;
    color: #999;
    font-size: 12px;
  }

  .el-row .tutu{
    display: flex;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    color: #424242;
  }
  .el-row .tutu img{
    width: 15px;
    height: 15px;
    margin: 5px  12px ;

  }
  .el-main {
    width: 100%;
    height: 86vh;
    margin-top: -20px;
  }
  .el-main .two{
    overflow: hidden;
    width: 110%;
    padding: 10px 10px;
    margin:-22px -24px;
  }
  .el-main .two .three{
    width: 48%;
    height: 60%;
    float: left;
    margin-left: 6px;
    position: relative;

  }
  .el-main .two .three img{
    width: 100%;
    height: 166px;
    border-radius: 5px;
  }
  .el-main .two .three p{
    width: 160px;
    height: 27px;
    line-height: 27px;
    font-size: 12px;
    color: #333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
  }
  .el-main .two .three .huo{
    color: #fff;
    background: rgba(0,0,0,.65);
    position: absolute;
    right: 8px;
    top: 5px;
    padding: 1px 3px;
    font-size: 10px;
    border-radius: 4px;
    width: 56px;
    height: 16px;
    line-height: 15px;
  }
  .el-main .two .three .huo i{
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUxpcf///////////////////////////////////////////////////////////////////////////////////////////////////////////0UMMMQAAAAbdFJOUwAF0Z9X7+T2knohuBM8G0M1w9tuLaxqhvxOCk/mMzoAAAEcSURBVDjLlZTZFoMgEEPrCgpK1brm//+zQbsALj31SeQ6ZDLR2+2/q65/EXdR/CAeQHJNVACuq6QkRHlFSBKQF0CUWyKLzomB24Tu550I6kyAjvelOQDmDGiXYhNi4r2dykp42HasJQXSACityJwKZkBx3aAJuoiBKdGbac1qLnxfeLowb1tJ9CQGF9Di84Bvx6u36IMSb+2aelNhidYlWnylx3YXFC7cRlyr1xNyPoI/UuWsVCO1Pcwhuv1Aq6+yl9AxIAo/bcM+fDE826ugNUaarSyu55zq7BF9WHVkf7W/DnKk822wr5LyIK0VfZ7kVsZYV9UurIZSMDVyTNp1ass+g6XC5xLdcZCNmtb9TJ5/33ruiq6K/vxh3J6APBdVqTggBwAAAABJRU5ErkJggg==");
    display: inline-block;
    background-size: 100% 100%;
    width: 11px;
    height: 11px;
  }
  .el-main .two .three .people{
    position: absolute;
    display: inline-block;
    bottom:30px;
    left: 10px;
    color: #fff;
    font-size: 10px;
    width: 100%;
    overflow: hidden;
    height: 18px;
    line-height: 18px;
    text-align: left;
  }
  .el-main .two .three .people i{
    background-image: url("https://shark.douyucdn.cn/app/douyu-mobile/m-douyu-v3/build/images/iconfont-wofdcada.png");
    display: inline-block;
    background-size: 100% 100%;
    width: 11px;
    height: 11px;
  }
</style>
