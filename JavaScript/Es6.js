// 
// Es6 : -
// 1.Arrow functions
// 2.Destructing
// 3.Spread and Rest opeartor
// 4.


//  [{name:"seena",age:22,place:"nakkalgutta"},{name:"suga",age:23,place:"nakkalgutta"},{name:"rizwan",age:27,place:"nakkalgutta"},{name:"renu",age:12,place:"nakkalgutta"},] =>
// [{name:"Seena",age:22,elgible_for_drive:true,place:"nakkalgutta"},{name:"Suga",age:23,elgible_for_drive:true,place:"nakkalgutta"},{name:"Rizwan",age:27,elgible_for_drive:true,place:"nakkalgutta"},{name:"Renu",age:12,elgible_for_drive:false,place:"nakkalgutta"},]

let arr = [{ name: "seenA", age: 22, place: "nakkalgutta" }, { name: "suGa", age: 23, place: "nakkalgutta" }, { name: "rIzwan", age: 27, place: "nakkalgutta" }, { name: "reNu", age: 12, place: "nakkalgutta" },]

const updatedData = (arr) => arr.map(({ name, age, ...rest }) => (
    {
        name: name[0].toUpperCase() + name.slice(1).toLowerCase(),
        elgible_for_drive: age >= 18,
        age,
        ...rest
    }
))
console.table(updatedData(arr))


