import IProjeto from '@/interfaces/IProjeto'
import {createStore, Store} from 'vuex'
import {InjectionKey} from 'vue'

interface Estado {
  projetos: IProjeto[],
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
  state: {
    projetos: [
      {id: new Date().toISOString(), nome: 'Vuex - estudando e implementando'},
    ],
  },
  mutations: {
    'ADICIONA_PROJETO'(state, nomeDoProjeto: string) {
      const projeto = {id: new Date().toISOString(), nome: nomeDoProjeto} as IProjeto
      state.projetos.push(projeto)
    },
    'ATUALIZA_PROJETO'(state, projeto: IProjeto) {
      const index = state.projetos.findIndex(proj => proj.id == projeto.id)
      if (index != -1) state.projetos[index] = projeto
    },
    'DELETAR_PROJETO'(state, id) {
      state.projetos = state.projetos.filter(proj => proj.id != id)
    },
  },
})
