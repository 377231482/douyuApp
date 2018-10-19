<template>
    <div>
      <Home-header @chuanle="jieshou"></Home-header>
      <Home-content></Home-content>
      <Home-footer></Home-footer>
      <Class-fiy class="fiy" v-if="isshow" @chuanle="jieshou" ></Class-fiy>
    </div>
</template>

<script>
  import axios from 'axios';
  import HomeHeader from '../components/HomeHeader';
  import HomeContent from '../components/HomeContent'
  import HomeFooter from '../components/HomeFooter';
  import ClassFiy from '../components/ClassFiy';
    export default {
        data: function () {
            return {
            isshow:''
            }
        },
        components:{
          HomeHeader,
          HomeContent,
          HomeFooter,
          ClassFiy,
        },
      methods:{
          jieshou(str){
            this.isshow=str
          }
      }

    }
</script>

<style scoped>
.fiy{
  position: fixed;
  top: 0;
  /*background-color: white;*/
  z-index: 50;
}
</style>
