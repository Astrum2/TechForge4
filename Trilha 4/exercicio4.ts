export interface Livro {
  titulo: string;
  autor: string;
  disponivel: boolean;
}

export class Biblioteca {
  constructor(public livros: Livro[] = []) {}

  buscarLivrosDisponiveis(): Livro[] {
    return this.livros.filter(l => l.disponivel);
  }
}