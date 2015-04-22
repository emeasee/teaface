'use strict';

angular.module('teaface')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      {
        'title': 'Teaface1',
        'url': '',
        'description': 'HTML enhanced for web apps!',
        'face': '//placehold.it/640x640/ddd',
        'tea': '',
        'size': '2'
      },
      {
        'title': 'Teaface2',
        'url': '',
        'description': 'Time-saving synchronised browser testing.',
        'face': '//placehold.it/640x640/ddd',
        'tea': '',
        'size': '2'
      },
      {
        'title': 'Teaface3',
        'url': '',
        'description': 'The streaming build system.',
        'face': '//placehold.it/640x640/ddd',
        'tea': '',
        'size': '2'
      },
      {
        'title': 'Teaface4',
        'url': '',
        'description': 'Behavior-Driven JavaScript.',
        'face': '//placehold.it/640x640/ddd',
        'tea': '',
        'size': '2'
      },
      {
        'title': 'Teaface5',
        'url': '',
        'description': 'Spectacular Test Runner for JavaScript.',
        'face': '//placehold.it/640x640/ddd',
        'tea': '',
        'size': '4'
      },
      {
        'title': 'Teaface6',
        'url': '',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'face': '//placehold.it/640x640/ddd',
        'tea': '',
        'size': '4'
      },
      {
        'title': 'Teaface7',
        'url': '',
        'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
        'face': '//placehold.it/640x640/ddd',
        'tea': '',
        'size': '2'
      },
      {
        'title': 'Teaface8',
        'url': '',
        'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
        'face': '//placehold.it/640x640/ddd',
        'tea': '',
        'size': '2'
      }
    ];
    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  });
