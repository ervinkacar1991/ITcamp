/*   const promise = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        console.log("got the user");
resolve({user: "ed"});
    },2000);
});

promise.then(user =>{
    console.log(user);
});     */
    
    // promises with reject

   /*  const promise = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        console.log("got the user");
        reject(new Error("User not logged in"));
    },2000);
});

promise.then(user =>{
    console.log(user);
}).catch(err => console.log(err.message));   */


console.log("start");


function loginUser(email,password, callback){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Now we have the data");
            resolve ({userEmail: email});
        },3000);
    });
} 
   
function getUserVideos(email,callback){
    return new Promise((resolve, reject)=>{
  setTimeout(()=>{
  resolve (["video1", "video2", "video3"]);
  },2000);
});
}
function videoDetails(video){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
  resolve ("title of a video");
    },2000);
    });
  }

//const user = loginUser ("kacarervin@gmail.com", 123445, (user)=>{
//console.log(user);
//getUserVideos(user.userEmail, videos => {
//console.log(videos);
//});
//});

loginUser("ed", "bumba")
.then(user => getUserVideos(user.email))
.then(videos => videoDetails(videos[0]))
.then(detail => console.log(detail));

console.log("finish");