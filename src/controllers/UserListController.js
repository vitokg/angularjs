export const UserListController = ($scope, userService, $location) => {
    $scope.users = userService.getAllUsers();
    $scope.user = {};
    $scope.columns = ['Username', 'First Name', 'Last Name', 'Email', 'Type'];
    $scope.isFormVisible = false;

    $scope.showForm = () => {
      $scope.isFormVisible = true;
    };

    $scope.hideForm = () => {
      $scope.isFormVisible = false;
    };

    $scope.viewDetails = (index) => {
      $location.path(`/users/${index}`);
    }

    $scope.onUserCreate = () => {
      userService.createUser($scope.user);
      $scope.user = {};
      $scope.reset();
    }

  $scope.reset = function() {
    $scope.user.firstName = "";
    $scope.user.lastName = "";
  }
  }

