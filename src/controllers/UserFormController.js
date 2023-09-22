export const UserFormController = function ($scope) {
  this.$onInit = function () {
    $scope.user = this.user || {};
    console.log('User property:', this.user);
  };

  $scope.userTypes = ['Administator', 'Driver'];
}
