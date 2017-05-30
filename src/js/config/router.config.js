angular
  .module('dinoApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/js/views/home.html'
    })

    .state('dinosaursIndex', {
      url: '/dinosaurs',
      templateUrl: '/js/views/dinosaurs/index.html',
      controller: 'DinosaursIndexCtrl as vm'
    })
    .state('dinosaursShow', {
      url: '/dinosaurs/:id',
      templateUrl: 'js/views/dinosaurs/show.html',
      controller: 'DinosaursShowCtrl as vm'
    })
    .state('dinosaursNew', {
      url: '/dinosaurs/new',
      templateUrl: '/js/views/dinosaurs/new.html',
      controller: 'DinosaursNewCtrl as vm'
    })
    .state('dinosaursEdit', {
      url: '/dinosaurs/:id/edit',
      templateUrl: 'js/views/dinosaurs/edit.html',
      controller: 'DinosaursEditCtrl as vm'
    });

  $urlRouterProvider.otherwise('/');
}
