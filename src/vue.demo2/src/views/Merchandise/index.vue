<template>
  <div class="app-container">
    <h1>商品信息</h1>
 
    <div style="border:1px solid black">
      测试Promise:
      <div>
        操作人{{who}},改变了商品名称:{{merchandiseName}} <el-button @click="changeMerchandiseNameSync" type="primary">changeMerchandiseNameSync</el-button>
      </div>
      <div style="margin-top:10px">
        操作人{{who}},改变了商品名称:{{merchandiseName}} <el-button @click="changeMerchandiseNameAsync" type="primary">changeMerchandiseNameAsync</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
         merchandiseName:'default',
         who:'default'
      }
    },
    methods:{

      changeMerchandiseNameAsync(){
        this.requestMerchandiseName().then(responseMesssage=>{
         this.merchandiseName=responseMesssage;
        });
        //不会等待requestMerchandiseName方法执行完
        this.who='张三';
      },

      async changeMerchandiseNameSync(){
        const responseMesssage = await this.requestMerchandiseName();
        this.merchandiseName=responseMesssage;
        //等待requestMerchandiseName方法执行完再执行下面代码
        this.who='张三';
      },

      requestMerchandiseName(){
        return new Promise((resolver,reject)=>{
          setTimeout(() => {
           resolver('i am learning');
          }, (3000));
        })
      }
    }
  }
</script>