<template>
<div id="item">
  <div class="container-fluid">
    <div class="row">
      <div class="col-1"><hr class="vert" id="identifier"/></div>
      <div class="col-1">
        <label class="contain">
        <input type="checkbox" @click="markAsCompleted">
        <span class="checkmark"></span>
      </label>
      </div>
      <div class="col-6" id="texto">
        <div v-bind:class="{donestroke: todo.done}">{{todo.text}}</div><div id="barra"></div>
      </div>
      <div class="col-1"><button type="submit" class="remove btn" @click.prevent="removeTodo" title="Remove Task">x</button></div>
      <div class="col-1"><button type="button" class="btn colorpick" title="Change Identifier Color">O</button> </div>
    </div>
    <hr class="hor"/>
  </div>

</div>

</template>

<script>
  export default {
    name: 'app',
    props:['todo','index'],
    data (){
      return {


      }
    },
    methods: {
      removeTodo(){
        this.$store.dispatch('removeTodo', this.index);
      },
      markAsCompleted(){
        this.$store.dispatch('markAsCompleted', this.index);
      }
    }
  }
</script>

<style>

</style>
