# Install all the software you will need

1. Install nodejs.
1. Install the Atom editor.

# Create your project

1. Create a new project folder from within Atom
1. Create a new package.json file in that same folder and edit it to replace the sample data (example below)
1. Create a new, empty server.js file.

## Example package.json

```
{
  "name": "your-app-name",
  "version": "0.1.0",
  "private": true,
  "description": "Write a very brief a description of your application",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
  },
  "author": "Your Name",
  "contributors": [
    "Your Name <your@email.address>"
  ],
  "license": "MIT"
}
```

# Build and run your project

From a terminal window, find your project folder and run these commands:

```
npm install
npm start
```

The install command downloads and installs all dependencies listed in your package.json file (initially no dependencies).

The start command runs your application (initially does nothing).

# Add a basic web server to your application using express

1. Add express to your dependencies in package.json (example below)
1. Add code to your server.js file (example below)
1. Build and run
1. Browse to http://localhost:3000/

## Example adding express dependency

```
"dependencies": {
  "express": ""
},
```

The "" means any version; we will get the latest.

## Example express server code

```
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```

# Change server to serve only static content

1. Remove the existing app.get from code
1. Add a line in code to serve static content (example below)
1. Add a new subfolder in your project named public
1. In the new subfolder, create a new file named index.html and edit it to replace the sample data (example below)
1. Refresh the browser to see your new static website

## Example line of code to serve static content

Replace the app.get block of code with this line:

```
app.use(express.static('public'))
```

## Example public/index.html file

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Edit your title</title>
  </head>
  <body>
    Hello, world!
  </body>
</html>
```

# Add Bootstrap to make the website pretty

1. Copy CSS and JS code for Bootstrap to the <head> section of your index.html file (example below).
1. Refresh the browser to see a slightly prettier version of your website

*Note: Make sure your code is nicely formatted!*

## Example Bootstrap code

```
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
```

# Add AngularJS to make the website dynamic

1. Copy the JS code for AngularJS to the <head> section of your index.html file (example below)
1. Create a new file named public/hello_world_controller.js (example below)
1. Edit your index.html file and add the example code (below) to the <body> section (not the <head> as we did before). Delete the existing Hello World code there so this replaces it.
1. Refresh the browser to see your new, dynamic website

## Example AngularJS code

```
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.2/angular.min.js"></script>
```

## Source code for hello_world_controller.js

```
angular.module('HelloWorldApp', [])
   .controller('HelloWorldController', function($scope) {
       $scope.greeting = "Hello World, the dynamic version!";
});
```

## Example Hello World code

Replace the existing Hello World code with this.

```
<script src="hello_world_controller.js"></script>
<div ng-app="HelloWorldApp">
    <div ng-controller="HelloWorldController">
        {{greeting}}
    </div>
</div>
```

# Add a REST API call to your website

1. Edit the server.js file after the app.use code, add a new REST API handler (example below)
1. Edit the hello_world_controller.js file and:
  1. Add $http as an argument to the controller (next to first $scope argument)
  1. Replace the code inside the controller with a REST API call to /greeting (example below)
1. Restart the server
1. Refresh the browser to see your new dynamic, REST-based website

## Example REST API handler

```
app.get('/greeting', function (req, res) {
  res.send('Hello World, the client/server version!')
})
```

## Example replacing the controller with a REST API call

Replace the whole line at $scope.greeting with this code:

```
$http.get('/greeting').
    then(function(response) {
        $scope.greeting = response.data;
    });
```
