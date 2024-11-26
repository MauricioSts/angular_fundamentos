import { Veiculo } from './veiculo';

export class Moto extends Veiculo{
    cilindradas:number
    override calcularValorAluguel(dias: number): number {
        const aluguel = dias * this.valorDiaria
        return aluguel *1.05
    }

    constructor(cilindradas:number, modelo:string, ano:number,valorDiaria:number){
        super(modelo, ano, valorDiaria)
       this.cilindradas = cilindradas
    }
}