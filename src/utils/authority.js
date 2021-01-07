import store from '@/store'
const name = 'my-blog'
const maxAge = 1000 * 60 * 60 * 24 * 30

let authority = {
  get() {
    let data = JSON.parse(window.localStorage.getItem(name)) || { time: 0 }
    if (new Date().getTime() - data.time >= maxAge) {
      this.clear()
      return {}
    }
    return data || {}
  },
  set(obj) {
    let user = this.get()
    obj = { ...user, ...obj, time: user.time || new Date().getTime() }
    store.dispatch('user/SET_USER', { user: obj })
    window.localStorage.setItem(name, JSON.stringify(obj))
  },
  clear() {
    store.dispatch('user/SET_USER', { user: {} })
    window.localStorage.removeItem(name)
  },
}

export default authority
