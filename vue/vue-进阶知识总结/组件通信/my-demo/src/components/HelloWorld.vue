<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <order-list :orderlists="datas" @on-change="change($event)"></order-list>
    <input type="text" v-model="value">
  </div>
</template>

<script>
import OrderList from './orderlist'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      datas:[
        {label:"路飞"},
        {label:"山治"},
        {label:"娜美"},
        {label:"索隆"}
      ],
      value:''
    }
  },
  components:{
    OrderList
  },
  methods:{
    change(val){
      this.value=val
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
  list-style: none;
}
a {
  color: #42b983;
}
</style>
