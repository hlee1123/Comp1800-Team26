function sayHello() {
    firebase.auth().onAuthStateChanged(function (somebody) {
        if (somebody) {
            // User is signed in.
            // Do something for the user here. 
            console.log(somebody.uid);
            db.collection("users")
                .doc(somebody.uid)
                .get()
                .then(function (doc) {
                    //console.log(doc.data().name);
                    var n = doc.data().name;
                    //using jquery
                    $("#name-goes-here").text(n);
                    //                                 //using vanilla javascript
                    //             //document.getElementById("username").innerText = n;
                    //         })
                    // } else {
                    //     // No user is signed in.
                })
        }
    });
}
sayHello();


function writeStores() {
    var storesRef = db.collection("stores");
    storesRef.add({
        // code: "YVR",
        name: "Store1",
				carly: true,             //
        // hemisphere: "north",
        // population: 675218,
        // picture: "yvr.jpg"
        address: 123,
        telephone: 604123456
    });
    storesRef.add({
        // code: "YVR",
        name: "Store2",
				carly: true,             //
        // hemisphere: "north",
        // population: 675218,
        // picture: "yvr.jpg"
        address: 111,
        telephone: 604123457
    });
    storesRef.add({
        // code: "YVR",
        name: "Store3",
				carly: true,             //
        // hemisphere: "north",
        // population: 675218,
        // picture: "yvr.jpg"
        address: 222,
        telephone: 60411111
    });
    
}
//writeStores();

// function citiesQuery(){
//     db.collection("cities")
//     .where("population", ">", 1000000)
//     //.where("hemisphere", "==", "south")
//     //.limit(1)
//     //.orderBy("population")
//     .orderBy("population", "desc")
//     .get()
//     .then(function(snap){
//         snap.forEach(function(doc){
//             var n = doc.data().name;
//             var pop = doc.data().population;
//             console.log(n);
//             var newdom = "<p> " + n + " " + pop + "</p>";
//             $("#cities-go-here").append(newdom);
//             //document.getElementById("cities-go-here").innerHTML = newdom;
//         })
//     })
// }
// citiesQuery();
