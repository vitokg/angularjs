import angular from 'angular';
import ngRoute from 'angular-route'
import {UserListController, UserDetailsController, UserFormController} from './controllers';
import {routing} from './app-routing';
import { userListHtml, userDetailsHtml, userFormHtml} from './views';
import {userService} from "./services/users-service";

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
        user: '<',
        onUpdate: '&'
      },
      controller: 'userFormController'
    })
    .factory('userService', userService)
  .config(routing)
}

