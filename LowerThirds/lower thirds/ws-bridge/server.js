import { createServer } from 'http';
import { parse } from 'url';
import { WebSocketServer } from 'ws';
import Koa from 'koa';

const app = new Koa();

const lowerThirdBase = {
  "global_animation_time": "4",
  "global_active_time": 300,
  "global_inactive_time": 8,
  "alt_1_switch": "false",
  "alt_1_style": "1",
  "alt_1_name": "Testing",
  "alt_1_info": "Lower thirds",
  "alt_1_name_size": 1.9,
  "alt_1_info_size": 1.1,
  "alt_1_name_transform": "uppercase",
  "alt_1_info_transform": "normal",
  "alt_1_name_weight": "bold",
  "alt_1_info_weight": "lighter",
  "alt_1_name_color": "#F2F2F2",
  "alt_1_info_color": "#8A8A8A",
  "alt_1_style_color_1": "#D54141",
  "alt_1_style_color_2": "#222222",
  "alt_1_logo_switch": "true",
  "alt_1_background_switch": "true",
  "alt_1_shadows": "false",
  "alt_1_align": "left",
  "alt_1_size": "36",
  "alt_1_margin_h": "4",
  "alt_1_margin_v": "4",
  "alt_1_line_spacing": "0",
  "alt_1_font": "'Open Sans', sans-serif",
  "alt_2_switch": "false",
  "alt_2_style": "1",
  "alt_2_name": "",
  "alt_2_info": "",
  "alt_2_name_size": 1.9,
  "alt_2_info_size": 1.1,
  "alt_2_name_transform": "uppercase",
  "alt_2_info_transform": "normal",
  "alt_2_name_weight": "bold",
  "alt_2_info_weight": "lighter",
  "alt_2_name_color": "#F2F2F2",
  "alt_2_info_color": "#8A8A8A",
  "alt_2_style_color_1": "#D54141",
  "alt_2_style_color_2": "#222222",
  "alt_2_logo_switch": "true",
  "alt_2_background_switch": "true",
  "alt_2_shadows": "false",
  "alt_2_align": "left",
  "alt_2_size": "36",
  "alt_2_margin_h": "4",
  "alt_2_margin_v": "4",
  "alt_2_line_spacing": "2",
  "alt_2_font": "'Open Sans', sans-serif",
  "alt_3_switch": "false",
  "alt_3_style": "1",
  "alt_3_name": "",
  "alt_3_info": "",
  "alt_3_name_size": 1.9,
  "alt_3_info_size": 1.1,
  "alt_3_name_transform": "uppercase",
  "alt_3_info_transform": "normal",
  "alt_3_name_weight": "bold",
  "alt_3_info_weight": "lighter",
  "alt_3_name_color": "#F2F2F2",
  "alt_3_info_color": "#8A8A8A",
  "alt_3_style_color_1": "#D54141",
  "alt_3_style_color_2": "#222222",
  "alt_3_logo_switch": "true",
  "alt_3_background_switch": "true",
  "alt_3_shadows": "false",
  "alt_3_align": "left",
  "alt_3_size": "36",
  "alt_3_margin_h": "4",
  "alt_3_margin_v": "4",
  "alt_3_line_spacing": "2",
  "alt_3_font": "'Open Sans', sans-serif",
  "alt_4_switch": "false",
  "alt_4_style": "1",
  "alt_4_name": "",
  "alt_4_info": "",
  "alt_4_name_size": 1.9,
  "alt_4_info_size": 1.1,
  "alt_4_name_transform": "uppercase",
  "alt_4_info_transform": "normal",
  "alt_4_name_weight": "bold",
  "alt_4_info_weight": "lighter",
  "alt_4_name_color": "#F2F2F2",
  "alt_4_info_color": "#8A8A8A",
  "alt_4_style_color_1": "#D54141",
  "alt_4_style_color_2": "#222222",
  "alt_4_logo_switch": "true",
  "alt_4_background_switch": "true",
  "alt_4_shadows": "false",
  "alt_4_align": "left",
  "alt_4_size": "36",
  "alt_4_margin_h": "4",
  "alt_4_margin_v": "4",
  "alt_4_line_spacing": "2",
  "alt_4_font": "'Open Sans', sans-serif",
  "alt_1_animation_time": "",
  "alt_1_active_time": "",
  "alt_1_inactive_time": "",
  "alt_2_animation_time": "",
  "alt_2_active_time": "",
  "alt_2_inactive_time": "",
  "alt_3_animation_time": "",
  "alt_3_active_time": "",
  "alt_3_inactive_time": "",
  "alt_4_animation_time": "",
  "alt_4_active_time": "",
  "alt_4_inactive_time": "",
  "alt_1_logo_image": "../logos/logo_1.png",
  "alt_2_logo_image": "../logos/logo_2.png",
  "alt_3_logo_image": "../logos/logo_3.png",
  "alt_4_logo_image": "../logos/logo_4.png",
  "global_oneshot": false,
  "alt_1_oneshot": false,
  "alt_2_oneshot": false,
  "alt_3_oneshot": false,
  "alt_4_oneshot": false,
  "alt_1_logo_size": 3.5,
  "alt_1_shadow_amount": 0.5,
  "alt_1_corners": 0,
  "alt_1_border_switch": "false",
  "alt_1_border_thickness_amount": "4",
  "alt_1_style_color_3": "#D54141",
  "alt_1_style_color_4": "#222222",
  "alt_2_logo_size": 3.5,
  "alt_2_shadow_amount": 0.5,
  "alt_2_corners": 0,
  "alt_2_border_switch": "false",
  "alt_2_border_thickness_amount": "4",
  "alt_2_style_color_3": "#D54141",
  "alt_2_style_color_4": "#222222",
  "alt_3_logo_size": 3.5,
  "alt_3_shadow_amount": 0.5,
  "alt_3_corners": 0,
  "alt_3_border_switch": "false",
  "alt_3_border_thickness_amount": "4",
  "alt_3_style_color_3": "#D54141",
  "alt_3_style_color_4": "#222222",
  "alt_4_logo_size": 3.5,
  "alt_4_shadow_amount": 0.5,
  "alt_4_corners": 0,
  "alt_4_border_switch": "false",
  "alt_4_border_thickness_amount": "4",
  "alt_4_style_color_3": "#D54141",
  "alt_4_style_color_4": "#222222",
  "alt_1_preview": "true",
  "alt_2_preview": "false",
  "alt_3_preview": "false",
  "alt_4_preview": "false"
};

const server = createServer();
const wss1 = new WebSocketServer({ noServer: true });
const wss2 = new WebSocketServer({ noServer: true });
const wss3 = new WebSocketServer({ noServer: true });

var wss1LatestPacket = lowerThirdBase;

var wss1Client = null;
var wss2Client = null;
var wss3Client = null;

wss1.on('connection', function connection(ws) {
  wss1Client = ws;
  ws.send(JSON.stringify(wss1LatestPacket)); // update with latest if connected late
  // console.log('wss1', ws);
});

wss2.on('connection', function connection(ws) {
  wss2Client = ws;
  // console.log('wss2', ws);
});

wss3.on('connection', function connection(ws) {
  wss3Client = ws;
  // console.log('wss3',ws);
});

server.on('upgrade', function upgrade(request, socket, head) {
  const { pathname } = parse(request.url);

  if (pathname === '/obs-lower-thirds-channel') {
    wss1.handleUpgrade(request, socket, head, function done(ws) {
      wss1.emit('connection', ws, request);
    });
  } else if (pathname === '/obs-lower-thirds-channel2') {
    wss2.handleUpgrade(request, socket, head, function done(ws) {
      wss2.emit('connection', ws, request);
    });
  } else if (pathname === '/obs-lower-thirds-fonts') {
    wss3.handleUpgrade(request, socket, head, function done(ws) {
      wss3.emit('connection', ws, request);
    });
  } else {
    socket.destroy();
  }
});

const wsPort = 9060;
server.listen(wsPort);
console.log('WebSocket server running on port', wsPort);

app.use(async ctx => {
  if (ctx.request.query != null) {
    let changed = false;
    if (typeof ctx.request.query.name !== 'undefined') {
      wss1LatestPacket.alt_1_name = ctx.request.query.name;
      changed = true;
    };
    if (typeof ctx.request.query.info !== 'undefined') {
      wss1LatestPacket.alt_1_info = ctx.request.query.info;
      changed = true;
    };
    if (typeof ctx.request.query.show !== 'undefined') {
      let show = ctx.request.query.show;
      if (typeof wss1LatestPacket.alt_1_switch !== 'undefined') {
        if (show === "true" && wss1LatestPacket.alt_1_switch === show) {
          wss1LatestPacket.alt_1_switch = "false";
          await wss1Client.send(JSON.stringify(wss1LatestPacket));
        }
      }
      wss1LatestPacket.alt_1_switch = ctx.request.query.show;
      changed = true;
    };

    if (changed) {
      wss1Client.send(JSON.stringify(wss1LatestPacket));
    }
  }
  ctx.body = 'Hello World';
});

const httpPort = 9080;
app.listen(httpPort);
console.log('Web server running on port', httpPort);

// var packet = lowerThirdBase;
// packet.alt_1_switch = "true";
// packet.alt_1_name = "Bill Hane"
// packet.alt_1_info = "the bible guy"
// wss1Client.send(JSON.stringify(packet));
// wss1LatestPacket = packet;

// ws.on('open', function open() {
//     const packet = {
//         action: 'broadcast',
//         source: '2317481202049726113',
//         data: lowerThird
//     };
//     console.log(packet);
//     ws.send(JSON.stringify(packet));
// });
  
// ws.on('message', function message(data) {
//     const evt = JSON.parse(data);

//     if (typeof data !== 'undefined') {
//         console.log('received: %s', evt);
//     };
// });