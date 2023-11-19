// https://stackoverflow.com/a/69288824/8440230
declare type Expand<T> = T extends (...args: infer A) => infer R
  ? (...args: Expand<A>) => Expand<R>
  : T extends infer O
    ? { [K in keyof O]: O[K] }
    : never

declare type ExpandRecursively<T> = T extends (...args: infer A) => infer R
  ? (...args: ExpandRecursively<A>) => ExpandRecursively<R>
  : T extends object
    ? T extends infer O
      ? { [K in keyof O]: ExpandRecursively<O[K]> }
      : never
    : T

declare type Year = `${d}${d}${d}${d}`
declare type Month = `0${d}` | '10' | '11' | '12'
declare type Day = `0${d}` | `1${d}` | `2${d}` | '30' | '31'

declare type DateString = `${Year}-${Month}-${Day}`
