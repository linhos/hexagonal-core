import {Customer} from '../../domain/customer'

export interface CustomerRepository {
  find(): Promise<Customer[]>
  create(data: {
    name: string
    bags: number
  }): Promise<{name: string; bags: number}>
  update(
    id: string,
    data: {
      name: string
      bags: number
    },
  ): Promise<Customer>
  remove(id: string): Promise<void>
}
