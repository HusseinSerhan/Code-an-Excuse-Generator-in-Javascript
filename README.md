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
    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

    function onLoad(who, action, what, when) {
    let randomIndex = Math.floor(Math.random() * who.length);
    let randomIndex2 = Math.floor(Math.random() * action.length);
    let randomIndex3 = Math.floor(Math.random() * what.length);
    let randomIndex4 = Math.floor(Math.random() * when.length);

    return who[randomIndex] + " " + action[randomIndex2] + " " + what[randomIndex3] + " " + when[randomIndex4]
}
    </script>
  </head>
  <body>
   <center>
        <b>
            <p style="font-size: 30px">OMG! you will not believe me but...</p>
            <p style="font-size: 30px" id="excuse">My dog ate my homework</p>
        </b>
    </center>

    <script>
      document.getElementById("excuse").innerHTML = onLoad();
    </script>
    
  </body>
</html>