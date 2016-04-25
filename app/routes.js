(function() {
    require('angular')
    angular
        .module('app')
        .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'login.html',
                    controller: 'LoginController',
                    controllerAs: 'LoginCtrl',
                    resolve: {
                        is_login: function() {
                            return true;
                        }
                    }
                })
        });
})();
