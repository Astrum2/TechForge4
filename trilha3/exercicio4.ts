class Animal {
    private energia: number;

    constructor(energiaInicial: number = 50) {
        this.energia = energiaInicial;
    }

    comer(): void {
        this.energia += 10;
    }

    statusEnergia(): void {
        console.log(`Energia atual: ${this.energia}`);
    }
}

class Leao extends Animal {
    comer(): void {

        this.gastarEnergia(15);
        super.comer();
        console.log("O leão caçou e comeu.");
    }

    private gastarEnergia(valor: number): void {

    }
}

class Passaro extends Animal {
    comer(): void {
        super.comer();
        console.log("O pássaro se alimentou.");
    }
}


class AnimalCorrigido {
    protected energia: number;

    constructor(energiaInicial: number = 50) {
        this.energia = energiaInicial;
    }

    comer(): void {
        this.energia += 10;
    }

    statusEnergia(): void {
        console.log(`Energia atual: ${this.energia}`);
    }
}

class LeaoCorrigido extends AnimalCorrigido {
    comer(): void {
        this.energia -= 15;
        super.comer();     
        console.log("O leão caçou e comeu.");
    }
}

class PassaroCorrigido extends AnimalCorrigido {
    comer(): void {
        super.comer();
        console.log("O pássaro se alimentou.");
    }
}