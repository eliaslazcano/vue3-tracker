<template>
  <router-link to="/projetos/novo" class="button">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
  </router-link>
  <table class="table is-fullwidth">
    <thead>
    <tr>
      <th>ID</th>
      <th>Nome</th>
      <th>Ações</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="projeto in projetos" :key="projeto.id">
      <td>{{ projeto.id }}</td>
      <td>{{ projeto.nome }}</td>
      <td>
        <router-link :to="`/projetos/${projeto.id}`" class="button">
            <span class="icon is-small">
              <i class="fas fa-pencil-alt"></i>
            </span>
        </router-link>
        <button class="button ml-2 is-danger" @click="excluirProjeto(projeto.id)">
          <span class="icon is-small">
            <i class="fas fa-trash"></i>
          </span>
        </button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store'
import { DELETAR_PROJETO } from '@/store/mutation-types';
import notificador from '@/hooks/notificador';
import {TipoNotificacao} from '@/interfaces/INotificacao';
export default defineComponent({
  name: 'Lista',
  methods: {
    excluirProjeto(id: string) {
      this.store.commit(DELETAR_PROJETO, id)
      this.notificar(TipoNotificacao.FALHA, 'Deletado!', 'O projeto foi apagado!')
    },
  },
  setup() {
    const store = useStore(key)
    const {notificar} = notificador()
    return {
      projetos: computed(() => store.state.projetos),
      notificar,
      store
    }
  },
})
</script>
