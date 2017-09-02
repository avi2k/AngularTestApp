var shoppingCartModule = angular.module("shoppingCart", [])
        shoppingCartModule.controller("ShoppingCartController",
          function ($scope) {
              $scope.items = [{
                  product_name: "Product 1",
                  price: 50
              }, {
                  product_name: "Product 2",
                  price: 20
              }, {
                  product_name: "Product 3",
                  price: 180
              }];
              $scope.remove = function (index) {
                  $scope.items.splice(index, 1);
              }
          }
        );
        var namesModule = angular.module("namesList", [])
        namesModule.controller("NamesController",
          function ($scope) {
              $scope.names = [{
                  username: "Nitin"
              }, {
                  username: "Mukesh"
              }];
          }
        );
        angular.bootstrap(document.getElementById("App2"), ['namesList']);