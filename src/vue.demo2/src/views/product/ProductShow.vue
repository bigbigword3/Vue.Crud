<template>
    <div><h1 >我接收到的Id是：{{id}}</h1></div>
</template>
<script>
export default {
    name:'ProductShow',
    props:{
        id:{
            type:String,
            required:true
        }
    },
    data(){
        return {

        }
    }
}
</script>