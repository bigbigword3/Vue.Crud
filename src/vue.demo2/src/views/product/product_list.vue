<template>
  <div class="hello">
    <div class="block">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-input v-model="queryCriteria.name" size="mini" placeholder="产品名称"></el-input>
        </el-col>
        <el-col :span="8">
          <el-button type="success" size="mini" icon="el-icon-search" @click="search">查询</el-button>
          <el-button type="primary" size="mini" icon="el-icon-refresh" @click="reset">重置</el-button>
          <el-button type="success" size="mini" icon="el-icon-plus" @click="showCreate">新增</el-button>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeMutil">批量删除选中</el-button>
        </el-col>
      </el-row>
    </div>

     <el-table :data="data" v-loading="loading" element-loading-text="Loading" border fit highlight-current-row
                                                                  @selection-change="handleSelectionChange">
      <el-table-column  type="selection" width="55">
      </el-table-column>
      <el-table-column label="产品名称">
        <template slot-scope="scope">
          {{scope.row.name}}
        </template>
      </el-table-column>

      <el-table-column>
        <template slot-scope="scope">
           <el-button type="danger"  size="mini" @click="remove(scope.row)">删除</el-button>
           <el-button type="primary"  size="mini" @click="edit(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      layout="total, sizes, prev, pager, next, jumper"
      :page-sizes="[10, 20, 50, 100,500]"
      :page-size="queryCriteria.pageSize"
      :current-page="queryCriteria.pageIndex"
      :total="total"
      @size-change="changeSize"
      @current-change="fetchPage"
      @prev-click="fetchPrev"
      @next-click="fetchNext">
    </el-pagination>



     <el-dialog
      :title="创建产品"
      :visible.sync="dialogVisible"
      width="70%">
      <el-form ref="form" :model="newProdcut" :rules="rules" label-width="80px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="产品名称" prop="tips">
              <el-input v-model="newProdcut.name"  ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="create">保存</el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>

</template>

<script src="./product_list_js.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
