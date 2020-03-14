import { getProductPageList,createProduct, getProduct, removeProduct} from '@/api/product/product'

export default {
    name: 'product_list',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        visible: false ,
        queryCriteria: {
            pageIndex: 1,
            pageSize: 10,
            name:''
          },
          total: 0,
          data: {},
          newProdcut:{},
          dialogVisible:false,
          multipleSelection:[],
          loading: true 
      }
    },
    created() {
       console.log(this.$route.query);
       console.log(this.$route.params);
       this.init()
    },
    methods:{
        init() {
            this.loadData();
         },
        loadData() {
          this.loading = true
          getProductPageList(this.queryCriteria).then(response => {
              this.data = response.data
              this.loading = false
              this.total = response.totalCount
              let maxPageSize=(response.totalCount/this.queryCriteria.pageSize+(response.totalCount%this.queryCriteria.pageSize==0?0:1));
              if(this.queryCriteria.pageIndex>maxPageSize){
                 //删到最后一页最后一条
                 this.queryCriteria.pageIndex=maxPageSize;
                 this.loadData();
              }
            })
          },
        edit(row){
          this.$router.push({ path: `product/detail/${row.id}`})
        }, 
        showCreate(){
          this.dialogVisible=true;
        },
        create(){
          createProduct(this.newProdcut).then(response=>{
            this.$message({
              message: '新增成功',
              type: 'success'
            });
            this.dialogVisible=false;
            this.newProdcut.name='';
            this.search();
          })
        },
        remove(row){
          console.log(row);
          this.$confirm('此操作将永久删除, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            removeProduct([row.id]).then(response=>{
              this.loadData();
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            })
          }).catch(() => {
            
          });
         
        },
        removeMutil(){
          this.$confirm('此操作将永久删除, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            let ids=[];
            console.log(this.multipleSelection);
            this.multipleSelection.forEach(row =>{
              ids.push(row.id)
            })
            removeProduct(ids).then(response=>{
              this.loadData();
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            })
          }).catch(() => {
            
          });
        },
        fetchNext() {
            this.queryCriteria.pageIndex = this.queryCriteria.pageIndex + 1
            this.loadData()
         },
        fetchPrev() {
            this.queryCriteria.pageIndex = this.queryCriteria.pageIndex - 1
            this.loadData()
         },
        fetchPage(pageIndex) {
            this.queryCriteria.pageIndex = pageIndex
            this.loadData()
          },
        changeSize(pageSize) {
            this.queryCriteria.pageIndex = 1
            this.queryCriteria.pageSize = pageSize
            this.loadData()
          },
        search() {
            this.queryCriteria.pageIndex = 1
            this.loadData()
          },
        reset(){
          this.queryCriteria.name="";
          this.search();
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        }
    }
  }