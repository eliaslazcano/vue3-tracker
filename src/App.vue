<template>
  <div class="columns is-gapless is-multiline">
    <aside class="column is-one-quarter">
      <barra-lateral/>
    </aside>
    <main class="column is-three-quarter">
      <formulario @tarefaFinalizada="salvarTarefa"/>
      <div class="p-3">
        <tarefa v-for="(tarefa, index) in tarefas" :tarefa="tarefa" :key="index"/>
        <div v-if="tarefas.length === 0" class="box has-text-weight-bold">
          <p>Nenhuma tarefa executada hoje :(</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from '@/components/BarraLateral.vue';
import Formulario from '@/components/Formulario.vue';
import Tarefa from '@/components/Tarefa.vue';
import ITarefa from '@/interfaces/ITarefa';
export default defineComponent({
  name: 'App',
  components: {Tarefa, Formulario, BarraLateral},
  data: () => ({
    tarefas: [] as ITarefa[],
  }),
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    },
  },
});
</script>

