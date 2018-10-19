<template>
  <div class="content">
    <section class="content-body">
      <div class="active" v-for="(data,index) in homedata" :key=index>
        <p class="p">
          <span class="game">
          <img :src="data.icon" alt="">
            {{data.tabName}}
          </span>
          <span class="neibu" v-for="(lists,index) in data.cate2Info" :key=index>
            <i v-if="index<=1">
              {{lists.cate2Name}}
            </i>
          </span>
        </p>
        <!--<router-link :to=" '/game/' + item.sn +'?id=' + item.sn">-->
        <!--<strong style="cursor: pointer">-->
          <!--更多-->
          <!--<i class="fa fa-play-circle-o"></i>-->
        <!--</strong>-->
      <!--</router-link>-->
        <router-link :to="'/homemore/' + data.shortName + '?name=' + data.tabName + '&mix='+ 'mixList'">
        <span class="more" style="cursor: pointer;color: #999">
              更多
          <i class="fa fa-chevron-circle-right"></i>
        </span>
        </router-link>
        <ul class="two">
          <li class="three" v-for="(listone,index) in data.list" :key=index>
            <span class="huo"><i></i>{{listone.hn}}</span>
            <span class="people"><i></i>{{listone.nickname}}</span>
            <img :src="listone.roomSrc" alt="">
          <p>{{listone.roomName}}</p>
          </li>

        </ul>
      </div>


    </section>

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data: function () {
      return {
        homedata: ''
      }
    },
    mounted() {
      // https://m.douyu.com/api/home/mix

      axios.get('/douyu/api/home/mix').then((val) => {
        this.homedata = val.data.data;
        // console.log(val.data.data);

      }).catch((err) => {
        console.log(err);
      })
    }
  }
</script>

<style scoped>
  .content .content-body {
    margin-top: 15px;
    font-size: 15px;
  }

  .content .content-body .active {
    overflow: hidden;
  }

  .content .content-body .active .p img {
    width: 18px;
    height: 18px;
    margin: 12px 10px 0 5px;
  }
  .content .content-body .active .p .game{
    font-size: 15px;
    color: #333;
    line-height: 42px;
    display: inline-block;
    margin-right: 15px;
  }

  .content .content-body .active .p {
    float: left;
    height: 42px;
    line-height: 50px;
    font-size: 15px;

  }
  .content .content-body .active  .more{


    line-height: 48px;
    float: right;
   margin-right: 30px;
    font-size: 14px;
    padding-left: 5px;

  }
  .content .content-body .neibu i{
    width: 42px;
    font-style: normal;
    font-size: 12px;
    margin-right: 8px;
    border: 1px solid #ff5d23;
    padding: 3px 8px;
    border-radius: 10px;
  }
  .content .two{
    overflow: hidden;
    width: 98%;
    padding: 10px 10px;
    margin:10px 6px;
  }
  .content .two .three{
    width: 46%;
    height: 60%;
    float: left;
    margin-right: 10px;
    position: relative;
  }
  .content .two .three img{
    width: 100%;
    height: 100px;
    border-radius: 5px;
  }
  .content .two .three p{
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
  .content .two .three .huo{
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
  .content .two .three .huo i{
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUxpcf///////////////////////////////////////////////////////////////////////////////////////////////////////////0UMMMQAAAAbdFJOUwAF0Z9X7+T2knohuBM8G0M1w9tuLaxqhvxOCk/mMzoAAAEcSURBVDjLlZTZFoMgEEPrCgpK1brm//+zQbsALj31SeQ6ZDLR2+2/q65/EXdR/CAeQHJNVACuq6QkRHlFSBKQF0CUWyKLzomB24Tu550I6kyAjvelOQDmDGiXYhNi4r2dykp42HasJQXSACityJwKZkBx3aAJuoiBKdGbac1qLnxfeLowb1tJ9CQGF9Di84Bvx6u36IMSb+2aelNhidYlWnylx3YXFC7cRlyr1xNyPoI/UuWsVCO1Pcwhuv1Aq6+yl9AxIAo/bcM+fDE826ugNUaarSyu55zq7BF9WHVkf7W/DnKk822wr5LyIK0VfZ7kVsZYV9UurIZSMDVyTNp1ass+g6XC5xLdcZCNmtb9TJ5/33ruiq6K/vxh3J6APBdVqTggBwAAAABJRU5ErkJggg==");
    display: inline-block;
    background-size: 100% 100%;
    width: 11px;
    height: 11px;
  }
  .content .two .three .people{
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
  .content .two .three .people i{
    background-image: url("https://shark.douyucdn.cn/app/douyu-mobile/m-douyu-v3/build/images/iconfont-wofdcada.png");
    display: inline-block;
    background-size: 100% 100%;
    width: 11px;
    height: 11px;
  }
</style>
