'use strict';

/* Directives */
phonecatControllers.directive('aplayer',function($interval) {
    return {
        restrict:'A',
        scope: {
            audobj: '=audo' 
        },
        templateUrl: 'partials/audioplayer.html', 
        link: function($scope, element, attrs){
        },
        controller: function($scope){
            if(typeof $scope.audobj == "string"){
              //log("init audio");
              $scope.audio = new Audio();

              $scope.audio.src = $scope.audobj;
              $scope.vol = 0.6;
              $scope.audio.volume = 0.6;
              console.log($scope);
              console.log($scope.audio);
              console.log($scope.audio.src);
            }
            $scope.play = function(){
                $scope.audio.play();
            };
            $scope.pause = function(){
                $scope.audio.pause();
            };
            $interval(function(){
                $scope.ctime = $scope.audio.currentTime.toFixed(1);
            },100);
            $scope.$watch('audio.duration', function(newval){
                $scope.duration = $scope.audio.duration.toFixed(1);
            });
            $scope.changetime = function(t){
                $scope.audio.currentTime = $scope.ctime;
            };
            $scope.changevol = function(t){
                $scope.audio.volume = $scope.vol;
            };
            $scope.ntot = function(secs) {
              var hr  = Math.floor(secs / 3600);
              var min = Math.floor((secs - (hr * 3600))/60);
              var sec = Math.floor(secs - (hr * 3600) -  (min * 60));
              if (min < 10){ 
                min = "0" + min; 
              }
              if (sec < 10){ 
                sec  = "0" + sec;
              }
              return min + ':' + sec;
            }
        }
    };
});
