// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

angular.module('deliveryapp',['ionic'])

var ionicApp = angular.module('ionicApp', ['ionic','ngRoute']);

ionicApp.config(function ($routeProvider){
    
    $routeProvider
    
    .when('/first',{
        templateUrl: 'pages/001.html',
        controller: 'deliveryController'
    })
})

ionicApp.controller('deliveryController',['$scope',function($scope) {
  $scope.groups = [
      {
          name: "Personal Particulars",
          field1: "Name",
          field2: "Phone Number",
          
      },
      
       {
          name: "Address to collect",
          field1: "Postal Code"
          
      },
      
      {
          name:"Address to deliver",
          field1: "Postal Code"
      }
  ];
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
  
}]);

ionicApp.controller('blogController', ['$scope','$location',function($scope,$location){
    $scope.blogposts = [
        {
            author: "Ng Jun Wei",
            date: new Date(),
            introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            bloglink: "pages/001.html",
            img: "img/sample1.jpg"
        },
            
        {
            author: "Mark Lee",
            date: new Date(),
            introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            bloglink: "pages/001.html",
            img: "img/sample2.jpg"
        },
    ];
}]);