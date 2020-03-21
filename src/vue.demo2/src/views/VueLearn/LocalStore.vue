<template>
    <div>
        <el-button @click="set">设置</el-button>
        <el-button @click="get">获取</el-button>
        <el-button @click="remove">清空</el-button>
    </div>
</template>
<script>
export default {
    localStorage: {
        someObject: {
            type: Object,
            default: {
                hello: 'world'
            }
        },
        someNumber: {
          type: Number,
        },
        someBoolean: {
         type: Boolean
        },
        stringOne: '',
        stringTwo: {
            type: String,
            default: 'helloworld!'
        },
        stringThree: {
          default: 'hello'
        }
    },
    methods:{
        set(){
             this.$localStorage.set('someObject', {hello:'98k'})
               
        },
        get(){
             let obj = this.$localStorage.get('someObject')
             if(!obj){
                this.$message({message:'不存在',type:'error'});
             }
             else{
                this.$message({message:obj.hello,type:'success'});
             }
           
        },
        remove(){
             this.$localStorage.remove('someObject')
        }
    }
}
</script>
<style scoped>
div{
    margin: 20px;
}
</style>