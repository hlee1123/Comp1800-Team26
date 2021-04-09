function getReviews() {
    document.getElementById("addReview").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {

            // get various values from the form
            var email = document.getElementById("email").value;
            var desc = document.getElementById("message").value;
            var one = document.getElementById("star1").value;
            var two = document.getElementById("star2").value;
            var three = document.getElementById("star3").value;
            var four = document.getElementById("star4").value;
            var five = document.getElementById("star5").value;


            db.collection("users")
                .doc(user.uid)
                .collection("reviews")
                .add({
                    "Email": email,   //from text field   
                    "Description": desc,     
                    "One Star": one,     
                    "Two Star": two,     
                    "Three Star": three,     
                    "Four Star": four,     
                    "Five Star": five     

                })
        })
    })
}
getReviews();

// function myMap() {
//     var mapProp= {
//       center:new google.maps.LatLng(51.508742,-0.120850),
//       zoom:5,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
//     }



// myMap();
