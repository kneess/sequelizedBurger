// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".changeDevoured").on("click", function(event) {
      var id = $(this).data("id");
      var burgerState = $(this).data("newdevour");
  
      var newBurgerState = {
        id: id,
        devoured: burgerState
      };
      console.log(newBurgerState)

      $.ajax({
        method: "PUT",
        url: "api/burgers",
        data: newBurgerState
      }). then(function(devouredBurger) {
        console.log(devouredBurger);
        location.reload();
      });
  
      // Send the PUT request.
      // $.ajax("/api/burgers/:id", {
      //   type: "PUT",
      //   data: newBurgerState
      // }).then(
      //   function() {
      //     // console.log("change burger state", newBurger);
      //     // Reload the page to get the updated list
        }
      );
    // });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log( "heres the burger");
      if($("#ca").val().trim() === "") {
        alert("Enter a burger name")
      } else {
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: false
      };
      console.log( "heres the burger")
  
      // Send the POST request.
      $.ajax({
        method: "POST",
        url: "api/burgers",
        data: newBurger
      }).then(
      function(dbBurger) {
        console.log(dbBurger);
        location.reload();
      }
      );
    }
    });
  });
  