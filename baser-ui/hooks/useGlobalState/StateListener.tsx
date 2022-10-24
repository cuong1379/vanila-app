import { StateStorer } from './StateStorer'

export class StateListener {
  listener: any = {}
  stateStorer: StateStorer
  constructor(stateStorer: StateStorer) {
    this.stateStorer = stateStorer
  }
  add(key: string, setState: any) {
    this.listener[key] = this.listener[key] || new Set()
    this.listener[key]?.add(setState)
  }
  del(key: string, setState: any) {
    this.listener[key]?.delete(setState)
  }
  delAll(key: string) {
    this.listener[key]?.clear()
  }
  broadCast(key: string) {
    // change from A will be broadcast to A, A.B, A.B.C, ...
    Object.keys(this.listener)
      .filter((k: string) => k.startsWith(key))
      .map((k: string) => {
        const nextState = this.stateStorer.get(k)
        this.listener[k]?.forEach((setState: any) => setState(nextState))
      })
  }
}
