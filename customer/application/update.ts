import {Customer} from '../domain/customer'
import {CustomerRepository} from '../infra/repository/customer.repository'

import {sanitizeUseCase} from './shared'

function update(repo: CustomerRepository) {
  return async function (id: string, data: {name: string; bags: number}) {
    try {
      return sanitizeUseCase(repo.update(id, data))
    } catch (err) {
      return sanitizeUseCase(Promise.reject(String(err)))
    }
  }
}

export {update}
