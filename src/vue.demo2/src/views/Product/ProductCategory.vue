<template>
  <div class="app-container">
    产品分类
    <label>id:</label><el-input v-model="id"></el-input>
    <el-button type="primary" @click="toggleProduct">显示/隐藏组件</el-button>
    <el-button type="primary" @click="triggerChildMethod">调用子组件方法</el-button>
    <product-show ref="product_show_child" :id="id" v-show="visibleTag" :parentMethod="showMe" ></product-show>
 </div>
</template>

<script>
import ProductShow from './ProductShow'
export default {
  components: { ProductShow },
  data(){
    return {
          id:'00013',
          visibleTag:false
    }
  },
  methods:{
      toggleProduct(){
        this.id='00012';
        this.visibleTag=!this.visibleTag;
      },
      showMe(){
        this.$message({message:'T shirt-ShowFrom-ProductCategory.Vue'});
      },
      triggerChildMethod(){
        this.$refs.product_show_child.showMe();//调用子组件方法
      }
  }
}
</script>