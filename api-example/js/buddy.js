const loadBuddes = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data));
}
loadBuddes();
const displayBuddies = data => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        const p = document.createElement('p');
        p.innerText = `[name:] ${buddy.title} ${buddy.name.first} ${buddy.name.last}  [email] : ${buddy.email}`;
        buddiesDiv.appendChild(p);
    }
    
}