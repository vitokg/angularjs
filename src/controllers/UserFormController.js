export const UserFormController = function ($scope) {
  $scope.userTypes = ['Administrator', 'Driver'];

  this.$onInit = function () {
    $scope.user = this.user || {};
  };

}
