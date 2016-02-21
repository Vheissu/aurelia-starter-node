# Aurelia Starter Node

A starter application for using the Aurelia Javascript framework with Node.js as the server.

## Structure
The client-side aspect aka Aurelia application is in the ``client`` folder. This is where you author your Aurelia classes, etc. The server-side aspect is in the ``server`` folder which contains Node.js files, etc. 

By default the server ships with Express and is set to serve your Aurelia application from the ``client`` directory.

## Installing
First you need to go into the ``client`` folder and run the usual commands to install the front-end tooling and dependencies:

- npm install
- jspm install -y

Then you need to go into the ``server`` folder and just run: ``npm install`` to install the server side dependencies.

## Running
To run, go into ``server`` and type ``node server.js`` it will run on port 9000 by default. Then visit: ``http://localhost:9000`` to see the app running.