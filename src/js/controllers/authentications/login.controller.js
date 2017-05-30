angular
  .module('dinoApp')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function LoginCtrl(User, CurrentUserService, $state) {
  const vm = this;

  vm.login = () => {
    User
      .login(vm.user).$promise
      .then(() => {
        CurrentUserService.getUser();
        $state.go('dinosaursIndex');
      }, err => {
        console.log(err);
      });
  };
}
