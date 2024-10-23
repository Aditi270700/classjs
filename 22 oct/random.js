function ranimg(){
let imgurls = [
"cake.jpg",
"jen.jpg",
 "allen cake.jpg",
]
let ran = Math.random();
let multiply = ran *imgurls.length;
let flooredval = Math.floor(multiply);
let selectimg = document.querySelector('#im');
selectimg.src = imgurls[flooredval];
}