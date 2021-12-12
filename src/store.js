import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    lista:{
      usuario: '',
      nome_do_curso: '',
      duracao: '',
    },
    array_lista: []    
  },
  mutations:{
    ADICIONAR_LISTA(state, payload){
      state.array_lista.push(JSON.parse(JSON.stringify(payload)))
      console.log(state.array_lista)
    }
  }
})