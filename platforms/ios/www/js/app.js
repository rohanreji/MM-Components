// Ionic Starter App

angular.module('underscore', [])
.factory('_', function() {
  return window._; // assumes underscore has already been loaded on the page
});

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('your_app_name', ['ionic','angularMoment', 'your_app_name.controllers', 'your_app_name.directives', 'your_app_name.filters', 'your_app_name.services', 'your_app_name.factories', 'underscore', 'ngMap', 'ngResource', 'ngCordova', 'templates', 'slugifier'])

.run(function($ionicPlatform, PushNotificationsService) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    PushNotificationsService.register();
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider




 

  .state('walkthrough', {
    url: "/",
    templateUrl: "templates/walkthrough.html",
    controller: 'WalkthroughCtrl',
    data: {
      authenticate: false
    }
  })

  .state('login', {
    url: "/login",
    templateUrl: "templates/login.html",
    controller: 'LoginCtrl',
    data: {
      authenticate: false
    }
  })

  .state('signup', {
    url: "/signup",
    templateUrl: "templates/signup.html",
    controller: 'SignupCtrl',
    data: {
      authenticate: false
    }
  })

  .state('forgot-password', {
    url: "/forgot-password",
    templateUrl: "templates/forgot-password.html",
    controller: 'ForgotPasswordCtrl',
    data: {
      authenticate: false
    }
  })

  .state('page2', {
    url: "/page2",
   
    templateUrl: "templates/page2.html",
    controller: 'page2Ctrl',
     
    data: {
      // authenticate: true
      authenticate: false
    }
  })


  .state('page3', {
    url: "/page3",
   
    templateUrl: "templates/page3.html",
    controller: 'page3Ctrl',
     
    data: {
      // authenticate: true
      authenticate: false
    }
  })

  .state('page4', {
    url: "/page4",
   
    templateUrl: "templates/page4.html",
    controller: 'page4Ctrl',
     
    data: {
      // authenticate: true
      authenticate: false
    }
  })

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/side-menu.html",
    controller: 'AppCtrl'
  })



   .state('app.ticket', {
    url: '/ticket',
    views: {
      'menuContent': {
        templateUrl: 'templates/ticket.html',
        controller: 'TicketCtrl'
      }
    }
  })
   .state('app.permit', {
    url: '/permit',
    views: {
      'menuContent': {
        templateUrl: 'templates/permit.html',
        controller: 'PermitCtrl'
      }
    }
  })
    .state('app.violations', {
    url: '/violations',
    views: {
      'menuContent': {
        templateUrl: 'templates/violations.html',
        controller: 'ViolationsCtrl'
      }
    }
  })

      .state('app.analytics', {
    url: '/analytics',
    views: {
      'menuContent': {
        templateUrl: 'templates/analytics.html',
        controller: 'AnalyticsCtrl'
      }
    }
  })

        .state('app.calculator', {
    url: '/calculator',
    views: {
      'menuContent': {
        templateUrl: 'templates/calculator.html',
        
      }
    }
  })
  .state('app.miscellaneous', {
    url: "/miscellaneous",
    views: {
      'menuContent': {
        templateUrl: "templates/miscellaneous.html",
        controller: 'MiscellaneousCtrl'
      }
    },
    data: {
      // authenticate: true
      authenticate: false
    }
  })

  .state('app.maps', {
    url: "/miscellaneous/maps",
    views: {
      'menuContent': {
        templateUrl: "templates/maps.html",
        controller: 'MapsCtrl'
      }
    },
    data: {
      // authenticate: true
      authenticate: false
    }
  })

   .state('app.frontscreen', {
    url: "/frontscreen",
    views: {
      'menuContent': {
        templateUrl: "templates/frontscreen.html",
        controller: 'frontscreenCtrl'
      }
    },
    data: {
      // authenticate: true
      authenticate: false
    }
  })

  .state('app.parking', {
    url: "/parking",
    views: {
      'menuContent': {
        templateUrl: "templates/parking.html",
        controller: 'ParkingCtrl'
      }
    },
    data: {
      // authenticate: true
      authenticate: false
    }
  })

  

  .state('app.category-feeds', {
    url: "/category-feeds/:categoryId",
    views: {
      'menuContent': {
        templateUrl: "templates/category-feeds.html",
        controller: 'CategoryFeedsCtrl'
      }
    },
    data: {
      // authenticate: true
      authenticate: false
    }
  })

  .state('app.feed-entries', {
    url: "/feed-entries/:categoryId/:sourceId",
    views: {
      'menuContent': {
        templateUrl: "templates/feed-entries.html",
        controller: 'FeedEntriesCtrl'
      }
    },
    data: {
      // authenticate: true
      authenticate: false
    }
  })

  .state('app.wordpress', {
    url: "/wordpress",
    views: {
      'menuContent': {
        templateUrl: "templates/wordpress.html",
        controller: 'WordpressCtrl'
      }
    },
    data: {
      // authenticate: true
      authenticate: false
    }
  })

  .state('app.post', {
    url: "/wordpress/:postId",
    views: {
      'menuContent': {
        templateUrl: "templates/wordpress_post.html",
        controller: 'WordpressPostCtrl'
      }
    }
  })

  .state('app.multimedia', {
    url: "/multimedia",
    views: {
      'menuContent': {
        templateUrl: "templates/multimedia.html",
        controller: 'MultimediaCtrl'
      }
    },
    data: {
      // authenticate: true
      authenticate: false
    }
  })

  .state('app.settings', {
    url: "/settings",
    views: {
      'menuContent': {
        templateUrl: "templates/settings.html",
        controller: 'SettingsCtrl'
      }
    },
    data: {
      // authenticate: true
      authenticate: false
    }
  })

  .state('app.forms', {
    url: "/forms",
    views: {
      'menuContent': {
        templateUrl: "templates/forms.html",
        controller: 'FormsCtrl'
      }
    },
    data: {
      // authenticate: true
      authenticate: false
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});
