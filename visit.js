function visit() {
    var db = firebase.database();
    var date = new Date();
    var today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    var ref = db.ref('visits').child(today);

    ref.transaction(current_value => {
        return (current_value || 0) + 1;
    });
  }
window.onload = visit;