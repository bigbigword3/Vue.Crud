<template>
  <div class="app-container">
    产品分类
    <label>id:</label><el-input v-model="id"></el-input>
    <el-button type="primary" @click="toggleProduct">显示/隐藏组件</el-button>
    <product-show :id="id" v-show="visibleTag" ></product-show>
 </div>
</template>

<script>
import ProductShow from './ProductShow'
export default {
  components: { ProductShow },
  data(){
    return {
          id:'1',
          visibleTag:false
    }
  },
  methods:{
      toggleProduct(){
        //do loading data
        this.id='222';
        this.visibleTag=!this.visibleTag;
      }
  }
}
</script>