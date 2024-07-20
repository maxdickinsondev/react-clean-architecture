export interface UseCase<T = any, K = any> {
  execute(data?: T): Promise<K>;
}
