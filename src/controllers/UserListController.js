export const UserListController = ($scope, userService) => {
    $scope.users = userService.getAllUsers();
    $scope.columns = ['Username', 'First Name', 'Last Name', 'Email', 'Type'];

  }

