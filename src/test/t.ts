type A = string | number
type B<T> = T extends A ? boolean:number

function f1<T>(a:A,b:B<A>) {
    
}

interface T1{
    (a: number): string
    (b: string): string
    aa:number
}

// let ft1: T1 = function a() {
// }

// ft1.aa=1



export {}