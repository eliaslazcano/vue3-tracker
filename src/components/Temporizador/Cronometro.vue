<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <TimerDisplay :tempo-em-segundos="tempoEmSegundos"/>
    <button class="button" @click="iniciar" :disabled="!!cronometroId">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>Play</span>
    </button>
    <button class="button" @click="finalizar" :disabled="!cronometroId">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>Stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import TimerDisplay from '@/components/TimerDisplay.vue'
import {notificacaoMixin} from '@/mixins/notificar';
import {TipoNotificacao} from '@/interfaces/INotificacao';

export default defineComponent({
  name: 'Cronometro',
  emits: ['finalizado'], // Nome dos eventos que este componente possui
  components: {TimerDisplay},
  mixins: [notificacaoMixin],
  data: () => ({
    tempoEmSegundos: 0,
    cronometroId: 0,
  }),
  methods: {
    iniciar(): void {
      if (this.cronometroId === 0) {
        this.cronometroId = setInterval(() => this.tempoEmSegundos += 1, 1000)
        this.notificar(TipoNotificacao.ATENCAO, 'Cronometro iniciado!', 'A contagem começou, bora produzir!')
      }
    },
    finalizar(): void {
      clearInterval(this.cronometroId)
      this.cronometroId = 0
      this.notificar(TipoNotificacao.SUCESSO, 'Cronometro encerrado!', 'A contagem encerrou, bora descansar!')
      this.$emit('finalizado', this.tempoEmSegundos)
    },
  },
})
</script>
