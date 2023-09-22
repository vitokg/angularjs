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
    .when('/404', {
      template: '<div>404 page not found</div>',
    })
    .when('/403', {
      template: '<div>403 Error</div>l',
    })
    .otherwise('/404')

  $locationProvider.html5Mode(true);
}
