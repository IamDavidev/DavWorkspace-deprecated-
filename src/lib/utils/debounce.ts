// eslint-disable-next-line @typescript-eslint/ban-types
export function debounce<T extends Function>(func: T, waitMs: number):
  (this: any, ...args: any[]) => void {
  let timeoutId: ReturnType<typeof setTimeout>

  return function(this: any, ...args: any[]) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(context, args), waitMs)
  }

}
