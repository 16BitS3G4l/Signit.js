# Signit.js

(Signing + Drawing) in one file, in one javascript library - for quick and easy use.

## Example
Create a .html file, with all the your markup. Then, include the Drawer.js file, which you can download and serve yourself:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Some webpage on the internet</title>  
    <!-- .... (some other content you include) ... -->
  </head>
  <body>
    
    <canvas id="pad"></canvas>
    
    
    <script src="./Drawer.js"></script>
    <script>
      var canvas = document.getElementById("pad");
      
      var drawer = new Drawer(canvas);
      
      // you can now sign + draw on the canvas
    </script>
  </body>
</html>
```
