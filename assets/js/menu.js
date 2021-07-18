//Меню-бургер на чистом JS
document.getElementById("menu-burger").onclick = function(){
  open()
};
function open(){
  // document.getElementById("menu-burger").classList.toggle("open-menu");
  // document.getElementById("header-menu").classList.toggle("open-menu");
  // document.body.classList.toggle("fixed-page");
  document.getElementsByClassName("menu-burger")[0].classList.toggle("open-menu");
  document.getElementsByClassName("header-menu")[0].classList.toggle("open-menu");
  document.body.classList.toggle("fixed-page");
}

document.getElementById("header-menu").onclick = function(){
  close()
};
function close(){
  if(document.getElementsByClassName("menu-burger open-menu")[0]&&document.getElementsByClassName("header-menu open-menu")[0]){
    document.getElementsByClassName("menu-burger open-menu")[0].classList.remove("open-menu");
    document.getElementsByClassName("header-menu open-menu")[0].classList.remove("open-menu");
    document.body.classList.toggle("fixed-page");
  }
}

//Якорные ссылки на чистом JS
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) { // каждому якорю присваиваем обработчик события
    e.preventDefault() // убираем стандартное поведение
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({ //
      behavior: 'smooth',
      block: 'start'
    })
  })
}

/*открытие и закрытие карточки*/