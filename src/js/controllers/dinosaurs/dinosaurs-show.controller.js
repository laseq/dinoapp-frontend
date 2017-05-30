angular
  .module('dinoApp')
  .controller('DinosaursShowCtrl', DinosaursShowCtrl);

DinosaursShowCtrl.$inject = ['$stateParams', 'Dinosaur', 'Comment', '$state'];
function DinosaursShowCtrl($stateParams, Dinosaur, Comment, $state){
  const vm = this;
  vm.addComment = commentsCreate;
  vm.delete = dinosaursDelete;

  // vm.dinosaur = Dinosaur.get($stateParams);

  dinosaursShow();

  function dinosaursShow() {
    vm.dinosaur = Dinosaur.get($stateParams);
  }

  function commentsCreate() {
    vm.comment.dinosaur_id = vm.dinosaur.id;
    vm.comment.user_id = 1;
    Comment
      .save(vm.comment)
      .$promise
      .then(data => {
        dinosaursShow();
        console.log(vm.comment);
        vm.comment = {};
        console.log('data:', data);
      });
  }

  function dinosaursDelete() {
    Dinosaur
      .delete({ id: vm.dinosaur.id })
      .$promise
      .then(() => {

        $state.go('dinosaursIndex');
      });
  }
}
