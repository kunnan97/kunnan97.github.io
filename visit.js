function visit() {
    $.get("https://ipinfo.io", function(response) {
      var db = firebase.database();
      var date = new Date();
      var today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      var location = `${response.country}: ${response.city}`;
      var ref = db.ref(today).child(location);

      ref.transaction(current_value => {
        return (current_value || 0) + 1;
      });
    }, "jsonp");
  }
window.onload = visit;