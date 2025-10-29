export interface LivroBiblioteca {
  titulo: string;
  autor: string;
  genero: string;
  disponivel: boolean;
}

export class BibliotecaGestao {
  constructor(public livros: LivroBiblioteca[] = []) {}

  filtrarPorGenero(genero: string): LivroBiblioteca[] {
    return this.livros.filter(
      l => l.genero.toLowerCase() === genero.toLowerCase()
    );
  }

  buscarPorAutor(autor: string): LivroBiblioteca[] {
    return this.livros.filter(
      l => l.autor.toLowerCase() === autor.toLowerCase()
    );
  }

  obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
    return this.livros
      .filter(l => l.disponivel)
      .slice()
      .sort((a, b) => a.titulo.localeCompare(b.titulo));
  }
}