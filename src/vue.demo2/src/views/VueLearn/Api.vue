<template>
    <div  class="app-container">
        <div>
            <h1>Watch</h1>
            <el-form :v-model="product" label-width="80px">
                <el-form-item label="Watch:">
                     <el-input v-model="product.price"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div>
            <h1>Filters</h1>
            <el-form :v-model="product" label-width="80px">
                <el-form-item label="Filters:">
                     <el-input  v-model="product.name"></el-input>
                     <label>{{product.name | capitalize}}</label>
                </el-form-item>
            </el-form>
        </div>
        <div>
            <h1>Set</h1>
            <el-form :v-model="product" label-width="80px">
                <el-form-item label="Set:">
                     <label>{{product.nonename}}</label><el-button type="primary" @click="setValue">SetValue</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div>
            <h1>NextTick</h1>
            <el-form :v-model="product" label-width="80px">
                <el-form-item label="NextTick:">
                     <el-button type="primary" @click="modifyName">NextTick</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            product:{
                price:100,
                name:'a'
            }
        }
    },
    filters:{
        'capitalize':function(value){
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
   mounted(){
        this.$watch('product.price', function (newVal, oldVal) {
           this.$message({message:'new:'+newVal+'old:'+oldVal ,type: 'success'});
        })
   },
   methods:{
       setValue(){
           this.$set(this.product,'nonename','不存在属性添加值');
       },
       modifyName() {
           this.product.name='a类高级产品';
           alert('dom更新前：'+this.$el.textContent)
           this.$nextTick(function(){
                alert('dom更新后：'+this.$el.textContent)
           })
          
       }
   }
}
</script>

<style scoped>
 
</style>