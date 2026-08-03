// Cozy's Wear Dashboard

const db = firebase.database();


// Owners Count
db.ref("owners").on("value", (snapshot)=>{
    let owners = snapshot.numChildren();
    document.getElementById("owners").innerHTML = owners;
});


// Products Count
db.ref("products").on("value", (snapshot)=>{
    let products = snapshot.numChildren();
    document.getElementById("products").innerHTML = products;
});


// Sales Count
db.ref("sales").on("value", (snapshot)=>{
    let sales = snapshot.numChildren();
    document.getElementById("sales").innerHTML = sales;
});


// Unpaid Amount
db.ref("payments").on("value",(snapshot)=>{

    let total = 0;

    snapshot.forEach((item)=>{
        let data = item.val();

        if(data.status === "unpaid"){
            total += Number(data.amount);
        }
    });

    document.getElementById("unpaid").innerHTML =
    total + " ETB";

});
