<template>
  <form @submit.prevent="salvarProjeto">
    <div class="field">
      <label for="iptNomeDoProjeto" class="label">Nome do Projeto</label>
      <input type="text" class="input" v-model="iptNomeDoProjeto" id="iptNomeDoProjeto">
    </div>
    <div class="field">
      <button class="button" type="submit">Salvar</button>
    </div>
  </form>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import {useStore} from 'vuex'
import {key} from '@/store'
import IProjeto from '@/interfaces/IProjeto';
import {ADICIONA_PROJETO, ATUALIZA_PROJETO} from '@/store/mutation-types';
import {TipoNotificacao} from '@/interfaces/INotificacao';
import notificador from '@/hooks/notificador'

export default defineComponent({
  name: 'Formulario',
  props: {
    id: { type: String }
  },
  methods: {
    salvarProjeto(): void {
      if (this.id) {
        const projeto = {id: this.id, nome: this.iptNomeDoProjeto} as IProjeto
        this.store.commit(ATUALIZA_PROJETO, projeto)
      } else {
        this.store.commit(ADICIONA_PROJETO, this.iptNomeDoProjeto)
      }
      this.iptNomeDoProjeto = ''
      this.notificar(TipoNotificacao.SUCESSO, 'Excelente!', 'O projeto foi cadastrado com sucesso!')
      this.$router.push('/projetos')
    },
  },
  setup(props) {
    const store = useStore(key)
    const iptNomeDoProjeto = ref(props.id ? store.state.projetos.find(proj => proj.id == props.id)?.nome || '' : '')
    const {notificar} = notificador()
    return {
      iptNomeDoProjeto,
      notificar,
      store
    }
  },
})
</script>
