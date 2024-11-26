import { Veiculo } from './veiculo';
export class Locadora {
    nome:string;
    veiculos: Veiculo[];

    constructor(nome:string){
        this.nome = nome
        this.veiculos = []
    }

    adicionarVeiculo(veiculo:Veiculo){
        this.veiculos.push(veiculo)
    }

    listarVeiculos() {
        this.veiculos.forEach(veiculo => {
            return veiculo; 
        });
    }
    
}