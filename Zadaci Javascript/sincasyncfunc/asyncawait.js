console.log("start");


function loginUser(email,password){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Now we have the data");
            resolve ({userEmail: email});
        },3000);
    });
} 
   
function getUserVideos(email){
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

const user = loginUser ("kacarervin@gmail.com", 123445, (user)=>{
console.log(user);
getUserVideos(user.userEmail, videos => {
console.log(videos);
});
});      

//loginUser("ed", "bumba")
//.then(user => getUserVideos(user.email))
//.then(videos => videoDetails(videos[0]))
//.then(detail => console.log(detail));


 async function displayUser(){
    const loggedUser = await loginUser("ed", 12345);
    const videos = await getUserVideos(loggedUser.userEmail);
    const detail = await videoDetails(videos[0]);
    console.log(detail);
}

displayUser ();