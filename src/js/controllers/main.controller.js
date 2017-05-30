angular
  .module('dinoApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$http'];
function MainCtrl($http) {
  const vm = this;

  // $http
  //   .get('http://localhost:3000/api/races')
  //   .then(response => {
  //     vm.races = response.data;
  //     console.log('vm.races:', vm.races);
  //   });
}
