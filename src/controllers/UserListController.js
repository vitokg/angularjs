export const UserListController = ($scope, userService, $location) => {
    $scope.users = userService.getAllUsers();
    $scope.columns = ['Username', 'First Name', 'Last Name', 'Email', 'Type'];
    $scope.isFormVisible = false;
    $scope.showForm = () => {
      $scope.isFormVisible = true;
    }
    $scope.viewDetails = (index) => {
      $location.path(`/users/${index}`);
    }
  }

