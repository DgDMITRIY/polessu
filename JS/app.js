$(document).ready(function(){
  //Smooth scroll
  const anchors = document.querySelectorAll('a[href*="#"]')
  for(let anchor of anchors) {
    anchor.addEventListener("click",function(event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  }
  //Burger menu
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__nav').toggleClass('active');
    $('body').toggleClass('lock');
  });
  //Drop questions
  let question = document.querySelectorAll('.questions__item_title');
  for(i=0;i<question.length;i++){
    let questionText = question[i].nextElementSibling;
    let thisQuestion = question[i];
    question[i].addEventListener('click', function(){
      questionText.classList.toggle('show');
      thisQuestion.classList.toggle('active');
    });
  }
});