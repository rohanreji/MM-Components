angular.module('your_app_name.controllers', ['angles','ngGPlaces'])
.config(function(ngGPlacesAPIProvider){
  ngGPlacesAPIProvider.setDefaults({
    radius:500
  });
})
// APP
.controller('AppCtrl', function($scope) {

})
// WALKTHROUGH



.service('sharedProperties', function () {
        var property;
        var timer;
        var violations;
        var paid;
        return {
            getProperty: function () {
                return property;
            },
            setProperty: function(value) {
                property = value;
            },
            setTimer:function(argument) {
              timer=argument;
            },
            getTimer:function(){
              return timer;
            },
             getViolations: function () {
                return violations;
            },
            setViolations: function(value) {
                violations = value;
            },
             getPaid: function () {
                return paid;
            },
            setPaid: function(value) {
                paid = value;
            }

        };
    })


.controller('TicketCtrl', function($scope,sharedProperties,$ionicPopup,$state) {




 $scope.init = function() {

        // $http.get("http://echo.jsontest.com/conditions/frightful")
        //     .success(function(data) {
               var data=[
                        { title: 'JHN123A', id: 1 , startingdate: '12/10/2013',enddate:'13/10/2013',length:'1',feepaid:'300',area1:'wereq',area2:'rpty',color:'red'},
                        { title: 'JHG123A', id: 2 , startingdate: '13/10/2013',enddate:'15/10/2013',length:'2',feepaid:'200',area1:'wertq',area2:'iety',color:'orange'},
                        { title: 'JHN126A', id: 3 , startingdate: '17/10/2013',enddate:'20/10/2013',length:'3',feepaid:'100',area1:'aereq',area2:'reyy',color:'orange'},
                        { title: 'JHN113A', id: 4 , startingdate: '12/10/2014',enddate:'14/10/2014',length:'2',feepaid:'240',area1:'werwq',area2:'reoy',color:'orange'},
                        { title: 'GHN326A', id: 5 , startingdate: '13/10/2014',enddate:'20/10/2014',length:'7',feepaid:'170',area1:'weteq',area2:'remy',color:'green'},
                        { title: 'JFN123A', id: 6 , startingdate: '14/10/2013',enddate:'20/10/2013',length:'6',feepaid:'390',area1:'wermq',area2:'rkty',color:'green'}
                    ];
                $scope.entries = data;
                sharedProperties.setProperty($scope.entries);
               

            // })
            // .error(function(data) {
            //     console.log("ERROR: " + data);
            // });
    };

     $scope.ticket = function() {
    	console.log("hmm");
       	$state.go('app.ticket');
    };
     $scope.permit = function() {
    	console.log("hmm");
       	$state.go('app.permit');
    };
     $scope.violations = function() {
    	console.log("hmm");
       	$state.go('app.violations');
    };
     $scope.analytics = function() {
    	console.log("hmm");
       	$state.go('app.analytics');
    };
    $scope.calculator = function() {
    	console.log("hmm");
       	$state.go('app.calculator');
    };
  
  $scope.data = {}

    // An alert dialog
  $scope.showPopup = function(varia) {
    console.log("clicked");
    var alertPopup = $ionicPopup.alert({
      title: 'Reservation Details',

      template: "<b>Time Left: "+varia.length+" day</b>"+"<br>Reservation no: "+varia.title+"<br>"+"starting date: "+varia.startingdate+"<br>end date: "+varia.enddate+"<br>fee paid: OMR "+varia.feepaid+"<br>Area1: "+varia.area1+"<br>Area2: "+varia.area2,
    scope: $scope,
    buttons: [
      { text: 'Cancel', onTap: function(e) { return true; } },
      {
        text: '<b>Renew</b>',
        type: 'button-positive',
        onTap: function(e) {
          return "rohan";
        }
      }
    ]
    



    });
    alertPopup.then(function(res) {
      console.log('Thank you for not eating my delicious ice cream cone'+res);
    });
  };

})


.controller('PopupCtrl',function($scope, $ionicPopup,$location,$state) {

// Triggered on a button click, or some other target
$scope.showPopup = function() {
  $scope.data = {}

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    title: 'PKI Number successful',
    scope: $scope,
    buttons: [
      {
        text: '<b>OK</b>',
        type: 'button-positive',
        onTap: function(e) {
        	$state.go('app.frontscreen');
         
        }
      }
    ]
  });
  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });
  
 };

})


.controller('PermitCtrl', function($scope,sharedProperties,$ionicPopup,$state) {
  


 $scope.init = function() {

        // $http.get("http://echo.jsontest.com/conditions/frightful")
        //     .success(function(data) {
               var data=[
                        { title: 'JHN123A', id: 1 , startingdate: '12/10/2013',enddate:'13/10/2013',length:'1',feepaid:'300',area1:'wereq',area2:'rpty',color:'red'},
                        { title: 'JHG123A', id: 2 , startingdate: '13/10/2013',enddate:'15/10/2013',length:'2',feepaid:'200',area1:'wertq',area2:'iety',color:'orange'},
                        { title: 'JHN126A', id: 3 , startingdate: '17/10/2013',enddate:'20/10/2013',length:'3',feepaid:'100',area1:'aereq',area2:'reyy',color:'orange'},
                        { title: 'JHN113A', id: 4 , startingdate: '12/10/2014',enddate:'14/10/2014',length:'2',feepaid:'240',area1:'werwq',area2:'reoy',color:'orange'},
                        { title: 'GHN326A', id: 5 , startingdate: '13/10/2014',enddate:'20/10/2014',length:'7',feepaid:'170',area1:'weteq',area2:'remy',color:'green'},
                        { title: 'JFN123A', id: 6 , startingdate: '14/10/2013',enddate:'20/10/2013',length:'6',feepaid:'390',area1:'wermq',area2:'rkty',color:'green'}
                    ];
                $scope.entries = data;
                sharedProperties.setProperty($scope.entries);
               

            // })
            // .error(function(data) {
            //     console.log("ERROR: " + data);
            // });
    };
      $scope.ticket = function() {
    	console.log("hmm");
       	$state.go('app.ticket');
    };
     $scope.permit = function() {
    	console.log("hmm");
       	$state.go('app.permit');
    };
     $scope.violations = function() {
    	console.log("hmm");
       	$state.go('app.violations');
    };
     $scope.analytics = function() {
    	console.log("hmm");
       	$state.go('app.analytics');
    };
    $scope.calculator = function() {
    	console.log("hmm");
       	$state.go('app.calculator');
    };
  
  
  $scope.data = {}

    // An alert dialog
  $scope.showPopup = function(varia) {
    var alertPopup = $ionicPopup.alert({
      title: 'Reservation Details',

      template: "<b>Time Left: "+varia.length+" day</b>"+"<br>Reservation no: "+varia.title+"<br>"+"starting date: "+varia.startingdate+"<br>end date: "+varia.enddate+"<br>fee paid: OMR "+varia.feepaid+"<br>Area1: "+varia.area1+"<br>Area2: "+varia.area2,
    scope: $scope,
    buttons: [
      { text: 'Cancel', onTap: function(e) { return true; } },
      {
        text: '<b>Renew</b>',
        type: 'button-positive',
        onTap: function(e) {
          return "rohan";
        }
      }
    ]
    



    });
    alertPopup.then(function(res) {
      console.log('Thank you for not eating my delicious ice cream cone'+res);
    });
  };
})


.controller('ViolationsCtrl', function($scope, sharedProperties,$stateParams,$ionicPopup,$state) {
  document.getElementById("paid").style.display = 'none';
  $scope.data=[
                        { vehiclenum: 'JHN163A', id: 1 ,incidentdate: '12/10/2013',incidenttime:'11.00 am',omr:'300',status:'XXX',vehicletype:'SUV'},
                        { vehiclenum: 'JHN123A', id: 2 ,incidentdate: '22/10/2013',incidenttime:'11.00 am',omr:'100',status:'XXX',vehicletype:'MUV'},
                        { vehiclenum: 'JH323A', id: 3 ,incidentdate: '12/11/2014',incidenttime:'11.00 am',omr:'200',status:'XXX',vehicletype:'SUV'},
                        { vehiclenum: 'JHN3A', id: 4 ,incidentdate: '12/10/2014',incidenttime:'11.00 am',omr:'300',status:'XXX',vehicletype:'MUV'},
                        { vehiclenum: 'JHN128A', id: 5 ,incidentdate: '15/10/2013',incidenttime:'11.00 am',omr:'500',status:'XXX',vehicletype:'XXX'},
                        { vehiclenum: 'JVN123A', id: 6 ,incidentdate: '17/10/2014',incidenttime:'11.00 am',omr:'70',status:'XXX',vehicletype:'SUV'},
                        ];
  $scope.entries = $scope.data;
  sharedProperties.setViolations($scope.entries);

  $scope.data1=[
                        { vehiclenum: 'JHN163A', id: 1 ,incidentdate: '12/10/2013',incidenttime:'11.00 am',omr:'300',status:'XXX',vehicletype:'SUV',paidon:'13/10/2013'},
                        { vehiclenum: 'JHN123A', id: 2 ,incidentdate: '22/10/2013',incidenttime:'11.00 am',omr:'100',status:'XXX',vehicletype:'MUV',paidon:'24/10/2013'},
                        { vehiclenum: 'JH323A', id: 3 ,incidentdate: '12/11/2014',incidenttime:'11.00 am',omr:'200',status:'XXX',vehicletype:'SUV',paidon:'19/11/2014'}
                       ];
  $scope.entries1 = $scope.data1;
  sharedProperties.setPaid($scope.entries1);
    $scope.ticket = function() {
    	console.log("hmm");
       	$state.go('app.ticket');
    };
     $scope.permit = function() {
    	console.log("hmm");
       	$state.go('app.permit');
    };
     $scope.violations = function() {
    	console.log("hmm");
       	$state.go('app.violations');
    };
     $scope.analytics = function() {
    	console.log("hmm");
       	$state.go('app.analytics');
    };
    $scope.calculator = function() {
    	console.log("hmm");
       	$state.go('app.calculator');
    };
  

  $scope.PaidChanged = function() {
    console.log('Paid Change', $scope.paycheck.checked);
    if($scope.paycheck.checked==true){
       document.getElementById("paid").style.display = 'block';
        document.getElementById("unpaid").style.display = 'none';
    }
    else
    {
      document.getElementById("unpaid").style.display = 'block';
        document.getElementById("paid").style.display = 'none';
    }
  };
  $scope.paycheck= { checked: false };



  $scope.showPopup = function(varia) {
    if($scope.paycheck.checked==false){
    var alertPopup = $ionicPopup.alert({
      title: 'Parking violations',
      
      template: "Parking violation: "+varia.id+"<br>"+"vehicle num: "+varia.vehiclenum+"<br>Vehicle type: "+varia.vehicletype+"<br>status: "+varia.status+"<br>Incident date: "+varia.incidentdate+"<br>incident time: "+varia.incidenttime+"<br>Amount: OMR "+varia.omr,
    scope: $scope,
    buttons: [
      { text: 'Cancel', onTap: function(e) { return true; } },
      {
        text: '<b>Pay</b>',
        type: 'button-positive',
        onTap: function(e) {
          return "rohan";
        }
      }
    ]
   

    });
     alertPopup.then(function(res) {
      console.log('Thank you for not eating my delicious ice cream cone'+res);
    });
  }
  else{
    var alertPopup = $ionicPopup.alert({
          title: 'Parking violations',
          
          template: "Parking violation: "+varia.id+"<br>"+"vehicle num: "+varia.vehiclenum+"<br>Vehicle type: "+varia.vehicletype+"<br>status: "+varia.status+"<br>Incident date: "+varia.incidentdate+"<br>incident time: "+varia.incidenttime+"<br>Paid on: "+varia.paidon+"<br>Amount: OMR "+varia.omr,
          scope: $scope,
          buttons: [
            { text: 'Cancel', onTap: function(e) { return true; } }
          ]
        });
        alertPopup.then(function(res) {
          console.log('Thank you for not eating my delicious ice cream cone'+res);
        });

  }
  
  };





})

.controller('ParkingCtrl', function($scope, $http,sharedProperties,$ionicPopup,$state) {
	$scope.feeds_categories = [];

	$http.get('feeds-categories.json').success(function(response) {
		$scope.feeds_categories = response;
	});

	$scope.init = function() {

        // $http.get("http://echo.jsontest.com/conditions/frightful")
        //     .success(function(data) {
               var data=[
                        { title: 'JHN123A', id: 1 , parkingdate: '12/10/2013',starttime:'11.00 am',endtime:'3.00 pm',length:'4',feepaid:'300',area1:'wereq',area2:'rpty',color:'green'},
                        { title: 'JHG123A', id: 2 , parkingdate: '13/10/2013',starttime:'11.00 am',endtime:'3.00 pm',length:'4',feepaid:'200',area1:'wertq',area2:'iety',color:'green'},
                        { title: 'JHN126A', id: 3 , parkingdate: '17/10/2013',starttime:'12.00 pm',endtime:'2.00 pm',length:'2',feepaid:'100',area1:'aereq',area2:'reyy',color:'orange'},
                        { title: 'JHN113A', id: 4 , parkingdate: '12/10/2014',starttime:'1.00 pm',endtime:'2.00 pm',length:'1',feepaid:'240',area1:'werwq',area2:'reoy',color:'red'},
                        { title: 'GHN326A', id: 5 , parkingdate: '13/10/2014',starttime:'11.00 am',endtime:'5.00 pm',length:'6',feepaid:'170',area1:'weteq',area2:'remy',color:'green'},
                        { title: 'JFN123A', id: 6 , parkingdate: '14/10/2013',starttime:'11.00 am',endtime:'3.00 pm',length:'4',feepaid:'390',area1:'wermq',area2:'rkty',color:'green'}
                    ];
                $scope.entries = data;
                sharedProperties.setProperty($scope.entries);
               

            // })
            // .error(function(data) {
            //     console.log("ERROR: " + data);
            // });
    };

    $scope.ticket = function() {
    	console.log("hmm");
       	$state.go('app.ticket');
    };
     $scope.permit = function() {
    	console.log("hmm");
       	$state.go('app.permit');
    };
     $scope.violations = function() {
    	console.log("hmm");
       	$state.go('app.violations');
    };
     $scope.analytics = function() {
    	console.log("hmm");
       	$state.go('app.analytics');
    };
    $scope.calculator = function() {
    	console.log("hmm");
       	$state.go('app.calculator');
    };
  
  $scope.data = {}

    // An alert dialog
  $scope.showPopup = function(varia) {
    var alertPopup = $ionicPopup.alert({
      title: 'Reservation Details',

      template: "Reservation no: "+varia.title+"<br>"+"parking date: "+varia.parkingdate+"<br>starting time: "+varia.starttime+"<br>ending time: "+varia.endtime+"<br>fee paid: OMR "+varia.feepaid+"<br>Area1: "+varia.area1+"<br>Area2: "+varia.area2,
    scope: $scope,
    buttons: [
      { text: 'Cancel', onTap: function(e) { return true; } },
      {
        text: '<b>Renew</b>',
        type: 'button-positive',
        onTap: function(e) {
          return "rohan";
        }
      }
    ]
    



    });
    alertPopup.then(function(res) {
      console.log('Thank you for not eating my delicious ice cream cone'+res);
    });
  };
})



.controller('MyCtrl', function($scope, $stateParams,sharedProperties,$ionicPopup, $filter,$state) {
 $scope.data = {
    startDate: "02-19-1990",
    endDate:"02-19-1990",
    area:"area1",
    dur:"12days"

};
$scope.ticket = function() {
    	console.log("hmm");
       	$state.go('app.ticket');
    };
     $scope.permit = function() {
    	console.log("hmm");
       	$state.go('app.permit');
    };
     $scope.violations = function() {
    	console.log("hmm");
       	$state.go('app.violations');
    };
     $scope.analytics = function() {
    	console.log("hmm");
       	$state.go('app.analytics');
    };
    $scope.calculator = function() {
    	console.log("hmm");
       	$state.go('app.calculator');
    };
  
  $scope.areas = [
  {name:'Area1', id:'1'},
  {name:'WereNam', id:'2'},
  {name:'Namen', id:'3'},
  {name:'Tammaa', id:'4'},
  {name:'Sean',id:'5'}
];
 $scope.durations = [
  {name:'12 days', id:'1'},
  {name:'27 days', id:'2'},
  {name:'15 days', id:'3'},
  {name:'19 days', id:'4'},
  {name:'42 days',id:'5'}
];
$scope.dosth = function(vari) {
  console.log(vari.name);

};

 
$scope.changedd = function(vari) {
  console.log(vari.name);
  
};
$scope.calculate=function(){
  console.log("calculate");
  if($scope.data.dur.id=='1')
  {
    document.getElementById("calc-val").innerHTML = "Parking fee for "+$scope.data.dur.name+" is OMR 20";
  }
  else if($scope.data.dur.id=='2')
  {
    document.getElementById("calc-val").innerHTML = "Parking fee for "+$scope.data.dur.name+" is OMR 70";
  }

  else if($scope.data.dur.id=='3')
  {
    document.getElementById("calc-val").innerHTML = "Parking fee for "+$scope.data.dur.name+" is OMR 30";
  }
  else if($scope.data.dur.id=='4')
  {
    document.getElementById("calc-val").innerHTML = "Parking fee for "+$scope.data.dur.name+" is OMR 40";
  }
  else if($scope.data.dur.id=='4')
  {
    document.getElementById("calc-val").innerHTML = "Parking fee for "+$scope.data.dur.name+" is OMR 90";
  }
};



})



.controller('AnalyticsCtrl', function($scope, $stateParams,sharedProperties,$state) {
  $scope.chart = {
    labels : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets : [
        {
            fillColor : "rgba(151,187,205,0)",
            strokeColor : "#e67e22",
            pointColor : "rgba(151,187,205,0)",
            pointStrokeColor : "#e67e22",
            data : [4, 3, 5, 4, 6]
        }
       
    ], 
  };

   $scope.ticket = function() {
    	console.log("hmm");
       	$state.go('app.ticket');
    };
     $scope.permit = function() {
    	console.log("hmm");
       	$state.go('app.permit');
    };
     $scope.violations = function() {
    	console.log("hmm");
       	$state.go('app.violations');
    };
     $scope.analytics = function() {
    	console.log("hmm");
       	$state.go('app.analytics');
    };
    $scope.calculator = function() {
    	console.log("hmm");
       	$state.go('app.calculator');
    };
  $scope.area1usage='10';
  $scope.area2usage='30';
  $scope.area3usage='15';
  $scope.recplan="6 months parking for all areas";
  $scope.amountsave="50";
})
.controller('WalkthroughCtrl', function($scope, $state) {
	$scope.goToLogIn = function(){
		$state.go('login');
	};

	$scope.goToSignUp = function(){
		$state.go('signup');
	};
})

.controller('frontscreenCtrl', function($scope, $state) {
	$scope.goToLogIn = function(){
		$state.go('login');
	};

	$scope.goToSignUp = function(){
		$state.go('signup');
	};
})

.controller('LoginCtrl', function($scope, $state, $templateCache, $q, $rootScope) {
	

	$scope.gotoPage2 = function(){
		$state.go('page2');
	};

	

})

.controller('page2Ctrl', function($scope, $state, $templateCache, $q, $rootScope) {
	

	$scope.gotoPage3 = function(){
		$state.go('page3');
	};

	

})


.controller('page3Ctrl', function($scope, $state, $templateCache, $q, $rootScope) {
	

	$scope.gotoPage4 = function(){
		$state.go('page4');
	};
	$scope.later = function(){
		$state.go('frontscreen');
	};

	

})


.controller('page4Ctrl', function($scope, $state, $templateCache, $q, $rootScope) {
	

	$scope.gotoPage5 = function(){
		$state.go('page5');
	};
	$scope.later = function(){
		$state.go('frontscreen');
	};

	

})

.controller('SignupCtrl', function($scope, $state) {
	$scope.user = {};

	$scope.user.email = "john@doe.com";

	$scope.doSignUp = function(){
		$state.go('app.feeds-categories');
	};

	$scope.goToLogIn = function(){
		$state.go('login');
	};
})

.controller('ForgotPasswordCtrl', function($scope, $state) {
	$scope.recoverPassword = function(){
		$state.go('app.feeds-categories');
	};

	$scope.goToLogIn = function(){
		$state.go('login');
	};

	$scope.goToSignUp = function(){
		$state.go('signup');
	};

	$scope.user = {};
})

// MISCELLANEOUS
.controller('MiscellaneousCtrl', function($scope) {

})

.controller('RateApp', function($scope) {
	$scope.rateApp = function(){
		if(ionic.Platform.isIOS()){
			//you need to set your own ios app id
			AppRate.preferences.storeAppURL.ios = '1234555553>';
			AppRate.promptForRating(true);
		}else if(ionic.Platform.isAndroid()){
			//you need to set your own android app id
			AppRate.preferences.storeAppURL.android = 'market://details?id=ionFB';
			AppRate.promptForRating(true);
		}
	}
})

.controller('SendMailCtrl', function($scope) {
	$scope.sendMail = function(){
		cordova.plugins.email.isAvailable(
			function (isAvailable) {
				// alert('Service is not available') unless isAvailable;
				cordova.plugins.email.open({
					to:      'envato@startapplabs.com',
					cc:      'hello@startapplabs.com',
					// bcc:     ['john@doe.com', 'jane@doe.com'],
					subject: 'Greetings',
					body:    'How are you? Nice greetings from IonFullApp'
				});
			}
		);
	}
})

.controller('MapsCtrl', function($scope, $ionicLoading,ngGPlacesAPI) {




	$scope.info_position = {
		lat: 43.07493,
		lng: -89.381388
	};

	$scope.center_position = {
		lat: 43.07493,
		lng: -89.381388
	};

	$scope.my_location = "";
  console.log("rohan");

	$scope.$on('mapInitialized', function(event, map) {
		$scope.map = map;




	});

  $scope.callback =function(results, status){
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    console.log("success");
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
  else
  {
    console.log(error);
  }
};

	$scope.centerOnMe= function(){


 $scope.callback =function(results, status){
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    console.log("success");
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
  else
  {
    console.log(error);
  }
};

$scope.pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);

  $scope.maps = new google.maps.Map(document.getElementById('mapss'), {
    center: $scope.pyrmont,
    zoom: 15
  });

$scope.request = {
    location: $scope.pyrmont,
    radius: '500',
    types: ['store']
  };
  if($scope.maps==null)
    console.log("error");
  $scope.service = new google.maps.places.PlacesService($scope.maps);
  if($scope.service==null)
    console.log("service error");
  $scope.service.nearbySearch($scope.request,function(results, status){
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    console.log("success");
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
  else
  {
    console.log(error);
  }
});

$scope.createMarker=function(place) {
  $scope.placeLoc = place.geometry.location;
  $scope.marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
};


	// 	$scope.positions = [];

	// 	$ionicLoading.show({

	// 		template: 'Loading...'
	// 	});

	// 	// with this function you can get the user’s current position
	// 	// we use this plugin: https://github.com/apache/cordova-plugin-geolocation/
	// 	navigator.geolocation.getCurrentPosition(function(position) {
	// 		var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	// 		$scope.current_position = {lat: pos.k,lng: pos.D};
	// 		$scope.my_location = pos.k+", "+pos.D;
	// 		$scope.map.setCenter(pos);
	// 		$ionicLoading.hide();
	// 	});

// $scope.details = ngGPlacesAPI.placeDetails({reference:"hotels",map:$scope.map}).then(
//     function (data) {
      
//       return data;
//     },function(reason) {
//   console.log(reason);
// });
//  console.log($scope.details);

//   $scope.data = ngGPlacesAPI.nearbySearch({latitude:43.07493, longitude:-89.381388,map:$scope.map}).then(
//     function(data){
//        console.log(data);
//       return data;
//     },function(reason) {
//   console.log(reason);
// });

	 };
})

.controller('AdmobCtrl', function($scope, $ionicActionSheet, AdMobService) {

	// Triggered on a the logOut button click
	$scope.manageAds = function() {

		// Show the action sheet
		var hideSheet = $ionicActionSheet.show({
			//Here you can add some more buttons
			buttons: [
				{ text: 'Show Banner' },
				{ text: 'Show Interstitial' }
			],
			destructiveText: 'Remove Ads',
			titleText: 'Choose the ad to show',
			cancelText: 'Cancel',
			cancel: function() {
				// add cancel code..
			},
			destructiveButtonClicked: function() {
				console.log("removing ads");
				AdMobService.removeAds();
				return true;
			},
			buttonClicked: function(index, button) {
				if(button.text == 'Show Banner')
				{
					console.log("show banner");
					AdMobService.showBanner();
				}

				if(button.text == 'Show Interstitial')
				{
					console.log("show interstitial");
					AdMobService.showInterstitial();
				}

				return true;
			}
		});
	};
})

.controller('InAppBrowserCtrl', function($scope) {
	$scope.openBrowser = function(){
		window.open('http://www.google.com', '_blank', 'location=yes');
	}
})

// FEED
//brings all feed categories
.controller('FeedsCategoriesCtrl', function($scope, $http) {
	$scope.feeds_categories = [];

	$http.get('feeds-categories.json').success(function(response) {
		$scope.feeds_categories = response;
	});
})

//bring specific category providers
.controller('CategoryFeedsCtrl', function($scope, $http, $stateParams) {
	$scope.category_sources = [];

	$scope.categoryId = $stateParams.categoryId;

	$http.get('feeds-categories.json').success(function(response) {
		var category = _.find(response, {id: $scope.categoryId});
		$scope.categoryTitle = category.title;
		$scope.category_sources = category.feed_sources;
	});
})

//this method brings posts for a source provider
.controller('FeedEntriesCtrl', function($scope, $stateParams, $http, FeedList, $q, $ionicLoading) {
	$scope.feed = [];

	var categoryId = $stateParams.categoryId,
			sourceId = $stateParams.sourceId;

	$scope.doRefresh = function() {

		$http.get('feeds-categories.json').success(function(response) {

			$ionicLoading.show({
				template: 'Loading entries...'
			});

			var category = _.find(response, {id: categoryId }),
					source = _.find(category.feed_sources, {id: sourceId });

			$scope.sourceTitle = source.title;

			FeedList.get(source.url)
			.then(function (result) {
				$scope.feed = result.feed;
				$ionicLoading.hide();
				$scope.$broadcast('scroll.refreshComplete');
			}, function (reason) {
				$ionicLoading.hide();
				$scope.$broadcast('scroll.refreshComplete');
			});
		});
	}

	$scope.doRefresh();

	$scope.readMore = function(link){
		window.open(link, '_blank', 'location=yes');
	}
})


// WORDPRESS
.controller('WordpressCtrl', function($scope, $http, $sce, $ionicLoading) {

  $scope.posts = [];
  $scope.page = 1;
  $scope.totalPages;

  //Url to get the recent posts of your wordpress blog
  var rootURL = 'http://data.nasa.gov/?json=get_recent_posts';

  $scope.doRefresh = function() {

    $ionicLoading.show({
      template: 'Loading posts...'
    });

    $http.get(rootURL + '&page='+$scope.page).
    success(function(data, status, headers, config) {
      $scope.totalPages = data.count_total;
      $scope.posts = data.posts;
      //hide the loading sign
      $ionicLoading.hide();
      // Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    }).
    error(function(data, status, headers, config) {
      //hide the loading sign
      $ionicLoading.hide();
      // Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    });
  };

  $scope.loadMoreData = function(){
    $scope.page += 1;

    $http.get(rootURL + '&page='+$scope.page).
    success(function(data, status, headers, config) {
      //We will update this value in every request because new posts can be created
      $scope.totalPages = data.count_total;
      $scope.posts = $scope.posts.concat(data.posts);
      // Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.infiniteScrollComplete');
    }).
    error(function(data, status, headers, config) {
      // Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  }

  $scope.moreDataCanBeLoaded = function(){
    return $scope.totalPages > $scope.page;
  }

  $scope.doRefresh();
})

// WORDPRESS POST
.controller('WordpressPostCtrl', function($scope, $http, $stateParams) {

  var rootURL = 'http://data.nasa.gov';
  // Simple GET request example :
  $http.get(rootURL + '/?json=get_post&post_id=' + $stateParams.postId).
  success(function(data, status, headers, config) {
    $scope.post = data.post;
  }).
  error(function(data, status, headers, config) {
    console.log(data);
  });

	$scope.sharePost = function(link){
		window.plugins.socialsharing.share('Check this post here: ', null, null, link);
	}
})

// Multimedia
.controller('MultimediaCtrl', function($scope) {

})

// SETTINGS
.controller('SettingsCtrl', function($scope, $ionicActionSheet, $state) {
	$scope.airplaneMode = true;
	$scope.wifi = false;
	$scope.bluetooth = true;
	$scope.personalHotspot = true;

	$scope.checkOpt1 = true;
	$scope.checkOpt2 = true;
	$scope.checkOpt3 = false;

	$scope.radioChoice = 'B';

	// Triggered on a the logOut button click
	$scope.showLogOutMenu = function() {

		// Show the action sheet
		var hideSheet = $ionicActionSheet.show({
			//Here you can add some more buttons
			// buttons: [
			// { text: '<b>Share</b> This' },
			// { text: 'Move' }
			// ],
			destructiveText: 'Logout',
			titleText: 'Are you sure you want to logout? This app is awsome so I recommend you to stay.',
			cancelText: 'Cancel',
			cancel: function() {
				// add cancel code..
			},
			buttonClicked: function(index) {
				//Called when one of the non-destructive buttons is clicked,
				//with the index of the button that was clicked and the button object.
				//Return true to close the action sheet, or false to keep it opened.
				return true;
			},
			destructiveButtonClicked: function(){
				//Called when the destructive button is clicked.
				//Return true to close the action sheet, or false to keep it opened.
				$state.go('login');
			}
		});

	};
})

// FORMS
.controller('FormsCtrl', function($scope, $state) {

});
