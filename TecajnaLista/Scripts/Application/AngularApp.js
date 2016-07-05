var app = angular.module("CustomAngularApp", []);

app.controller("Currencies", function ($scope, $http) {
    $scope.show = false;
    $http.get('http://app.novi-is.com/TestWebApi/test/currencies')
        .then(function (response) {
            $scope.currencies = response.data;
            $scope.show = true;
        }, function(response)
        {
            alert(response.status + " " + response.statusText);
        });


    $scope.getRate = function ()
    {
        if($scope.Currency == null)
        {
            alert("Odaberite valutu");
        }
        else
        {
            $http.get('http://app.novi-is.com/TestWebApi/test/rate/'+$scope.Currency.Code)
            .then(function(response){
                $scope.rate = response.data.CurrencyCode+" tečaj je "+ response.data.Rate;
            }, function (response) {
                alert(response.status + " " + response.statusText);
            } );
        }
    }

   });