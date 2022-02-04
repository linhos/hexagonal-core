import {Customer} from '../domain/customer'
import {CustomerRepository} from '../infra/repository/customer.repository'

import {sanitizeUseCase} from './shared'

function create(repo: CustomerRepository) {
  return function (data: {name: string; bags: number}) {
    try {
      return sanitizeUseCase(repo.create(data))
    } catch (error) {
      return sanitizeUseCase(Promise.reject(String(error)))
    }
  }
}

export {create}
