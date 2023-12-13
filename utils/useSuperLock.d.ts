/**
 * 超级锁钩子。未运行完毕锁。n毫秒运行一次锁。运行成功n毫秒后才能运行锁。
 * @param setLoading
 * @param fun
 */
export declare function useSuperLock<T extends (...args: any) => Promise<unknown>>(this: any, fun: T, delay?: number): [(...args: Parameters<T>) => ReturnType<T> | Promise<void>, boolean];
