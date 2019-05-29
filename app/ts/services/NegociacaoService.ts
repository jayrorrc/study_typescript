import { NegociacaoParcial, Negociacao } from '../models/index';

export class NegociacaoService {

    obterNegociacoes(handler: ResponseHandler): Promise<void | Negociacao[]> {

        return fetch('http://172.20.0.2:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) =>
                dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            )
            .catch(err => {
                console.log(err)

                throw new Error('Não foi possivel importar as negociações');
            });

    }
}

export interface ResponseHandler {

    (res: Response): Response
}