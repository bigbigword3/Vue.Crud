<template>
    <div class="app-container">
        <input v-pin:border="{item1:'1px',item2:'solid',item3:'red'}"  />
    </div>
</template>

<script>
export default {
    directives:{
        pin:{
             inserted: function (el) {
                 el.focus()
              },
              bind:function(el, binding, vnode){
                  el.style[binding.arg]=binding.value.item1+' '+binding.value.item2+' '+binding.value.item3;
              }
        }
    }
}
</script>
<style scoped>
.border{
    border: 1px solid black;
}
</style>