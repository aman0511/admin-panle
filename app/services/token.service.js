(function() {
    require('angular')

    angular
        .module('app')
        .service('Token', [Token]);

    function Token() {
        var _tokenStorageKey = 'token';
        var _cachedToken = '';

        var set = function(token) {
            _cachedToken = token;
            localStorage.setItem(_tokenStorageKey, token)
        };

        var get = function() {
            if (!_cachedToken) {
                _cachedToken = localStorage.getItem(_tokenStorageKey);
            }
            return _cachedToken;
        };

        var remove = function() {
            _cachedToken = null;
            localStorage.removeItem(_tokenStorageKey);
        };

        return {
            set: set,
            get: get,
            remove: remove
        }
    }
})();
