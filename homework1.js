function homework() {
  let a = parseInt (window.prompt("Enter number 1"));
  let b =parseInt  (window.prompt("Enter number 2"));
  let c = parseInt (window.prompt("Enter number 3"));
  if (a > b && a > c) {
    window.alert("a is greatest");
  } 
  else if (b > a && b > c) {
    window.alert("b is greatest");
  } 
  else {
    window.alert("c is greatest");
  }
}
homework();
