abstract class Funcionario {
    private _nome: string;
    private _salario: number;

    constructor(nome: string, salario: number) {
        this._nome = nome;
        this._salario = salario;
    }

    get nome(): string {
        return this._nome;
    }

    get salario(): number {
        return this._salario;
    }

    abstract calcularBonus(): number;
}

class Gerente extends Funcionario {
    calcularBonus(): number {
        return this.salario * 0.10;
    }
}

class Operario extends Funcionario {
    calcularBonus(): number {
        return this.salario * 0.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
        const bonus = funcionario.calcularBonus();
        const salarioFinal = funcionario.salario + bonus;
        console.log(`${funcionario.nome}: Salário final = R$ ${salarioFinal.toFixed(2)} (Bônus: R$ ${bonus.toFixed(2)})`);
    });
}