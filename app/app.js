(function() {
    require('angular')
    require('angular-sanitize')
    require('angular-animate')
    require('angular-ui-router')
    require('ng-toast')
    require('angular-ui-bootstrap')

    angular.module('app', ['ui.router', 'ngToast', 'ui.bootstrap']);

    angular.module('app').constant('APP_CONSTENTS', {
        baseUrl: 'http://localhost:8000'
    });

})();
