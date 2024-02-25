let hours = +prompt("Enter a number of hours");

if(isNaN(hours)) {
  alert("Please enter a number");
}else {
  const result = hours * 60; 
  alert(result);
}

