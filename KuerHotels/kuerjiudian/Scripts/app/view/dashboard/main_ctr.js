﻿var main_ctr = myApp.controller("main_ctr", function ($scope, $rootScope, $http, $location, $window, $cookieStore, $interval, $filter, $timeout) {
    $scope.selected_page = '';

    $scope.side_bar_show = true;
    chk_global_vars($cookieStore, $rootScope, null, $location, $http);
  

    //header 方法——————————————————————————
    $scope.showamendpwd = function (num) {
        $scope.showAmendAndOff = num;
    }
    $scope.hideamendpwd = function (num) {
        $scope.showAmendAndOff = false;
    }
    //位置active
    $scope.selected_page_fun = function () {
        $timeout(function () {
            $scope.selected_page_fun_1();
         
        },200);
    }
    $scope.selected_page_fun();
    $scope.selected_page_fun_1 = function () {
        var dizhi = window.location.hash;
        var arr = dizhi.split('/');
        if (arr[1] == "main") {
            $scope.selected_w = 'main';
        }
    }
   
    //折叠side_bar
    $scope.side_bar_fun = function () {
        $scope.side_bar_show = !$scope.side_bar_show;
    }


    //++++++++++++++++++++++++++++++++++++++++++++++++++++

    // backtop:方法  ++++++++++++++++++++++++
    $scope.phone_on = function () {
        $scope.phone_on_show = true;
    }
    $scope.phone_close = function () {
        $scope.phone_on_show = false;
    }
    $scope.backtop_fun = function () {
        document.documentElement.scrollTop = document.body.scrollTop = 0;

    }

});