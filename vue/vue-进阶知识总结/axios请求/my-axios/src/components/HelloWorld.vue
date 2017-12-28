<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <el-table
    :data="tableData"
    border
    style="width: 100%" class="table">
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
      width="180">
    </el-table-column>
    <el-table-column
      prop="author_name"
      label="作者"
      width="180">
    </el-table-column>
    <el-table-column
      prop="addr"
      label="地址">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import api from './../axios/api.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tableData:[]
    }
  },
  created(){
    this.setApi()
  },
  methods:{
    setApi(){
      api.JH_news('/demo/index')
      .then((res)=>{
        this.tableData = res.articles;
        console.log( this.tableData);
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
