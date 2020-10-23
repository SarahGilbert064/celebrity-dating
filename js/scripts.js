$(document).ready(function() {
  $("form#celeb-dating").submit(function(event) {

    const millionStr = $("select#million").val();
    const million = parseInt(millionStr);
    
    const animalStr = $("select#animal").val();
    const animal = parseInt(animalStr);
    
    const spareTimeStr = $("select#spare-time").val();
    const spareTime = parseInt(spareTimeStr);

    const result = million + animal + spareTime;
    
    if (result <= 4) {
      $("#nick").show()
      $("#bear").hide()
      $("#ada").hide()
      $("#jane").hide()
    } else if (result > 4 && result <= 6) {
      $("#nick").hide()
      $("#ada").hide()
      $("#jane").hide()
      $("#bear").show()
    } else if (result > 6 && result <= 8) {
      $("#nick").hide()
      $("#bear").hide()
      $("#ada").hide()
      $("#jane").show()
    } else {
      $("#ada").show()
      $("#nick").hide()
      $("#jane").hide()
      $("#bear").hide() 
      
    };
    event.preventDefault();
  });
});