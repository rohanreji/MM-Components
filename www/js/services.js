angular.module('your_app_name.services', [])


.service('FeedList', function ($rootScope, FeedLoader, $q){
	this.get = function(feedSourceUrl) {
		var response = $q.defer();
		//num is the number of results to pull form the source
		FeedLoader.fetch({q: feedSourceUrl, num: 20}, {}, function (data){
			response.resolve(data.responseData);
		});
		return response.promise;
	};
})


.service('PushNotificationsService', function ($rootScope, $cordovaPush, NodePushServer){
	this.register = function() {

		// ANDROID PUSH NOTIFICATIONS
		if(ionic.Platform.isAndroid())
		{
			var config = {
				"senderID": "574597432927" // REPLACE THIS WITH YOURS FROM GCM CONSOLE
			};

			document.addEventListener("deviceready", function(){

				$cordovaPush.register(config).then(function(result) {
					// Success
					console.log("$cordovaPush.register Success");
					console.log(result);
				}, function(err) {
					// Error
					console.log("$cordovaPush.register Error");
					console.log(err);
				});

				$rootScope.$on('$cordovaPush:notificationReceived', function(event, notification) {
					console.log(JSON.stringify([notification]));
					switch(notification.event)
					{
						case 'registered':
							if (notification.regid.length > 0 ) {
								console.log('registration ID = ' + notification.regid);
								NodePushServer.storeDeviceToken("android", notification.regid);
							}
							break;

						case 'message':
							if(notification.foreground == "1")
							{
								console.log("Notification received when app was opened (foreground = true)");
							}
							else
							{
								if(notification.coldstart == "1")
								{
									console.log("Notification received when app was closed (not even in background, foreground = false, coldstart = true)");
								}
								else
								{
									console.log("Notification received when app was in background (started but not focused, foreground = false, coldstart = false)");
								}
							}

							// this is the actual push notification. its format depends on the data model from the push server
							console.log('message = ' + notification.message);
							break;

						case 'error':
							console.log('GCM error = ' + notification.msg);
							break;

						default:
							console.log('An unknown GCM event has occurred');
							break;
					}
				});

				// WARNING: dangerous to unregister (results in loss of tokenID)
				// $cordovaPush.unregister(options).then(function(result) {
				//   // Success!
				// }, function(err) {
				//   // Error
				// });

			}, false);
		}

		if(ionic.Platform.isIOS())
		{
			var config = {
				"badge": true,
				"sound": true,
				"alert": true
			};

			document.addEventListener("deviceready", function(){
				$cordovaPush.register(config).then(function(result) {
					// Success -- send deviceToken to server, and store for future use
					console.log("result: " + result);
					NodePushServer.storeDeviceToken("ios", result);
				}, function(err) {
					console.log("Registration error: " + err);
				});

				// This is the simpliest code that's working NOW
				// $rootScope.$on('$cordovaPush:pushNotificationReceived', function(event, notification) {
				//   if (notification.alert) {
				//     navigator.notification.alert(notification.alert);
				//   }
				//
				//   if (notification.sound) {
				//     var snd = new Media(event.sound);
				//     snd.play();
				//   }
				//
				//   if (notification.badge) {
				//     $cordovaPush.setBadgeNumber(notification.badge).then(function(result) {
				//       // Success!
				//       console.log("Set badge success " + result);
				//     }, function(err) {
				//       // An error occurred. Show a message to the user
				//       console.log("Set badge error " + err);
				//     });
				//   }
				// });

				// This is an advanced code taht we have to test
				$rootScope.$on('$cordovaPush:pushNotificationReceived', function(event, notification) {
					// The app was already open but we'll still show the alert and sound the tone received this way. If you didn't check
					// for foreground here it would make a sound twice, once when received in background and upon opening it from clicking
					// the notification when this code runs (weird).
					if(notification.foreground == "1")
					{
						if(notification.sound)
						{
							var snd = new Media(event.sound);
							snd.play();
						}

						if(notification.body && notification.messageFrom)
						{
							console.log(notification.body, notification.messageFrom);
						}
						else
						{
							console.log(notification.alert, "Push Notification Received");
						}
					}
					// Otherwise it was received in the background and reopened from the push notification. Badge is automatically cleared
					// in this case. You probably wouldn't be displaying anything at this point, this is here to show that you can process
					// the data in this situation.
					else
					{
						if(notification.body && notification.messageFrom)
						{
							console.log(notification.body, "(RECEIVED WHEN APP IN BACKGROUND) " + notification.messageFrom);
						}
						else
						{
							console.log(notification.alert, "(RECEIVED WHEN APP IN BACKGROUND) Push Notification Received");
						}
					}
				});

				// // WARNING! dangerous to unregister (results in loss of tokenID)
				// $cordovaPush.unregister(options).then(function(result) {
				//   // Success!
				// }, function(err) {
				//   // Error
				// });

			}, false);
		}
	};
});
