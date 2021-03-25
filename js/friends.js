let names = [
    
];

const addName = () => {
    let nameCtrl = document.getElementById("newName");
    let name = nameCtrl.value;
    names.push(name);
    loadDiv();
}

const loadDiv = () => {
    let divCtrl = document.getElementById("ps");
    divCtrl.innerHTML = "";
    for(let name of names) {
        let p = `<p>${name}</p>`;
        divCtrl.innerHTML += p;
    }
}