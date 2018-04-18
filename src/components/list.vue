<template>

  <html>
      <agregar></agregar>
      <div class="container">
        <div class="row">
          <div class="col-2"></div>
          <div class="col-8 ">
            <div id="mostrar"><item v-for="(tarea, index) in tareas" :todo="tarea" :index="index"><hr/></item></div>
          </div>
        </div>
      </div>
  </html>

</template>

<script>
  export default {
    name: 'lista',
    data() {
      return {

      }
    },
    computed: {
      tareas() {
        return this.$store.getters.tareas
      }
    }
  }
</script>

<style>

</style>
