/**
 * Created by gurushantu on 30-01-2015.
 */
var myApp = angular.module('myApp', ['ui.router']);
// For Component users, it should look like this:
// var myApp = angular.module('myApp', [require('angular-ui-router')]);
myApp.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/dashboard");
    //
    // Now set up the states
    $stateProvider
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "partials/dashboard.html"
        })

        .state('organization', {
            url: "/organization/list",
            templateUrl: "partials/organization.html"
        })

        .state('projects', {
            url: "/projects/list",
            templateUrl: "partials/projects.html"
        })
        .state('employees', {
            url: "/employees",
            templateUrl: "partials/employees.html"
        })
        .state('organizationView', {
            url: "/organization/view",
            templateUrl: "partials/organizationView.html"
        })
        .state('organizationsEdit', {
            url: "/organization/Edit",
            templateUrl: "partials/organizationsEdit.html"
        });
});