/**
 * При многократном вызове функции сработает только последний вызов
 */
function debounce<F extends (...args: any[]) => any>(
  callback: F,
  ms: number
): (...args: Parameters<F>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return function (...args: Parameters<F>) {
    if (timeout !== null) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      callback(...args)
    }, ms)
  }
}

export {
  debounce,
}
