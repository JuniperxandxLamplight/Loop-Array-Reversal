$(function(){
  $("#submit").click(function(){

    var userInput = $("#sentence").val();
    var inputArray = userInput.split(" ");
    var longArray = [];

    for (var index = 0; index < inputArray.length; index ++) {
      if (inputArray[index].length >= 3){
        longArray.push(inputArray[index]);
      };
    };

    longArray.reverse()
    alert(longArray.join(" "));

  });
});
