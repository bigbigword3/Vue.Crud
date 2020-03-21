<template>
   <div>
    <el-dropdown trigger="click" class="international" @command="changeLang">
        <div>
        修改语言
        </div>
        <el-dropdown-menu slot="dropdown" >
        <el-dropdown-item :disabled="language==='zh'" command="zh">中文</el-dropdown-item>
        <el-dropdown-item :disabled="language==='en'" command="en">English</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
    <div >
        <el-button>{{$t('button.add')}}</el-button>
        <el-button>{{$t('button.lang')}}</el-button>
    </div>
   </div>
</template>
<script>
import {mapMutations } from 'vuex'
export default {
    data(){
        return {}
    },
    methods:{
        ...mapMutations('app', [
          'SET_LANGUAGE'
         ]),
        changeLang(lang){
                this.$i18n.locale = lang
                this.SET_LANGUAGE(lang);
                this.$message({
                    message: 'Switch Language Success',
                    type: 'success'
                })
        }
    },
    computed: {
        language() {
            return this.$store.getters.language
        }
  }
}
</script>
<style scoped>
 div{
     margin: 20px;
 }
</style>