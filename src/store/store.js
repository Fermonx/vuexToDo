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
    },
    createTodo(state,payload) {
      let todo = {
        id: state.lastId,
        text: payload,
        done: false,
        color: 'black'
      };
      state.todos.push(todo)
    },
    removeTodo(state,payload){

      state.todos.splice(payload, 1);
    },
    markAsCompleted(state,payload){
      state.todos[payload].done = !state.todos[payload].done;
    },
    deleteAllCompleted(state,payload){
      state.todos = state.todos.filter(todo => !todo.done);
    },

  },
  actions: {
    createTodo(context,payload){
      context.commit('createTodo',payload);
      context.commit('incrementLastId')

    },
    removeTodo(context,payload){
      context.commit('removeTodo',payload);
    },
    markAsCompleted(context,payload){
      context.commit('markAsCompleted',payload);
    },
    changeTodoColor(context,payload){},

    deleteAllCompleted(context,payload){
      context.commit('deleteAllCompleted');
    },
  },
  getters: {
    tareas(state) {
     return state.todos;
    }
  },
});
