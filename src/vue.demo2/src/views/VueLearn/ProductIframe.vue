<template>
    <div>
        <input :value="urlAddress"/>
       <div>
            <iframe  id="iframeId" :src="urlAddress" frameborder="0" class="pc iframe"  scrolling="auto"  ></iframe>
       </div>
    </div>
</template>
<script >
export default {
   data(){
       return{
           
       }
   },
   computed:{
        urlAddress(){
            return process.env.PRODUCT_HOST+'/product/';
        }
   }
   
}
</script>

<style scoped>
.iframe {

position: absolute;

left: 0;

right: 0;

top: 0;

bottom: 0;

width: 100%;

height: 100%;

background: #fff;

overflow-y: hidden;

} 
</style>