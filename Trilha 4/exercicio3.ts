export interface ProdutoLoja {
  codigo: number;
  nome: string;
}

export class Loja {
  constructor(public produtos: ProdutoLoja[] = []) {}

  buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
    return this.produtos.find(p => p.codigo === codigo);
  }
}