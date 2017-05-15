import { MemoryStore, Store, Kora } from '@ironbay/kora'

export const store = new MemoryStore() as Store
export const kora = new Kora('ws://localhost:12000/socket', this.store)