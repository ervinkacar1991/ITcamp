// console.log("start");


// function loginUser(email,password){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Now we have the data");
//             resolve ({userEmail: email});
//         },3000);
//     });
// } 
   
// function getUserVideos(email){
//     return new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//   resolve (["video1", "video2", "video3"]);
//   },2000);
// });
// }
// function videoDetails(video){
//     return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//   resolve ("title of a video");
//     },2000);
//     });
//   }

// const user = loginUser ("kacarervin@gmail.com", 123445, (user)=>{
// console.log(user);
// getUserVideos(user.userEmail, videos => {
// console.log(videos);
// });
// });      

// //loginUser("ed", "bumba")
// //.then(user => getUserVideos(user.email))
// //.then(videos => videoDetails(videos[0]))
// //.then(detail => console.log(detail));


//  async function displayUser(){
//     const loggedUser = await loginUser("ed", 12345);
//     const videos = await getUserVideos(loggedUser.userEmail);
//     const detail = await videoDetails(videos[0]);
//     console.log(detail);
// }

// displayUser ();


function makeRequest(location) {
    return new Promise ((resolve, reject)=>{
        console.log('Making Request to ${location}')
        if(location == 'Google'){
            resolve('Google say hi')
        } else {
            reject ('Weonly can only talk to Google')
        }
    })
}

function proccesRequest (response){
    return new Promise((resolve, reject)=>{
        console.log('Proccesing request')
        resolve ('Extra Information  + ${response}')
    })
}

// makeRequest('Google').then(response =>{
//     console.log('response has been resived')
//     return proccesRequest(response)
// }).then(processedResponse =>{
//     console.log(processedResponse)
// }).catch(err=>{
//     console.log(err)
// })


async function doWork(){
    try{
        const response = await makeRequest('Google')
        console.log('Response resieved')
         const processedResponse = await proccesRequest(response)
         console.log(processedResponse)
    } catch (err){
console.log(err)
    }
}

doWork()