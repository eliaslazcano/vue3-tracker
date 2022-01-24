export enum TipoNotificacao {
  SUCESSO = 'is-success',
  ATENCAO = 'is-warning',
  FALHA = 'is-danger'
}

export interface INotificacao {
  titulo: string,
  texto: string,
  tipo: TipoNotificacao,
  id: number
}
