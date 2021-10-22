const hamMenu = document.querySelector('.hamburger-menu')
const show = document.querySelector('.fa-bars')
const hide = document.querySelector('.fa-times')

show.addEventListener('click', function(){
  console.log('cliccato');
  hamMenu.classList.add("active")
});

hide.addEventListener('click', function(){
  hamMenu.classList.remove("active")
});