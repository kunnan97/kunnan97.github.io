$.get("http://ip-api.com/json", function(response) {
      console.log(response.country);
    }, "jsonp");