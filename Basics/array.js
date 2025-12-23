let course = ['bca' ,'dsa', 'btech','mca'];
console.log(course);

//for each in array
function abc(){
  console.log("hello");
}


//callback function
function myfunc(abc){
  return abc;
}
 
let arr =[1,2,3,4,5];

arr.forEach(function printVal(val){// value at each index
console.log(val);
})
//arrow 
arr.forEach((val)=>{
  console.log(val);
});

let cities =["Mumbai","Pune","Banglore","Amritsar","Patna","Dehradun"];
cities.forEach((val)=>{
  console.log(val.toUpperCase());
});

let numbers = [2,3,4,5,6,7];

numbers.forEach((val)=>{
console.log(val*val);
});

/*map method 
let newArr = arr.map((val)=>{}
  return val*2;
});

*/

// let newArr= numbers.map((val)=>{
//   return val;
//   console.log(newArr);
// });
//filter method 
let EvenArr=numbers.filter((val)=>{
  return val%2==0;
})

console.log(EvenArr);
let odd = numbers.filter((val)=>{
  return val %2!=0;
})
console.log(odd);

//reduce 
 const output=numbers.reduce((res,curr)=>{
  return res+curr;
 })

 console.log(output);