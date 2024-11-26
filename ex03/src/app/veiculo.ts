export abstract class Veiculo {
    modelo:string;
    ano:number;
    valorDiaria:number

    constructor(modelo:string, ano:number, valorDiaria:number){
        this.modelo = modelo,
        this.ano = ano,
        this.valorDiaria = valorDiaria
    }

    calcularValorAluguel(dias:number):number{
        const aluguel = dias * this.valorDiaria
        return aluguel
    }
}

