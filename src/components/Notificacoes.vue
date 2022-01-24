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
  right: 0;
  width: 300px;
  padding: 8px;
}
</style>
