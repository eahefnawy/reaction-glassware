Package.describe({
  summary: "Reaction Glassware - Google Glass App for Your Reaction Shop"
});

Npm.depends({'googleapis': '1.0.2'});

Package.on_use(function (api, where) {
  api.use([
    "coffeescript",
    "iron-router",
    "less",
    "reaction-core"
  ], ["client", "server"]);

  api.add_files("common/collections.coffee",["client","server"]);
  api.add_files("lib/paypal.coffee",["client","server"]);
  api.add_files("server/paypal.coffee",["server"]);
  api.add_files([
    "client/routing.coffee",
    "client/register.coffee",
    "client/templates/paypal.html",
    "client/templates/paypal.less",
    "client/templates/paypal.coffee",
    "client/templates/cart/checkout/payment/methods/paypal/paypal.html",
    "client/templates/cart/checkout/payment/methods/paypal/paypal.less",
    "client/templates/cart/checkout/payment/methods/paypal/paypal.coffee"
  ],
  ["client"]);

  api.export([
    "PaypalPackageSchema",
  ], ["client", "server"]);

});
