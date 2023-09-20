export const routing = ($routeProvider, $locationProvider) => {
  $routeProvider
    .when('/', {
      redirectTo: '/users'
    })
    .when('/users', {
      template: '<user-list></user-list>',
    })
    .when('/users/:id', {
      template: '<user-details></user-details>'
    })
    .otherwise('/404')

  $locationProvider.html5Mode(true);
}
