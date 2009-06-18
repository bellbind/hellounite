opera.io.webserver.addEventListener('hello', function (ev) {
  var req = ev.connection.request;
  var res = ev.connection.response;
  res.setStatusCode(200, "OK");
  res.write("hello world");
  res.close();
}, false);
