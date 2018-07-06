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
    $http({
      url: '/koala',
      method: 'POST',
      data: newKoala
    })
    .then(function(res){
      console.log(res);
      self.getKoalas();
    })
  }

  self.deleteKoala = function (id) {
    $http({
      url: `/koala/${id}`,
      method: 'DELETE'
    })
    .then(function(res){
      console.log(res);
      self.getKoalas();
    })
    .catch(function(err){
      console.log(err);
    })
  }

  self.readyToTransfer = function (koala) {
    console.log(koala);
    koala.ready_to_transfer = !koala.ready_to_transfer;
    console.log(koala);
    $http ({
      url: `/koala/${koala._id}`,
      method: 'PUT',
      data: koala
    })
    .then(function(response){
      console.log(response);
      self.getKoalas();
    })
    .catch(function (error) {
      console.log(error);
    })
    
  }

}])