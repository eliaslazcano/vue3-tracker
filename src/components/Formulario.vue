<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulario para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja inicial?">
      </div>
      <div class="column">
        <temporizador/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Temporizador from '@/components/Temporizador.vue';
export default {
  name: 'Formulario',
  components: {Temporizador},
}
</script>
