import {Customer} from '../domain/customer'
import {CustomerRepository} from '../infra/repository/customer.repository'

import {sanitizeUseCase} from './shared'

function find(repo: CustomerRepository) {
  return function () {
    try {
      return sanitizeUseCase(repo.find())
    } catch (err) {
      return sanitizeUseCase(Promise.reject(String(err)))
    }
  }
}

export {find}
