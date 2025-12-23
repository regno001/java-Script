function createCourse(coursename){
  console.log('creating '+coursename);
}

// createCourse('hld');
// createCourse('bca');

function addition(a ,b){
  console.log('addition ' + a+b);
}

function minus(a,b){
  console.log('minus'+ (a-b));
}

function multiply(a,b){
  console.log('multiply'+ a*b);

}
function divide(a,b){
  console.log('dividing '+a/b);
}
//arrow //mordernjs 
const sum =(a,b)=>{
console.log(a+b);
}
const multi=(a,b)=>{
  console.log("multiply "+a*b);
  
}
const printHeloo = ()=>console.log("hello");

function countVowels(str){
  let count =0 ;
  for (const char of str) {
    if(char=="a"||char=="e"||char=="i"||char=="o" || char=="u"){
       count++;
    }
    
  }
  console.log("number od vowels in the string are "+ count);
}
countVowels("rahul");
//arrowfunction to do the same task 
const countinGVowel=(str)=>{
  let count=0;
  for(const char of str){
    if(char=="a"||char=="e"||char=="i"||char=="o" || char=="u"){
      count++;
    }
  }
  console.log(count);
}
countinGVowel("anksuh");
printHeloo();
multi(2,4);
sum(3,4);
addition(2,3);
minus(7,3);
multiply(4,5);
divide(10,2);