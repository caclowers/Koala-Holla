const app = angular.module('KoalaApp', []);

app.controller('KoalaController', ['$http', function($http){
  const self = this;

  self.getKoalas = function(){
    $http({
      url: '/koala',
      method: 'GET'
    })
    .then(function(res){
      self.koalas = res.data;
      console.log(self.koalas);
    })
    .catch(function(err){
      console.log(err);
    })
  }

  self.getKoalas();

  self.addKoala = function(newKoala){
    console.log(newKoala);

  }

  self.deleteKoala = function () {
    console.log('click delete')
  }
}])