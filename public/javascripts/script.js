  window.fbAsyncInit = function() {
    FB.init({
      appId: '1679378368956567',
      xfbml: true,
      version: 'v2.3'
    });
    // ADD ADDITIONAL FACEBOOK CODE HERE

    FB.Event.subscribe('auth.statusChange', function(response) {
      Log.info('Status Change Event', response);
      if (response.status === 'connected') {
        showAccountInfo();
      } else {
        document.getElementById('loginBtn').style.display = 'block';
      }
    });

    FB.getLoginStatus(function(response) {
      Log.info('Login Status', response);
      if (response.status === 'connected') {
        showAccountInfo();
      } else {
        document.getElementById('loginBtn').style.display = 'block';
      }
    });

    function showAccountInfo() {
      FB.api('/me?fields=name,picture', function(response) {
        Log.info('API response', response);
        document.getElementById('accountInfo').innerHTML = ('<img src="' + response.picture.data.url + '"> ' + response.name);
      });
      document.getElementById('loginBtn').style.display = 'none';
    }

  // function getFriendsList() {
  //   FB.api('/me/friends', {}, function(response) {
  //     console.log(response);
  //     var todayBirthdaysFriends = [];
  //     for (var i = 0; i < response.length; i++) {
  //       if (isIDsBirthday(response[i].id)) {
  //         todayBirthdaysFriends.push(response[i].id);
  //       }
  //     }

  //     //do something
  //     return todayBirthdaysFriends;
  //   });
  // }

  // function isIDsBirthday(ID) {
  //   FB.api(ID, {
  //     fields: 'birthday'
  //   }, function(response) {
  //     console.log(response);
  //     var date = new Date();
  //     var month = date.getMonth();
  //     var day = date.getDate()

  //     if (month < 10) {
  //       month = '0' + month;
  //     }
  //     if (day < 10) {
  //       day = '0' + day;
  //     }
  //     var today = month + '/' + day;

  //     if (response.birthday === day) {
  //       return true;
  //     }
  //     return false;
  //   });
  // }

  };

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));