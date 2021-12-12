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

// Actions: Quando precisamos de uma lógica ligada a alteração do estado ou caso exista a necessidade de dispararmos mais de uma mutaçao
// utilizamos actions. Actions também permitem eventos assíncronos, diferente de mutaions

/**
 *  Exemplo de action + state + mutation
 *  state:{
 *    name: "Lobo",
 *    id: "2435"
 *  }
 *  mutations: {
 *    CHANGE_USER(state , payload){
 *      state.name = payload.name
 *    }
 *    CHANGE_ID(state, payload){
 *      state.id = payload.id
 *    } 
 *   }
 *  actions:{
 *   changeUser(context,payload){
 *      context.commit('CHANGE_USER', payload)
 *      context.commit('CHANGE_ID', payload) 
 *    }
 *  }
  Actions podem ser utilizadas para códigos assincronos.
 */

  // Getters são como as computed properties dos componentes. Deve ser utilizados quando precisamos fazer algo programático com o estado.
  /**
   *  Exemplo de getters
   *  state: {
   *    livros: [
   *      { nome: Senhor do aneis, lido: true}
   *      {nome: Harry Poder, lido: false}
   *      {nome : Breaking Bad, lido: true}
   *    ]
   *  }
   *  getters:{
   *    livrosLidos(state){
   *      return state.livros.filter(livro => livro.lido)
   *    }
   *  }
   * 
   * 
   *  */

    // Quando seu aplicativo começa a crescer e ficar mais complexo, o ideal é separar o código em diferente partes. Para isso podemos utilizar modules
    /**
     *  exemplo de utilização:
     *  import login from '@/store/login.js'
     *  import cart from '@/store/cart.js
     *  
     *  export defualt new Vuex.store({
     *  modules: {
     *    login,
     *    cart
     *  }
     * 
     * })
     *  
     */
      //Sendo assim, para usar as informações presentes no state do login, devemos fazer: $store.state.login.xxx