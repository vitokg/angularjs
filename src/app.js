import './styles.scss';
import angular from 'angular';
import ngRoute from 'angular-route'
import {UserListController, UserDetailsController, UserFormController} from './controllers';
import {routing} from './app-routing';
import { userListHtml, userDetailsHtml, userFormHtml} from './views';
import {userService} from "./services/users-service";
import {passwordStrength} from "./directives/passwordStrength";

export const initApp = () => {
  angular.module('app', [ngRoute])
    .factory('userService', userService)
    .factory('errorInterceptor', ($q, $location) => {
      return {
        responseError: function(rejection) {
          if(rejection.status === 403) {
            $location.path('/403');
            return $q.reject(rejection);
          }
        }
      };
    })
    .config(($httpProvider) => {
      $httpProvider.interceptors.push('errorInterceptor');
    })
    .directive('passwordStrength', passwordStrength)
    .controller('userListController', UserListController)
    .controller('userDetailsController', UserDetailsController)
    .controller('userFormController', UserFormController)
    .component('userList', {
      template: userListHtml,
      controller: 'userListController'
    })
    .component('userDetails', {
      template: userDetailsHtml,
      controller: 'userDetailsController'
    })
    .component('userForm', {
      template: userFormHtml,
      bindings: {
        user: '<'
      },
      controller: 'userFormController'
    })
    .config(routing)
}

