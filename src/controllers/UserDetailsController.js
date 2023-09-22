export const UserDetailsController = ($scope, $routeParams, userService, $location) => {
  $scope.userId = $routeParams.id
  $scope.user = userService.getUserById($scope.userId);
  $scope.onDelete = () => {
    userService.deleteUser($scope.userId);
    $scope.hideForm();
  }
  $scope.onSave = () => {
    userService.updateUser($scope.user);
    $scope.hideForm();
  }

  $scope.hideForm = () => {
    $location.path('/users');
  }
}
