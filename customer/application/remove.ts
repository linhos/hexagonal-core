import {CustomerRepository} from '../infra/repository/customer.repository'

import {sanitizeUseCase} from './shared'

function remove(repo: CustomerRepository) {
  return async function (id: string) {
    try {
      return sanitizeUseCase(repo.remove(id))
    } catch (error) {
      return sanitizeUseCase(Promise.reject(String(error)))
    }
  }
}

export {remove}
