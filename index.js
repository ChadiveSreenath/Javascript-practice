
// write a promise which returns an array of strings or array of objects 

const getList = (flag) =>
    new Promise((resolve, reject) => {
        resolve(["a", "b", "c"])
        reject({ error: "Something went wrong" })
    })

getList(false).then((res) => {
    console.log(res)
})
    .catch((err) => {
        console.log(err)
    })


//  [a, [b, c, [d, e, f, [g, h, i, j]]]] => [a, b, c, d, e, f, g, h, i, j]
// [[[[[]]]]]=> [] Flatten Array

// { a: { b: { c: { d: { e: "ans" } } } } } => a.b.c => {d:{e:"ans"}}

let obj = { a: { b: { c: { d: { e: "ans" } } } } }
let path = "a.b.c.e.d"

// first we take out a 
// obj.a is a val for res
// then we take out second value from path
// obj.b is val for result 

path = path.split(".")

let res = { ...obj }
for (var i = 0; i < path.length; i++) {
    res = res[path[i]]

}
console.log(res)

// i=0 0<5 if(a) res = { b: { c: { d: { e: "ans" } } } } i++
// i = 1 1<5 if(b) res = { c: { d: { e: "ans" } } }
// i = 2 2<5 if(c) res =  { d: { e: "ans" } } i++
// i=3 3<5 if(e) (failed) res =  { d: { e: "ans" } } i++
// i=4 4<5 if(d) res = { e: "ans" } i++
//loop end
// hence console.log(res)
// !! - bang bang operator
// && and and  ,
//? - terinary ,
// ?? - null operator  let name = null ?? "seena" 

