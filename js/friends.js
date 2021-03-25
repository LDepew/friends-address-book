let friends = [];

const addFriend = () => {
    let fname = document.getElementById("iname").value;
    let femail = document.getElementById("iemail").value;
    let fphone = document.getElementById("iphone").value;
    let friend = {
        name: fname, email: femail, phone: fphone
    }
    friends.push(friend);
    display();
}

const display = () => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for(let friend of friends) {
        let tr = "<tr>";
        tr += `<td>${friend.name}</td>`;
        tr += `<td>${friend.email}</td>`;
        tr += `<td>${friend.phone}</td>`;
        tr += "</tr>";
        tbody.innerHTML += tr;
    }
}