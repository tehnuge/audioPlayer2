var appController = angular.module('appController', ['ngAudio']);

appController.controller('audioCtrl',function($scope,ngAudio){
    $scope.audio = ngAudio.load("media/horse.mp3"); // returns NgAudioObject
    $scope.hello = function(){
    	console.log($scope.audio.currentTime);
    };
})