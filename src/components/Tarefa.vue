<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-5">
        {{ tarefa.descricao || 'Tarefa sem descrição' }}
      </div>
      <div class="column is-5">
        {{ tarefa.projeto?.nome || 'N/D' }}
      </div>
      <div class="column">
        <TimerDisplay :tempo-em-segundos="tarefa.duracaoEmSegundos"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import TimerDisplay from '@/components/TimerDisplay.vue'
import ITarefa from '@/interfaces/ITarefa'
export default defineComponent({
  name: 'Tarefa',
  components: {TimerDisplay},
  props: {
    tarefa: {type: Object as PropType<ITarefa>, required: true},
  },
})
</script>

<style scoped>
.box {
  background: #FAF0CA;
}
</style>
