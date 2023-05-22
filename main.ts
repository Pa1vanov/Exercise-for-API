const userID = document.querySelectorAll('.id')!;
const userName = document.querySelectorAll('.name')!;
const userEmail = document.querySelectorAll('.email')!;
const userAddress = document.querySelectorAll('.address')!;
const removeBtn = document.querySelectorAll('.remove')!;
const showMore = document.querySelectorAll('.showMore')!;
const userTables = document.querySelectorAll<HTMLElement>('.userTable')!;


const API = 'https://jsonplaceholder.typicode.com/users';

const getData = async (resource: any) => {
    const request = await fetch(resource)
    const data = await request.json();

    for (let i = 0; i < data.length; i++) {
        userName[i].textContent = data[i].name;
        userEmail[i].textContent = data[i].email;
        userAddress[i].textContent = data[i].address.city;
    }

    removeBtn.forEach((item, i) => {
        item.addEventListener("click", () =>{
            userTables[i].style.filter = "blur(6px)";
            userTables[i].style.pointerEvents = "none";
            userTables[i].style.userSelect = "none"
        })
    })

    showMore.forEach((item, i) => {
        item.addEventListener("click", () => {
            window.location.href = `https://jsonplaceholder.typicode.com/users/${data[i].id}`;
        });
    });
}

getData(API)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(new Error(`Not Found ${error.message}`));
    })