<template>
  <div class="header">
    <div class="content">
      <div class="content-one">
      <el-header>
        <el-row>
          <el-col class="father" :span="8">
          <i @click="skip"  class="el-icon-close"></i>
          </el-col>
          <el-col :span="16">
            <div id="grid" class="grid-content bg-purple-dark">选择分类</div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row class="navbar">
          <el-col class="header-nav" :span="2">
            <p @click="way()" style="cursor: pointer" :class="{actives:num==='all'}">全部</p>
          </el-col>
          <el-col :span="22">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                     @select="handleSelect">
              <el-menu-item @click="active(listes.cate1Id)" class="el-menu" v-for="(listes,index) in datas.cate1Info" index="index" :key=index>
                <p :class="{actives:num===listes.cate1Id}">{{listes.cate1Name}}</p>
              </el-menu-item>

            </el-menu>
          </el-col>
        </el-row>
      </el-main>
      </div>
      <ul class="gameone">
        <li class="gametwo" v-for="(listes,index) in datas.cate2Info" :key="index"
            v-if="(num==listes.cate1Id) || (num=='all')">
          <img :src="listes.icon" alt="">
          <p>{{listes.cate2Name}}</p>
        </li>
      </ul>

    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        datas: '',
        activeIndex: '1',
        num: 'all',
        isshow:false,
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      active(index) {
        this.num = index
      },
      way() {
        this.num = 'all'
      },
      skip(){
        this.$emit('chuanle',this.isshow)
      }
    },
    mounted() {

      // https://m.douyu.com/api/cate/list
      axios.get('/douyu/api/cate/list').then((val) => {
        console.log(val)
        this.datas = val.data.data
      }).catch((err) => {
        console.log(err);
      })
    }
  }
</script>

<style scoped>
  #grid {
    width: 100%;
    height: 54px;
    line-height: 54px;
    font-size: 16px;

    color: #3f3f3f;

  }
  .father{
    position: relative;
  }
   i {
    position: absolute;
    left: 3px;
    top: 19px;
    font-size: 23px;
  }
  .header .content .content-one{
    background-color: white;
  }
  .header .content {
    height: 68vh;
    width: 100%;
    overflow: scroll;
  }

  .header .content .el-main {
    padding: 0;
    height: 35px;

  }

  .header .content .header-nav p {
    width: 30px;
    color: #3f3f3f;
    font-size: 14px;
    margin: 0 10px 0;
    height: 20px;
    line-height: 20px;
  }

  .header .content .el-menu-demo {
    width: 142vw;
    overflow: hidden;
    line-height: 30px;
  }

  .header .content .el-menu {
    float: left;
    height: 30px;
    margin: 0 5px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    padding: 0px 2px;
    border: none;

  }

  .header .content .gameone {
    width: 100%;
  }

  .header .content .gameone .gametwo {
    float: left;
    width: 23.3%;
    height: 121px;
    border-bottom: 1px dashed #ddd;
    border-right: 1px dashed #ddd;
    text-align: center;
    background-color: #f4f4f4;
  }

  .header .content .gameone .gametwo img {
    margin-top: 16%;
    margin-bottom: 5px;
    width: 48.8%;
    height: 48.8%;
    border-radius: 50%;
  }

  .header .content .gameone .gametwo p {
    font-size: 12px;
    margin-bottom: 20px;
  }

  .actives {
    color: #ff5d23 !important;
    border-bottom: 2px solid #ff5d23;
    font-weight: 700;
  }
  .footer{
    height: 33vh;
    background-color:rgba(0,0,0,0.46);
    z-index:33 ;
  }

</style>
