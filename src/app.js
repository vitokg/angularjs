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
    .factory('userService', userService)
    .directive('passwordStrength', passwordStrength)
    .config(($httpProvider) => {
    $httpProvider.interceptors.push(($q) =>{
      return {
        'request': function(config) {
          // same as above
        },

        'response': function(response) {
          // same as above
        },
        'requestError': function(rejection) {
          // do something on error
          if (canRecover(rejection)) {
            return responseOrNewPromise
          }
          return $q.reject(rejection);
        },
      };
    });
  })
  .config(routing)
}

