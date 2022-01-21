<template>
  <formulario @tarefaFinalizada="salvarTarefa"/>
  <div class="p-3">
    <tarefa v-for="(tarefa, index) in tarefas" :tarefa="tarefa" :key="index"/>
    <div v-if="tarefas.length === 0" class="box has-text-weight-bold">
      <p>Nenhuma tarefa executada hoje :(</p>
    </div>
  </div>
</template>

<script lang="ts">
import Formulario from '@/components/Formulario.vue';
import Tarefa from '@/components/Tarefa.vue';
import {defineComponent} from 'vue'
import ITarefa from '@/interfaces/ITarefa';
export default defineComponent({
  name: 'Tarefas',
  components: {Tarefa, Formulario},
  data: () => ({
    tarefas: [] as ITarefa[],
  }),
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    },
  }
})
</script>
