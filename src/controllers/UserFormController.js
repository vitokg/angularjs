export const UserFormController = ($scope) => {
  console.log($scope);
  $scope.user = {};
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
