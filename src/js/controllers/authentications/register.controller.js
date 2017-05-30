angular
  .module('dinoApp')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function RegisterCtrl(User, CurrentUserService, $state){
  const vm = this;

  vm.register = () => {
    User
      .register(vm.user).$promise
      .then(() => {
        CurrentUserService.getUser();
        $state.go('dinosaursIndex');
      }, err => {
        console.log(err);
      });
  };
}
