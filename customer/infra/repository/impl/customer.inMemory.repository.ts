import {Customer} from '../../../domain/customer'
import {CustomerRepository} from '../customer.repository'

import {inMemoryToCustomer} from '../../adapters/inMemory.to.customer'
import {uid} from '../../utils/generateUID'

let db: any[] = [
  {id: uid(), name: 'Frodo', bags: '1', active: true},
  {id: uid(), name: 'Sam', bags: 100, active: false},
  {id: uid(), name: 'Galadriel', bags: 1, active: true},
]

export class CustomerInMemoryRepository implements CustomerRepository {
  public async find(): Promise<Customer[] | []> {
    return db.map(inMemoryToCustomer)
  }

  public async create(data: {name: string; bags: number}): Promise<Customer> {
    const newCustomer = inMemoryToCustomer({...data})

    db.push(newCustomer)
    return newCustomer
  }

  public async update(
    id: string,
    data: {
      name: string
      bags: number
    },
  ): Promise<null> {
    const updatedCustomers = db.map(obj => {
      if (obj.id === id) {
        return {...obj, ...{name: data.name, bags: data.bags}}
      }
      return obj
    })
    db = updatedCustomers
    return null
  }

  public async remove(id: string): Promise<void> {
    const result = db.filter(customer => customer.id != id)
    db = result
    return
  }
}
