function visit() {
    var db = firebase.database();
    var date = new Date();
    var today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    var ref = db.ref(today).child("visits");
    $.get("https://ipinfo.io", function(response) {
        console.log(response.country);
    }, "jsonp");
    ref.transaction(current_value => {
        return (current_value || 0) + 1;
    });
  }
window.onload = visit;