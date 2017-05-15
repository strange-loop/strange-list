import { MemoryStore, Kora } from '@ironbay/kora'


export const store = new MemoryStore()
export const kora = new Kora('ws://localhost:12000/socket', this.store)