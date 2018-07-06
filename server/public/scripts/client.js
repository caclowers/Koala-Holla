const app = angular.module('KoalaApp', []);



app.controller('KoalaController', ['$http', function ($http) {
  const self = this;

  self.getKoalas = function () {
    $http({
      url: '/koala',
      method: 'GET'
    })
      .then(function (res) {
        self.koalas = res.data;
        console.log(self.koalas);
      })
      .catch(function (err) {
        console.log(err);
      })
  }

  self.getKoalas();

  self.addKoala = function (newKoala) {
    $http({
      url: '/koala',
      method: 'POST',
      data: newKoala
    })
      .then(function (res) {
        console.log(res);
        self.getKoalas();
        swal('Koala Added!');
      })
      .catch(function (err) {
        console.log(err);
      })
  }


  self.deleteKoala = function (id) {
    swal({
      title: 'Are you sure you want to delete this koala?',
      text: 'Once you\'ve deleted, you will never see this koala again! They will be sent to a farm upstate...',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        self.byeKoala(id);
        swal('Your koala has been sent upstate', {
          icon: 'success',
        });
      } else {
        swal('Your koala is safe');
      }
    })
  }

    self.byeKoala = function (id) {
      $http({
        url: `/koala/${id}`,
        method: 'DELETE'
      })
        .then(function (res) {
          console.log(res);
          self.getKoalas();
        })
        .catch(function (err) {
          console.log(err);
        })
    }

    self.readyToTransfer = function (koala) {

      koala.ready_to_transfer = !koala.ready_to_transfer;

      $http({
        url: `/koala/${koala._id}`,
        method: 'PUT',
        data: koala
      })
        .then(function (response) {
          console.log(response);
          self.getKoalas();
        })
        .catch(function (error) {
          console.log(error);
        })

    }

  }])