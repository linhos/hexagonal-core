import {Customer} from '../../domain/customer'

import {uid} from '../utils/generateUID'

const inMemoryToCustomer = (data: any): Customer => {
  return {
    id: String(data.id),
    name: data.name,
    bags: +data.bags,
  }
}

export {inMemoryToCustomer}
