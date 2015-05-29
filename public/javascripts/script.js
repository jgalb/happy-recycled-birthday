  window.fbAsyncInit = function() {
    FB.init({
      appId: '1679378368956567',
      xfbml: true,
      version: 'v2.3'
    });
    // ADD ADDITIONAL FACEBOOK CODE HERE

    FB.Event.subscribe('auth.statusChange', function(response) {
      // Log.info('Status Change Event', response);
      if (response.status === 'connected') {
        showAccountInfo();
      } else {
        document.getElementById('loginBtn').style.display = 'block';
      }
    });

    FB.getLoginStatus(function(response) {
      // Log.info('Login Status', response);
      if (response.status === 'connected') {
        showAccountInfo();
      } else {
        document.getElementById('loginBtn').style.display = 'block';
      }
    });

    function showAccountInfo() {
      FB.api('/me?fields=name,picture', function(response) {
        // Log.info('API response', response);
        document.getElementById('accountInfo').innerHTML = ('<img src="' + response.picture.data.url + '"> ');
      });
      document.getElementById('loginBtn').style.display = 'none';
    }

		function post() {
			FB.ui({
			  method: 'share',
			  href: 'https://developers.facebook.com/docs/',
			}, function(response){});
		}

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