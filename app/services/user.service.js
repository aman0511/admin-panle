(function() {
    'use strict';

    angular
        .module('app')
        .service('UserService', ['$http', 'APP_CONSTENTS', UserService]);

    function UserService($http, APP_CONSTENTS) {
        var service = {};

        service.getUserDetails = getUserDetails;

        return service;

        function getUserDetails(callback) {
            $http.get(APP_CONSTENTS.baseUrl + "/accounts/me/")
                .success(function(response) {
                    console.log(response.success);
                    callback(response);
                });
        }
    }

})();
