(function() {
    require('angular')
    angular
        .module('app')
        .controller('HeaderController', ['$scope', '$location', 'UserService', HeaderController]);

    function HeaderController($scope, $location, UserService) {
        var vm = this;
        vm.isLogin = false;
        vm.loginUser = UserService.getUserDetails(function(response){
            console.log(response);
            vm.isLogin = true;
            return response
        });
        console.log("controller call", vm.loginUser);
    }
})();
