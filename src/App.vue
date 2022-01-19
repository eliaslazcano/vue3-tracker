<template>
  <main class="columns is-gapless is-multiline" :class="{'modo-escuro': modoEscuro}">
    <aside class="column is-one-quarter">
      <barra-lateral @tema-alterado="alternarTema"/>
    </aside>
    <section class="column is-three-quarter conteudo">
      <formulario @tarefaFinalizada="salvarTarefa"/>
      <div class="p-3">
        <tarefa v-for="(tarefa, index) in tarefas" :tarefa="tarefa" :key="index"/>
        <div v-if="tarefas.length === 0" class="box has-text-weight-bold">
          <p>Nenhuma tarefa executada hoje :(</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BarraLateral from '@/components/BarraLateral.vue';
import Formulario from '@/components/Formulario.vue';
import Tarefa from '@/components/Tarefa.vue';
import ITarefa from '@/interfaces/ITarefa';
export default defineComponent({
  name: 'App',
  components: {Tarefa, Formulario, BarraLateral},
  data: () => ({
    tarefas: [] as ITarefa[],
    modoEscuro: false,
  }),
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    },
    alternarTema(modoEscuro: boolean) {
      this.modoEscuro = modoEscuro
    },
  },
});
</script>

<style>
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}
main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}
.conteudo {
  background-color: var(--bg-primario);
}
</style>

