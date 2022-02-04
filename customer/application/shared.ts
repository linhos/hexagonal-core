export type UseCaseError = [string, null]
export type UseCaseSuccess<T> = [null, T]

export const sanitizeUseCase = <T>(
  useCase: Promise<T>,
): Promise<UseCaseSuccess<T> | UseCaseError> =>
  useCase.then(
    (result: T) => [null, result] as UseCaseSuccess<T>,
    (error: Error) => [error.message, null] as UseCaseError,
  )
