// in fetch we pass two argument url amd method
function insertdata(){
    let data = {
    name:document.querySelector('#name').value,
    age:document.querySelector('#age').value,
    address:document.querySelector('#address').value
    }

fetch("http://localhost:3000/students",{
    method:'POST',
    headers:{
        'Content-type':'application/json'
    },
    body:JSON.stringify(data)
})
.then(res=>alert("inserted...!!!"))

}