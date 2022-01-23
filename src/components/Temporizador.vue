<template>
  <div class="box formulario">
    <div class="columns">
      <div class="column is-5" role="form" aria-label="Formulario para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja inicial?" v-model="descricao">
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o projeto</option>
            <option v-for="projeto in projetos" :key="projeto.id" :value="projeto.id">{{projeto.nome}}</option>
          </select>
        </div>
      </div>
      <div class="column">
        <Cronometro @finalizado="finalizarTarefa"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import Cronometro from '@/components/Temporizador/Cronometro.vue'
import { useStore } from 'vuex'
import { key } from '@/store'
export default defineComponent({
  name: 'Temporizador',
  emits: ['tarefaFinalizada'],
  components: {Cronometro},
  data: () => ({
    descricao: '',
    idProjeto: '',
  }),
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      this.$emit('tarefaFinalizada', {
        duracaoEmSegundos: tempoDecorrido,
        descricao: this.descricao,
        projeto: this.projetos.find(proj => proj.id == this.idProjeto)
      })
      this.descricao = ''
    }
  },
  setup() {
    const store = useStore(key)
    return {
      projetos: computed(() => store.state.projetos)
    }
  },
})
</script>

<style>
.formulario {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>
