(function() {
    'use strict';

    angular
        .module('app')
        .service('AuthenticationService', ['$http', 'APP_CONSTENTS', AuthenticationService]);

    function AuthenticationService($http, APP_CONSTENTS) {
        var service = {};

        service.Login = Login;

        return service;

        function Login(phone, password, callback) {

            $http.post(APP_CONSTENTS.baseUrl + "/accounts/login/", { phone: phone, password: password })
                .success(function(response) {
                    callback(response);
                });
        }
    }

})();
