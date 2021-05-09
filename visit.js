function visit() {
    $.get("https://ipinfo.io", function(response) {
      var db = firebase.database();
      var date = new Date();
      var today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      var country = response.country;
      var ref = db.ref(today).child(country);

      ref.transaction(current_value => {
        return (current_value || 0) + 1;
      });
    }, "jsonp");
  }
window.onload = visit;