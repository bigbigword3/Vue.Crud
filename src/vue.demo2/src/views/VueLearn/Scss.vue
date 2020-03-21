<template>
    <div class="my-border">
        <h1>hi scss</h1>
    </div>
</template>
<script>
export default {
    
}
</script>

<style  scoped lang="scss">
$color:red;
$border:solid 1px black;
div 
{
   @import "vuelearn";
}
div 
{
   color:$color;
   border: $border;
}
</style>