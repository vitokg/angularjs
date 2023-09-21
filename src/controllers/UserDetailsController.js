export const UserDetailsController = ($scope, $routeParams, userService, $location) => {
  $scope.userId = $routeParams.id
  $scope.user = userService.getUserById($scope.userId);
  $scope.onDelete = () => {
    userService.deleteUser($scope.userId);
    $location.path('/users');
  }
  $scope.onSave = () => {
    userService.updateUser($scope.user);
    $location.path('/users');
  }
}
