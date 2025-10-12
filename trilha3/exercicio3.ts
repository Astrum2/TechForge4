class Pagamento{
    processar(): void{

    }
}

class PagamentoCartao extends Pagamento {
    constructor(public numeroCartao: string) {
        super();
    }

    private validarCartao(): boolean {
        return /^\d{16}$/.test(this.numeroCartao);
    }

    processar(): void {
        if (this.validarCartao()) {
            console.log("Pagamento com cartão processado.");
        } else {
            console.log("Número do cartão inválido.");
        }
    }
}

class PagamentoBoleto extends Pagamento {
    processar(): void {
        const codigoBoleto = Math.floor(Math.random() * 1000000000000).toString().padStart(13, '0');
        console.log(`Boleto gerado: ${codigoBoleto}`);
    }
}

function processarPagamentos(pagamentos: Pagamento[]) {
    pagamentos.forEach(pagamento => pagamento.processar());
}