let str = "hgdfhgf jdgfjhgfu djhsfjhsdgf wieuyriueygtpt jhfjhfgf hdfjhdf";
let store = "";
for(let i = 0; i< str.length;i++ ){
    if(!(str[i] === "j")){
        store = store + str[i];
    }
    else{
        store = store+"hello";
    }
}
console.log(store)
console.log(str.replaceAll(" ",""))