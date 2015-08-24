(function() {

    // custom service
    var github = function($http) {
        var getUser = function(username) {
            return $http.get("https://api.github.com/users/" + username)
                .then(function(response) {
                    return response.data;
                });
        }

        var getRepos = function(user) {
            return $http.get(user.repos_url)
                .then(function(response) {
                    return response.data;
                });
        }

        return {
            getUser: getUser,
            getRepos: getRepos
        }
    }

    // register the custom service to a module (that is known to angular at this point)
    var module = angular.module("mainModule");
    module.factory("github", github);

}());