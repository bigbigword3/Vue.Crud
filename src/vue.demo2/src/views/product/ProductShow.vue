<template>
    <div>
        <h1 >我接收到的Id是：{{id}}</h1>
        <div>
            调用父组件方法：<el-button @click="triggerParentMethod" type="primary">调用父组件方法</el-button>
        </div>
    </div>
</template>
<script>
export default {
    name:'ProductShow',
    props:{
        id:{
            type:String,
            required:true
        },
        parentMethod:{//传入父组件方法指针
             type:Function,
             required:false
        }
    },
    data(){
        return {

        }
    },
    methods:{
        showMe(){
            this.$message({message:'ShowFrom-ProductShow.Vue'});        
        },
        triggerParentMethod(){ 
            if(this.parentMethod){
                this.parentMethod();//调用父组件方法
            }
        }
    }
}
</script>
<style scoped>
div{
    margin: 20px;
}
</style>