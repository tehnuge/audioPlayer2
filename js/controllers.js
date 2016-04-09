var appController = angular.module('appController', ['ngAudio']);

appController.controller('audioCtrl',function($scope, $window, ngAudio){
    $scope.audio = ngAudio.load("media/horse.mp3"); // returns NgAudioObject
    $scope.hello = function(){
    	console.log($scope.audio.currentTime);
    };
    $scope.onExit = function() {
    	//something
    };
    $window.onbeforeunload =  $scope.onExit;

})