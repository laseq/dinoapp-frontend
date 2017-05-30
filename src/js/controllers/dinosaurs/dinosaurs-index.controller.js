angular
  .module('dinoApp')
  .controller('DinosaursIndexCtrl', DinosaursIndexCtrl);

DinosaursIndexCtrl.$inject = ['Dinosaur'];
function DinosaursIndexCtrl(Dinosaur) {
  const vm = this;


  dinosaursIndex();

  function dinosaursIndex() {
    vm.dinosaurs = Dinosaur.query();
  }


}
