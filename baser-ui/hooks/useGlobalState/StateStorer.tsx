import { setLocalState } from './StateLocal'

export class StateStorer {
  state: any = {}
  set(key: string, nextState: any) {
    try {
      const { last, parent } = this.separate(key)
      const ref = this.nav(parent)
      //console.log(full, ref)
      if (ref) {
        ref[last] = nextState
        setLocalState(key, nextState)
        return true
      }
    } catch (error) {
      console.error('Cannot set global state ', key, nextState)
    }
    return false
  }
  get(key: string) {
    const { full } = this.separate(key)
    const ref = this.nav(full)
    //console.log(full, ref)
    return ref
  }
  del(key: string) {
    this.set(key, undefined)
  }
  getState() {
    return this.state
  }
  nav(s: string[]) {
    const limit = s.length - 1
    let ref = this.state
    const isArrayOrObject = (o: any) => o instanceof Array || o instanceof Object
    // if (ref instanceof Object && Object.values(ref).length) {
    //   return ref
    // }
    for (let i = 0; i <= limit; ref = ref instanceof Object ? ref[s[i++]] : {}) {
      if (i < limit && !isArrayOrObject(ref)) {
        return undefined
      }
    }
    return ref
  }
  separate(key: string) {
    const s = key.split(/\[|\]|\./).filter(Boolean)
    return {
      full: s,
      parent: s.slice(0, -1),
      first: s[0],
      last: s[s.length - 1]
    }
  }
}
