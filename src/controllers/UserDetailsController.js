export const UserDetailsController = ($scope, $routeParams, userService, $location) => {
  $scope.userId = $routeParams.id
  $scope.user = userService.getUserById($scope.userId);

  $scope.hideForm = () => {
    $location.path('/users');
  }
}
