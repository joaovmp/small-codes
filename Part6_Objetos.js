// Part 6 - Objects Exercise




var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31
}

// Método chamado nameLength 
// 
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength: function(){
    console.log(this.name.length);
  }
}



var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31
}

//  Cria um alerta


var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  report: function(){
    alert("Name is: "+this.name+", Job is: "+this.job+", Age is: "+this.age)
  }
}



var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31
}

// imprime o ultimo nome

var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  lastName: function(){
    console.log(this.name.split(" ")[1]);
  }
}
