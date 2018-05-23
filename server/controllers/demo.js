var http = require("http")
var url = require("url")
var util = require("util")
var querystring = require("querystring")

module.exports = ctx => {
  ctx.state.data = {
    msg: "jiurong"
  }
  // http.get('http://v.juhe.cn/weixin/query?key=f16af393a63364b729fd81ed9fdd4b7d&pno=1&ps=10', function (response) {
  //   var body = [];
  //   console.log(response.statusCode);
  //   console.log(response.headers);
  //   console.log(response);
  //   response.on('data', function (chunk) {
  //     body.push(chunk);
  //   });
  //   response.on('end', function () {
  //     body = Buffer.concat(body);
  //     ctx.state.data = {
  //       msg: body
  //     }
  //     console.log(body.toString());
  //   });
  // });
}