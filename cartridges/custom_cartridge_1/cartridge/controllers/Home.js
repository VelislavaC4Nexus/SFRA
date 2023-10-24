
"use strict";

var server = require("server");
var HookMgr = require("dw/system/HookMgr");

server.extend(module.superModule);

server.append("Show", function (req, res, next) {

    let viewData = res.getViewData();

    if (HookMgr.hasHook("app.home.calculate")) {
        HookMgr.callHook("app.home.calculate", "calculatePrice", viewData);
    }
    res.json()
  
    // res.json({ msg: viewData });

    next();
});

module.exports = server.exports();