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
import {defineComponent} from 'vue'
import IProjeto from '@/interfaces/IProjeto';
export default defineComponent({
  name: 'Projetos',
  data: () => ({
    iptNomeDoProjeto: '',
    projetos: [] as IProjeto[],
  }),
  methods: {
    salvarProjeto() {
      const projeto: IProjeto = {
        id: new Date().toISOString(),
        nome: this.iptNomeDoProjeto.trim()
      }
      this.projetos.push(projeto)
      this.iptNomeDoProjeto = ''
    },
  },
})
</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>
