<template>
  <div class="hello">
      <serch-table></serch-table>
  </div>
</template>

<script>

import  SerchTable from "./serchtable"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello vuex'
    }
  },
  components:{
    SerchTable
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
.content{
  width:1100px;
  margin:0 auto;
  height: 10px;
}
</style>
