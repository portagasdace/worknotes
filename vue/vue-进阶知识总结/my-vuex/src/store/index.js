import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"
Vue.use(Vuex)

const state=[
	{id:1,num:10},
	{id:2,num:11},
	{id:3,num:12}
]

export default new Vuex.Store({
	state,
	actions,
	getters,
	mutations
})