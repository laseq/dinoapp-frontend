angular
  .module('dinoApp')
  .controller('DinosaursIndexCtrl', DinosaursIndexCtrl);

DinosaursIndexCtrl.$inject = ['Dinosaur'];
function DinosaursIndexCtrl(Dinosaur) {
  const vm = this;
  vm.delete = dinosaursDelete;

  dinosaursIndex();

  function dinosaursIndex() {
    vm.dinosaurs = Dinosaur.query();
  }

  function dinosaursDelete(dinosaur) {
    Dinosaur
      .delete({ id: dinosaur.id })
      .$promise
      .then(() => {
        dinosaursIndex();
      });
  }
}
