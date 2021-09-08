
//Sinc code example

 /* function otherFunct(){
    console.log('We are another function');
    console.log('Do some stuff');
}

console.log('start'); 

otherFunct();


console.log('end');   */


//Async code xample 

 /* console.log('start'); 

setTimeout(()=>{
console.log('we are in the timeouc');
},5000)

const items = [1,2,3,4,5];

items.forEach(item=>{
console.log(item);
});

console.log('end');   */



  /* console.log("start");


function loginUser(email,password, callback){
    setTimeout(()=>{
        console.log("Now we have the data");
        callback ({userEmail: email});
    },5000)
}

const user = loginUser ("kacarervin@gmail.com", 123445, (user)=>{
console.log(user);
});


console.log("finish");    */

  // more async example

console.log("start");


function loginUser(email,password, callback){
    setTimeout(()=>{
        console.log("Now we have the data");
        callback ({userEmail: email});
    },3000);
}
function getUserVideos(email,callback){
  setTimeout(()=>{
callback (["video1", "video2", "video3"]);
  },2000);
}
function videoDetails(email,callback){
    setTimeout(()=>{
  callback ("title of a video");
    },2000);
  }

const user = loginUser ("kacarervin@gmail.com", 123445, (user)=>{
console.log(user);
getUserVideos(user.userEmail, videos => {
console.log(videos);
});
});


console.log("finish");
