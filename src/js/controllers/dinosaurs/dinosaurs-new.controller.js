angular
.module('dinoApp')
.controller('DinosaursNewCtrl', DinosaursNewCtrl);

DinosaursNewCtrl.$inject = ['$state', 'Dinosaur'];
function DinosaursNewCtrl($state, Dinosaur){
  const vm = this;
  vm.create = dinoCreate;

  function dinoCreate(){
    Dinosaur
      .save(vm.dinosaur)
      .$promise
      .then(()=>{
        $state.go('dinosaursIndex');
      });
  }
}
