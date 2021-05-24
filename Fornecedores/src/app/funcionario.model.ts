export class Funcionario{
    constructor(
        public razaoSocial: string,
        public ativo: boolean,
        public dataCadastro: string,
        public valorUltimaCompra: number,
        public id?: number
    ) { }
}