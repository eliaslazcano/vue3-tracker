<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>
    <form @submit.prevent="salvarProjeto">
      <div class="field">
        <label for="iptNomeDoProjeto" class="label">Nome do Projeto</label>
        <input type="text" class="input" v-model="iptNomeDoProjeto" id="iptNomeDoProjeto">
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
    <table class="table is-fullwidth">
      <thead>
      <tr>
        <th>ID</th>
        <th>Nome</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="projeto in projetos" :key="projeto.id">
        <td>{{ projeto.id }}</td>
        <td>{{ projeto.nome }}</td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
import {useStore} from 'vuex'
import {key} from '@/store'
export default defineComponent({
  name: 'Projetos',
  data: () => ({
    iptNomeDoProjeto: '',
  }),
  methods: {
    salvarProjeto(): void {
      this.store.commit('ADICIONA_PROJETO', this.iptNomeDoProjeto)
      this.iptNomeDoProjeto = ''
    },
  },
  setup() {
    //Esta funcao setup() executa durante a criação do componente, por aqui é possível criar os tradicionais data, methods, computed e etc.
    const store = useStore(key)
    return {
      projetos: computed(() => store.state.projetos), //Por que nao usei apenas 'store.state.projetos'? Este valor pode sofrer alteracoes em tempo de execucao, portanto ele sera criado como uma computed property
      store: store
    }
  },
})
</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>
