<template>
  <div>
    <div v-for="item in array_lista" :key="item.nome_do_curso">
      <h1>Usuario: {{item.usuario}}</h1>
      <h2>Nome do curso: {{item.nome_do_curso}}</h2>
      <h3>Duracao: {{item.duracao}}</h3>
    </div>
  </div>  
</template>

<script>
  import {mapState} from 'vuex'
export default {
  name: 'Aulas',
  computed: mapState(['array_lista']),
  methods: {
    teste(){
      console.log(this.array_lista)
    }
  }
}
</script>

<style>

</style>