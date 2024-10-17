function run(){
let arr = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAL440b2NbdHq9iII_R4qgQ9NRlgeGBJHqg&s',
    'https://plus.unsplash.com/premium_photo-1667126444822-94fb21279436?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVhdHVyZWR8ZW58MHx8MHx8fDA%3D',
    'https://t3.ftcdn.net/jpg/05/79/91/90/360_F_579919011_3nUAOTj14Dj0eIGkDk7FwnpOv9QNOWiO.jpg',
'https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VyZW5pdHl8ZW58MHx8MHx8fDA%3D',
'./leo.jpg'
];
let output = document.querySelector('#answer');
output.innerHTML = arr.map((imgurl)=>`
<img style="width:400px;height:400px" src="${imgurl}" alt="not found image">
`).join("")
}




// let arr = [89,9,7,6,5,544,89];
//  let newarr=arr.map((items)=>{return items*10})
//  console.log(newarr);

//  let ansarr=arr.map((items)=>{return items+9})
//  console.log(ansarr)