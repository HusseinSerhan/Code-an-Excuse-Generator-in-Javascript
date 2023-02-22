# Excuse Generator

This is a simple JavaScript application that generates random excuses. The excuses are made up of different parts, including:

- Who did something
- What they did
- What they did it to
- When they did it

The application uses arrays to store the different parts, and a `onLoad()` function to randomly select one item from each array and combine them into an excuse. 

Here is an example excuse that the application might generate: 

> My bird peed on the keys during my lunch.

![Unsplash Image](https://source.unsplash.com/random/800x400/?excuse)

The image above is a randomly selected image from Unsplash that shows an excuse-related scene.

To use the application, simply open the HTML file in a web browser and the excuse will be generated automatically. 

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Excuse Generator</title>
    <script>
      // JavaScript code goes here
    </script>
  </head>
  <body>
    <h1>OMG! you will not believe me but...</h1>
    <p id="excuse">My dog ate my homework</p>
    <script>
      document.getElementById("excuse").innerHTML = onLoad();
    </script>
  </body>
</html>