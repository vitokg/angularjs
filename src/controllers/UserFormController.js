export const UserFormController = function ($scope) {
  this.$onInit = function () {
    $scope.user = this.user || {};
    console.log('User property:', this.user);
  };

  $scope.userTypes = ['Administator', 'Driver'];
  $scope.createUser = () => {
    console.log('create user');
    console.log($scope.user);
  };
  $scope.saveUser = () => {
    console.log('create user');
    console.log($scope.user);
  };

  $scope.deleteUser = () => {
    console.log('create user');
    console.log($scope.user);
  }

}
