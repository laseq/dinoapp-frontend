angular
  .module('dinoApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$http', 'CurrentUserService', 'TokenService', 'User'];
function MainCtrl($http, CurrentUserService, TokenService, User) {
  const vm = this;

  // console.log(CurrentUserService.getUser());
  if (TokenService.decodeToken()) {
    User.get({id: TokenService.decodeToken().id})
    .$promise.then(user => {
      vm.currentUser = user;
      console.log(vm.currentUser);
    });
  } else {
    console.log('Not logged in');
  }
  // $http
  //   .get('http://localhost:3000/api/races')
  //   .then(response => {
  //     vm.races = response.data;
  //     console.log('vm.races:', vm.races);
  //   });
}
