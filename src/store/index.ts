import IProjeto from '@/interfaces/IProjeto'
import {createStore, Store} from 'vuex'
import {InjectionKey} from 'vue'
import {ADICIONA_PROJETO, ATUALIZA_PROJETO, DELETAR_PROJETO, NOTIFICAR} from '@/store/mutation-types'
import {INotificacao} from '@/interfaces/INotificacao';

interface Estado {
  projetos: IProjeto[],
  notificacoes: INotificacao[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
  state: {
    projetos: [
      {id: new Date().toISOString(), nome: 'Vuex - estudando e implementando'},
    ],
    notificacoes: [],
  },
  mutations: {
    [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
      const projeto = {id: new Date().toISOString(), nome: nomeDoProjeto} as IProjeto
      state.projetos.push(projeto)
    },
    [ATUALIZA_PROJETO](state, projeto: IProjeto) {
      const index = state.projetos.findIndex(proj => proj.id == projeto.id)
      if (index != -1) state.projetos[index] = projeto
    },
    [DELETAR_PROJETO](state, id) {
      state.projetos = state.projetos.filter(proj => proj.id != id)
    },
    [NOTIFICAR](state, novaNotificacao: INotificacao) {
      novaNotificacao.id = new Date().getTime()
      state.notificacoes.push(novaNotificacao)
      setTimeout(() => {
        state.notificacoes = state.notificacoes.filter(not => not.id != novaNotificacao.id)
      }, 3000)
    },
  },
})
