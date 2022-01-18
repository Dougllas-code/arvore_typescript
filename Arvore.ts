import { NO } from "./NO"

class Arvore {

  private _raiz: NO

  public get raiz(): NO {
    return this._raiz
  }

  public altura(node: NO): number {
    return node == null ? -1 : node.altura
  }

  private atualizarAltura(node: NO) {
    node.altura = 1 + Math.max(this.altura(node.esquerda), this.altura(node.direita))
  }

  private balanceamento(node: NO): number {
    return node == null ? 0 : this.altura(node.direita) - this.altura(node.esquerda)
  }

  public adicionar(nElementos: number): void {
    for (let index = 0; index < nElementos; index++) {
      let max = 100
      let min = 1
      let valor = Math.floor(Math.random() * (max - min)) + min

      this._raiz = this.adicionarNO(this._raiz, valor)
    }
  }

  private adicionarNO(node: NO, valor: number): NO {
    if (node == null) {
      return new NO(valor)

    } else if (node.valor > valor) {
      node.esquerda = this.adicionarNO(node.esquerda, valor)

    } else if (node.valor < valor) {
      node.direita = this.adicionarNO(node.direita, valor)
    } else {
      throw new Error('Valor já existe')
    }
    return this.reequilibrar(node)
  }

  private reequilibrar(node: NO): NO {
    this.atualizarAltura(node)
    let fatorBalanceamento = this.balanceamento(node)

    if (fatorBalanceamento > 1) {

      if (this.altura(node.direita.direita) > this.altura(node.direita.esquerda)) {
        node = this.rotacionarEsquerda(node)
      } else {
        node.direita = this.rotacionarDireita(node.direita)
        node = this.rotacionarEsquerda(node)
      }

    } else if (fatorBalanceamento < -1) {

      if (this.altura(node.esquerda.esquerda) > this.altura(node.esquerda.direita)) {
        node = this.rotacionarDireita(node)
      } else {
        node.esquerda = this.rotacionarEsquerda(node.esquerda)
        node = this.rotacionarDireita(node)
      }
    }

    return node
  }

  private rotacionarDireita(node: NO): NO {
    let auxE = node.esquerda
    let auxD = node.direita

    auxE.direita = node
    node.esquerda = auxD

    this.atualizarAltura(node)
    this.atualizarAltura(auxE)

    return auxE
  }

  private rotacionarEsquerda(node: NO): NO {
    let auxD = node.direita
    let auxE = node.esquerda

    auxD.esquerda = node
    node.direita = auxE

    this.atualizarAltura(node)
    this.atualizarAltura(auxD)

    return auxD
  }

  public emOrdem(folha: NO) {

    if (folha !== null) {
      this.emOrdem(folha.esquerda)
      console.log(folha.valor + ' ')
      this.emOrdem(folha.direita)
    }
  }

}

export { Arvore }