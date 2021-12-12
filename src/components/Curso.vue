<template>
    <div>
      <h1>Componente de curso</h1>
      <h1>Componente de aulas: </h1>
      <input type="text" v-model="lista.usuario" placeholder="Informe o nome de usuário"/>
      <input type="text" v-model="lista.nome_do_curso" placeholder="Informe o nome do curso"/>
      <input type="text" v-model="lista.duracao" placeholder="Informe a duração do curso"/>
      <button @click="handleNewCurse">Adicionar nova informação</button>
      <Aulas/>
  </div>
</template>

<script>
  import Aulas from '@/components/Aulas.vue'
export default {
  components:{ Aulas },
  data(){
    return{
      lista: {
        usuario: '',
        nome_do_curso: '',
        duracao: ''
      }
    }
  },
  methods:{
    handleNewCurse(){
      let obj  = JSON.parse(JSON.stringify(this.lista))
      this.$store.commit('ADICIONAR_LISTA', obj)
    }
  }
}
</script>

<style>

</style>