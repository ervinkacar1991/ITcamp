
//Sinc code example

 /* function otherFunct(){
    console.log('We are another function');
    console.log('Do some stuff');
}

console.log('start'); 

otherFunct();


console.log('end');   */


//Async code xample 

console.log('start'); 

setTimeout(()=>{
console.log('we are in the timeouc');
},5000)

const items = [1,2,3,4,5];

items.forEach(item=>{
console.log(item);
});

console.log('end'); 
