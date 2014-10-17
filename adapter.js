'use strict';

var myRTCPeerConnection = null;

var renameIceURLs = function (config) {
  if (!config) {
    return;
  }
  if (!config.iceServers) {
    return config;
  }
  config.iceServers.forEach(function(server) {
    server.url = server.urls;
    delete server.urls;
  });
  return config;
}

if (typeof RTCPeerConnection !== 'undefined') {
  myRTCPeerConnection = RTCPeerConnection;
} else if (typeof mozRTCPeerConnection !== 'undefined') {
  // Firefox uses 'url' rather than 'urls' for RTCIceServer.urls
  myRTCPeerConnection = function (configuration, constriants) {
    return new mozRTCPeerConnection(renameIceURLs(configuration), constraints);
  };
} else if (typeof webkitRTCPeerConnection !== 'undefined') {
  myRTCPeerConnection = webkitRTCPeerConnection;
}

exports.RTCPeerConnection = myRTCPeerConnection;
