<template>
    <div>
        <input v-model="message" />
        <button @click="show">Click me</button>
    </div>
</template>

<script>
export default {
    name: 'hello-plugin',
    data(){
        return{
            message:'hello plugin'
        }
    },
    methods:{
        show(){
            alert(this.message)
        }
    }
    
}
</script>