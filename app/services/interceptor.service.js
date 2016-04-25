(function() {
    'use strict';
    angular
        .module('app')
        .factory('AuthenticationInterceptor', AuthenticationInterceptor)
        .config(function($httpProvider) {
            // we have to add the interceptor to the queue as a string because the interceptor depends upon service instances that are not available in the config block.
            $httpProvider.interceptors.push('AuthenticationInterceptor');
        });

    function AuthenticationInterceptor($q, $location, Token, ngToast) {
        return {
            request: function(config) {
                var token = Token.get();
                // var token = "1d67faa7b37b8471942c7a291d46eec5634935dd";
                if (token) {
                    config.headers = config.headers || {};
                    config.headers.Authorization = "Token "+ token;
                }
                return config;
            },
            responseError: function(rejection) {
                // revoke client authentication if 401 is received
                console.log(rejection);
                ngToast.create({
                    className: 'warning',
                    content: "server error"
                });
                if (rejection != null && rejection.status === 401 && !!Token.get()) {
                    Token.remove();
                    $location.path('/');
                }
                return $q.reject(rejection);
            }
        };
    }


})();
