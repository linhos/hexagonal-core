import {find} from './application/find'
import {create} from './application/create'
import {remove} from './application/remove'
import {update} from './application/update'

import {CustomerInMemoryRepository} from './infra/repository/impl/customer.inMemory.repository'

const repo = new CustomerInMemoryRepository()

const Customer = {
  find: find(repo),
  create: create(repo),
  remove: remove(repo),
  update: update(repo),
}

export {Customer}
