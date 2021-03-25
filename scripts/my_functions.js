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
       
        name: "Store1",
        address: 123,
        phone: 604123456,
        
    });
    storesRef.add({
        name: "Store2",
        address: 123,
        phone: 604123456,
    });
    storesRef.add({
        name: "Store3",
        address: 123,
        phone: 604123456,
    });
    
}
//writeStores();

function writeProducts() {
    var productRef = db.collection("products");
    productRef.add({
       
        name: "Mask1",
        price: 10,
    });
    productRef.add({
        name: "Mask2",
        price: 20,
    });
    productRef.add({
        name: "Mask3",
        price: 30,
    });
    
}
//writeProducts();

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

// Initialize and add the map
