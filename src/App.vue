<template>
  <div>
    <Aluno/>
    <Curso/>
  </div>
</template>

<script>
  import Aluno from '@/components/Aluno.vue'
  import Curso from '@/components/Curso.vue'
export default {
  components:{Aluno,Curso }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
</style>
