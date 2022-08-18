function initAcc(elem, option) {
  //addEventListener on mouse click
  document.addEventListener('click', function (e) {
    //check is the right element clicked
    if (
      !e.target.matches(elem + ' .a-btn') &&
      !e.target.matches(elem + ' .a-btn-child')
    )
      return;
    else if (e.target.matches(elem + ' .a-btn-child')) {
      //check if element contains active class
      if (!e.target.parentElement.parentElement.classList.contains('active')) {
        if (option == true) {
          //if option true remove active class from all other accordions
          var elementList = document.querySelectorAll(elem + ' .a-container');
          Array.prototype.forEach.call(elementList, function (e) {
            e.classList.remove('active');
          });
        }
        //add active class on cliked accordion
        e.target.parentElement.parentElement.classList.add('active');
      } else {
        //remove active class on cliked accordion
        e.target.parentElement.parentElement.classList.remove('active');
      }
    } else {
      //check if element contains active class
      if (!e.target.parentElement.classList.contains('active')) {
        if (option == true) {
          //if option true remove active class from all other accordions
          var elementList = document.querySelectorAll(elem + ' .a-container');
          Array.prototype.forEach.call(elementList, function (e) {
            e.classList.remove('active');
          });
        }
        //add active class on cliked accordion
        e.target.parentElement.classList.add('active');
      } else {
        //remove active class on cliked accordion
        e.target.parentElement.classList.remove('active');
      }
    }
  });
}

//activate accordion function
initAcc('.accordion', true);
