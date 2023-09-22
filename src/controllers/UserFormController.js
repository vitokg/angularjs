export const UserFormController = function ($scope, userService, $location) {
  $scope.userTypes = ['Administrator', 'Driver'];

  this.$onInit = function () {
    $scope.user = angular.copy(this.user || {});
    $scope.isCreateFlow = Object.keys(this.user).length === 0;
  };

  $scope.onDelete = () => {
    userService.deleteUser($scope.user.username);
    $scope.hideForm();
  }
  $scope.isFormValid = () => {
    return $scope.userForm.$valid;
  }

  $scope.onCreate = () => {
    if(!$scope.isFormValid()) {
      $scope.userForm.$submitted = true;
      return;
    }

    userService.createUser($scope.user).then(() => {
      $scope.resetForm();
      console.log('User added successfull');
    }).catch(() => {
        console.log('There is an error');
      }
    );
  }

  $scope.onUpdate = () => {
    if(!$scope.isFormValid()) {
      $scope.userForm.$submitted = true;
      return;
    }

    userService.updateUser($scope.user);
    $scope.hideForm();
  }

  $scope.hideForm = () => {
    $location.path('/users');
  }

  $scope.resetForm = () => {
    $scope.$apply(() => {
    $scope.userForm.$setPristine();
    $scope.userForm.$setUntouched();
    $scope.userForm.$submitted = false;
    $scope.user = angular.copy({});
   });
  }
}
