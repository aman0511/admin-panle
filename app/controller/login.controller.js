(function() {
    require('angular')
    angular
        .module('app')
        .controller('LoginController', ['$scope','AuthenticationService','$location','Token', LoginController]);
    function LoginController($scope, AuthenticationService, $location, Token) {
        var vm = this;
        vm.is_login = false;
        vm.Login = function() {
            console.log(vm.phone, vm.password);
            AuthenticationService.Login(vm.phone, vm.password, function(response) {
                token = response.auth_token
                Token.set(token);
                $location.path("/");
            });
        };
    }
})();