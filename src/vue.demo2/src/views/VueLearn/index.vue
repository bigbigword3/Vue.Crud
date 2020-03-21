<template>
  <div class="app-container">
    <h1>Vue学习</h1>
     <div class="block">
      测试Vuex状态管理模式:
      <div>
          tagsView:{{tagsView}} <el-button @click="customChangeSetting">改变tagsView</el-button>
      </div>
      <div>mapGetters:{{tagsViewGetter}}</div>
      <div>customTagsViewGetter:{{customTagsViewGetter}}</div>
    </div>
  </div> 
</template>
<script>
import { mapState,mapActions,mapGetters,mapMutations } from 'vuex'
export default {
  computed:{
     ...mapState({
              tagsView: state => state.settings.tagsView,
          }),
     ...mapGetters('settings',[
        'tagsViewGetter'
     ]),
     ...mapGetters('settings',{
        customTagsViewGetter:'tagsViewGetter'
     })        
  },
  methods:{
      ...mapActions('settings', [
          'changeSetting'
      ]),
      customChangeSetting(){
          this.changeSetting({key:'tagsView',value: !this.tagsView});
          //this.CHANGE_SETTING({key:'tagsView',value: !this.tagsView})
      },
      ...mapMutations('settings',[
          'CHANGE_SETTING'
      ])
  }
}
</script>
<style scoped>
.block{
  border: solid 1px #ccc;
  padding: 20px;
}
</style>