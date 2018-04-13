import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    todos:[],
    lastId: 0,
  },
  mutations: {
    incrementLastId(state){
      state.lastId++
    }
  },
  actions: {
    createTodo(context,payload){},
    removeTodo(context,payload){},
    markAsCompleted(context,payload){},
    changeTodoColor(context,payload){},
    deleteAllComplited(context,payload){},
  },
  getters: {},
})
