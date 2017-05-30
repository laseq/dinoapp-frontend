angular
.module('dinoApp')
.controller('DinosaursEditCtrl', DinosaursEditCtrl);

DinosaursEditCtrl.$inject = ['$stateParams', '$state', 'Dinosaur'];
function DinosaursEditCtrl($stateParams, $state, Dinosaur){
  const vm = this;
  vm.dinosaur = Dinosaur.get($stateParams);
  console.log(vm.dinosaur);
  vm.update = dinoUpdate;

  function dinoUpdate(){
    Dinosaur
    .update({ id: $stateParams.id }, vm.dinosaur)
    .$promise
    .then(()=>{
      $state.go('dinosaursIndex');
    });
  }
}
