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

  self.deleteKoala = function (id) {
    console.log('click delete')
    console.log(id);
  }

  self.readyToTransfer = function (id) {
    console.log(id);
    $http ({
      url: `/koala/${id}`,
      method: 'PUT'
    })
    .then(function(response){

    })
    .catch(function (error) {
      console.log(error);
    })
    
  }

}])