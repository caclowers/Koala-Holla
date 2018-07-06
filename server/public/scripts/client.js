const app = angular.module('KoalaApp', []);

app.controller('KoalaController', ['$http', function($http){
  const self = this;

  self.addKoala = function(newKoala){
    console.log(newKoala);
  }
}])