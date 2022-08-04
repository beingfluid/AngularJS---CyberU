var app = angular.module( "httpApp", [] );

app.controller('httpAppController', httpAppController);

function httpAppController( $scope,$http ) {
   

    $http({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
    }).then(function successCallback(result) {
            console.log(result.data);
            $scope.users=result.data;
    } );
}