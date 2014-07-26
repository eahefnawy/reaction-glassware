Router.map ->
  @route 'glasswareSettings',
    controller: ShopAdminController
    path: 'dashboard/settings/glassware',
    template: 'glasswareSettings'
    waitOn: ->
      PackagesHandle

glasswareSettingsController = RouteController.extend
  run: () ->