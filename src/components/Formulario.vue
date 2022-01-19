<template>
  <div class="box formulario">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulario para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja inicial?" v-model="descricao">
      </div>
      <div class="column">
        <temporizador @finalizado="finalizarTarefa"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Temporizador from '@/components/Temporizador.vue'
export default defineComponent({
  name: 'Formulario',
  emits: ['tarefaFinalizada'],
  components: {Temporizador},
  data: () => ({
    descricao: '',
  }),
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      const tarefa = {duracaoEmSegundos: tempoDecorrido, descricao: this.descricao}
      this.$emit('tarefaFinalizada', tarefa)
      this.descricao = ''
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
