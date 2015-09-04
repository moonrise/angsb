There are two launchers for this project:
1. joeeames-fundamentals that runs IntelliJ built in web server (port 63342; serves the whole project!)
2. node web server that runs Node server at port 8000 (serves only this folder)

Since the server data is fed from node web server, port 63342 won't work for data retrieval for $http and $resource
services. Possibly future solution is jsonp.

Mostly the html files at the root of the project can be launched independently; notice the URL difference between two
because IDEA launcher is meant to serve all projects, so the root is at the root of the project while Node server is
configured only for this folder (joe-eames-fundamentals):

 - http://localhost:8000/EventDetails.html
 - http://localhost:8000/Cache.html
 - http://localhost:63342/angsb/joe-eames-fundamentals/app/Compile.html

 index.html is SPA root html; a number of view templates are routed from there.