import { Pessoa } from "./Pessoa";
import { Categoria } from "./Categoria";

export class Lancamento {

    id: number;
    descricao: string;
    tipo = 'RECEITA';
    dataVencimento: Date;
    dataPagamento: Date;
    valor: number;
    observacao: string;
    categoria = new Categoria();
    pessoa = new Pessoa();

}