let obj = [{
    "id":1,
    "img": "./cake.jpg",
    "name" : "aditi",
    "course": "python",
    "mobile":4654635434,
},
{
    "id":2,
     "img": "./cake.jpg",
    "name": "pragti",
    "course":"python",
    "mobile":54654654544,
},
{
    "id":3,
     "img": "./cake.jpg",
    "name": "pragti",
    "course":"python",
    "mobile":565465464,
},
]
// console.log(obj[0])
// console.log(obj[1].course)
let selecttable = document.querySelector('#output');
selecttable.innerHTML = obj.map((e)=>`
<tr>
<td>${e.id}</td>
<td><img width="100" src ="${e.img}"</td>
<td>${e.name}</td>
<td>${e.course}</td>
<td>${e.mobile}</td>
</tr>

`).join(" ")
