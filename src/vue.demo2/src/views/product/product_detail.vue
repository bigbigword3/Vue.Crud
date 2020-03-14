<template>
    <div>
        <el-button type="primary">
            <router-link :to="{path:'/',query: {id: 'testQuery'}}">返回列表测试Query</router-link>
        </el-button>
        <el-button type="primary" @click="testParams">返回列表测试Params</el-button>

       <el-form ref="form" :model="product" label-width="80px">
            <el-form-item label="产品名称">
                <el-input v-model="product.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="save">保存</el-button>
            </el-form-item>
       </el-form>
     
    </div>
</template>

<script>
import { modifyProduct,getProduct} from '@/api/product/product'

export default {
     name: 'product_detail',
     data(){
         return {
             product:{}
         }
     },
     created(){
             this.init();
             console.log(this.$route.params.id);
     },
     methods:{
            init(){
                getProduct(this.$route.params.id).then(response=>{
                    this.product=response;
                    console.log(response);
                });
            },
            save(){
                modifyProduct(this.product).then(response=>{
                            this.$message({
                                            message: '保存成功',
                                            type: 'success'
                                          });
                            this.$router.push({ name: 'product_list',params: {  id: "testParams" } })
                });
            },
            testParams(){
                //注意使用push中的对象必须name=''
                this.$router.push({ name: 'product_list',params: {  id: "testParams" } })
            }
     }
}
</script>

<style scoped>

</style>