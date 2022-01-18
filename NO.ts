class NO {

  private _valor: number
  private _altura: number
  private _direita: NO
  private _esquerda: NO

  constructor(valor: number) {
    this._valor = valor
    this._altura = 0
    this._direita = null
    this._esquerda = null
  }

  public get valor(): number {
    return this._valor
  }
  public set valor(value: number) {
    this._valor = value
  }

  public get altura(): number {
    return this._altura
  }
  public set altura(value: number) {
    this._altura = value
  }

  public get direita(): NO {
    return this._direita
  }
  public set direita(value: NO) {
    this._direita = value
  }

  public get esquerda(): NO {
    return this._esquerda
  }
  public set esquerda(value: NO) {
    this._esquerda = value
  }
}

export { NO }