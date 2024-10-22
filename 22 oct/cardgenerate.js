let arrofobj = [
    {
    "id":1,
    "imageurl":"cake.jpg",
    "bname":"cake",
    "pname":"shoes",
    "pprice":999,
},
{
    "id":2,
    "imageurl":"cake.jpg",
    "bname":"cake",
    "pname":"shoes",
    "pprice":999,
},
{
    "id":3,
    "imageurl":"cake.jpg",
    "bname":"cake",
    "pname":"shoes",
    "pprice":999,
},
{
    "id":4,
    "imageurl":"cake.jpg",
    "bname":"cake",
    "pname":"shoes",
    "pprice":999,
},
{
    "id":5,
    "imageurl":"cake.jpg",
    "bname":"cake",
    "pname":"shoes",
    "pprice":999,
},
{
    "id":6,
    "imageurl":"cake.jpg",
    "bname":"cake",
    "pname":"shoes",
    "pprice":999,
},
{
    "id":7,
    "imageurl":"cake.jpg",
    "bname":"cake",
    "pname":"shoes",
    "pprice":999,
},
{
    "id":8,
    "imageurl":"cake.jpg",
    "bname":"cake",
    "pname":"shoes",
    "pprice":999,
}
];
let selectdiv = document.querySelector('#ans');
selectdiv.innerHTML = arrofobj.map((card)=>`
<div style="margin:20px;box-shadow:0px 0px 10px 2px black">
<img width="200px" height="200px" src="${card.imageurl}" alt="">
<div>${card.bname}</div>
<div>${card.pname}</div>
<div>${card.pprice}</div>
<div>add to cart</div>
<div>buy now</div>
</div>
`
).join(" ")