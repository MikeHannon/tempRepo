function outerClosure(arr){
  var counter = 0;
  var arr2 = arr.slice()
  function randomize(){
    console.log(arr2)
    if (counter % arr2.length == 0){
      var i = 0
      , j = 0
      , temp = null

    for (i = arr2.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = arr2[i];
        arr2[i] = arr2[j];
        arr2[j] = temp;
      }
        counter == 0
    }

      var temp = arr2[0];
      arr2.shift();
      arr2.push(temp);
      console.log(counter)
      counter ++;
    return arr2;

  }
return randomize
}

// outerClosure()
var randomIt = outerClosure([1,2,3,4]);

console.log(randomIt())
randomIt()
