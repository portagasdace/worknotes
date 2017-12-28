<template>
  <div class="hello">
    <button @click="btnshow">动画1</button>
    <button @click="btnshow2">动画2</button>
    <button @click="btnshow3">动画3</button>
    <transition name="fade">
      <h1 v-show="show">{{ msg }}</h1>
    </transition>
    <transition name="my-trans">
      <h1 v-show="show2">{{ msg1 }}</h1>
    </transition>  
    <transition name="my-trans1">
      <h1 v-show="show3">{{ msg2 }}</h1>
    </transition> 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      msg1: 'Welcome to Your Vue.js App1',
      msg2: 'Welcome to Your Vue.js App2',
      show:true,
      show2:true,
      show3:true,
    }
  },
  methods:{
    btnshow(){
      this.show=!this.show
    },
    btnshow2(){
      this.show2=!this.show2
    },
    btnshow3(){
      this.show3=!this.show3
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active, .fade-leave-active{
  transition:opacity .5s ease-out;
}
.fade-enter, .fade-leave-active{
  opacity:0;
}
.my-trans-enter-active, .my-trans-leave-active{
  transition: all .5s ease-out;
}
.my-trans-enter{
  transform: translateX(-500px);
  opacity:0;
}
.my-trans-leave-active{
  transform: translateX(500px);
  opacity:0;
}
.my-trans1-enter-active, .my-trans1-leave-active{
  transition: all .5s ease-out;
}
.my-trans1-enter{
  transform: translateX(-500px);
  transform: scale(1.2);
  opacity:0;
}
.my-trans1-leave-active{
  transform: translateX(500px);
   transform: scale(1.2);
  opacity:0;
}
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
