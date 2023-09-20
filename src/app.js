import angular from 'angular';
import ngRoute from 'angular-route'
import { UserListController, UserDetailsController }  from './controllers';
import {routing} from './app-routing';
import userListHtml from './views/user-list.html';
import userDetailsHtml from './views/user-details.html';
import {userService} from "./services/users-service";

export const initApp = () => {
  angular.module('app', [ngRoute])
    .controller('userListController', UserListController)
    .controller('userDetailsController', UserDetailsController)
    .component('userList', {
      template: userListHtml,
      controller: 'userListController'
    })
    .component('userDetails', {
      template: userDetailsHtml,
      controller: 'userDetailsController'
    })
    .factory('userService', userService)
  .config(routing)
}

