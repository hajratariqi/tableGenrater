function tablesNumber() {
  var table = document.getElementById("tableNumber").value;
  var resultConatiner = document.getElementById("result");
  if(resultConatiner.hasChildNodes){
   console.log("yeah its true")
   resultConatiner.innerHTML = "";
  }else{
   console.log("yeah its false")
  }
  for (var i = 1; i <= 10; i++) {
    var result = i + "x" + i + "=" + table * i + "<br>";
    resultConatiner.innerHTML += result;
  }
}
