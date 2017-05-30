angular
  .module('dinoApp')
  .controller('DinosaursShowCtrl', DinosaursShowCtrl);

DinosaursShowCtrl.$inject = ['$stateParams', 'Dinosaur', 'Comment'];
function DinosaursShowCtrl($stateParams, Dinosaur, Comment){
  const vm = this;
  vm.addComment = commentsCreate;

  vm.dinosaur = Dinosaur.get($stateParams);


  function commentsCreate() {
    vm.comment.dinosaur_id = vm.dinosaur.id;
    vm.comment.user_id = 1;
    Comment
      .save(vm.comment)
      .$promise
      .then(data => {
        console.log('data:', data);
      });
  }
}
