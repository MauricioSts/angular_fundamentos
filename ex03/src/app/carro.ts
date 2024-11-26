import { Veiculo } from './veiculo';
export class Carro extends Veiculo{
    qtsPortas:number
    override calcularValorAluguel(dias: number): number {
        const aluguel = dias * this.valorDiaria
        return aluguel * 0.90
    }

    constructor(qtsPortas:number, modelo:string, ano:number,valorDiaria:number){
        super(modelo, ano, valorDiaria)
        this.qtsPortas = qtsPortas
    }
}