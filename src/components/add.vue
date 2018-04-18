<template>

  <html>
    <div class="container">
      <div class="row">
        <div class="col-3"></div>
            <div class=" col-7">
              <div class="wrapper">
                  <div class="row">
                      <h1>Lista To Do</h1>
                      <form class="form-inline" >
                        <input type="text" size="50" class="form-group form-control textbox" placeholder="Tarea" aria-label="Tarea" v-model="newTodoText"/>
                        <button class="btn add" type="button" @click="createTodo">Agregar</button>
                        <button class="btn add" type="button" @click="deleteAllCompleted" title="Eliminar Tareas Marcadas">Eliminar</button>
                      </form>

                  </div>

              </div>
            </div>
        <div class="col-2"></div>
      </div>
    </div>

  </html>

</template>

<script>
  export default {
    name: 'agregar',
    props: ['todo','index'],
    data() {
      return {
          newTodoText:''
      }
    },
    methods:{
      createTodo(){
        this.$store.dispatch('createTodo', this.newTodoText)
        this.newTodoText = ''
      },
      deleteAllCompleted(){
        this.$store.dispatch('deleteAllCompleted')
      },

    }
  }
</script>

<style>

</style>
