function visit() {
    var db = firebase.database();
    var date = new Date();
    var today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    $.get("http://ip-api.com/json", function(response) {
      console.log(response.country);
    }, "jsonp");
    var ref = db.ref(today).child("visits");

    ref.transaction(current_value => {
        return (current_value || 0) + 1;
    });
  }
window.onload = visit;