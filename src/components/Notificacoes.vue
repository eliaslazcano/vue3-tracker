<template>
  <div class="notificacoes">
    <article class="message" v-for="notificacao in notificacoes" :key="notificacao.id" :class="notificacao.tipo">
      <div class="message-header">
        {{notificacao.titulo}}
      </div>
      <div class="message-body">
        {{notificacao.texto}}
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
import {useStore} from 'vuex';
import {key} from '@/store';
export default defineComponent({
  name: 'Notificacoes',
  setup() {
    const store = useStore(key)
    return {
      notificacoes: computed(() => store.state.notificacoes)
    }
  },
})
</script>

<style scoped>
.notificacoes {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 24rem;
}
.notificacoes article {
  box-shadow: 1px 1px 3px rgba(0,0,0,.25);
  margin-bottom: .75rem;
}
</style>
