<template>
    <div class="index">
      <!-- <vHeader></vHeader> 
            <el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-container>
    <el-header>
      <v-header></v-header>

    </el-header>
    <el-main>Main
    </el-main>
  </el-container>
</el-container>-->
        {{info}}
        <!-- <mt-button>ccccccc</mt-button> -->
        <van-button type="default">默认按钮</van-button>
<van-button type="primary">主要按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger" @click="handlerClick">危险按钮</van-button>
    </div>
</template>

<script>
import vHeader from "components/header/header";
import vLogin from "components/login/login";
import { ImagePreview } from "vant";
export default {
  name: "index",
  components: {
    vHeader,
    vLogin
  },
  data() {
    return {
      info: "index"
    };
  },
  methods: {
    handlerClick() {
      console.log("xxxxxj");
      // ImagePreview([
      //   "https://img.yzcdn.cn/1.jpg",
      //   "https://img.yzcdn.cn/2.jpg"
      // ]);
      const array = [1, 2, 3];
      const [first, second] = array;
      const newArray = array.map(item => item * 2);
      console.log("first", first, newArray);
      const newPr= Promise.resolve(3)
      console.log('dafd',newPr);
    }
  }
};
</script>

<style lang="scss" scoped>
div.index {
  @include mobile;
  width: 40px;
  font-size: 30px;
}
</style>
