
//step 1: create express app
const express = require('express');
const app = express();

// step 2: create plain HTTP server
const http = require ('http');
const server = http.createServer(app);

//step 3: connect websocket server to HTTP
const WebSocket = require('ws');
const wss = new WebSocket.Server({server: server});
