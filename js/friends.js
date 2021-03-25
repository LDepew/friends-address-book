let friends = [];

const addFriend = () => {
    let fname = document.getElementById("iname").value;
    let femail = document.getElementById("iemail").value;
    let fphone = document.getElementById("iphone").value;
    let friend = {
        name: fname, email: femail, phone: fphone
    }
    friends.push(friend);
    console.log(friends);
}