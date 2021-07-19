// // Якорные ссылки на чистом JS
// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) { // каждому якорю присваиваем обработчик события
//     e.preventDefault() // убираем стандартное поведение
//     const BlockID = anchor.getAttribute('href').split('#');
//     const BlockID1 = anchor.getAttribute('href').substr(1);
//     console.log("block 0 = " + BlockID[0] + "block 1 = " + BlockID[1]);
//     if(BlockID[0] !== ""){
//       // document.location.replace = BlockID[0];
//     }
//     document.getElementById(BlockID[1]).scrollIntoView({ //
//     behavior: 'smooth',
//     block: 'start'
//     })
//   })
// }

var scrollAnim;
document.querySelectorAll('a[href^="#"]').forEach(function(el){
el.addEventListener("click", function(event) {
  var target = document.querySelector(this.getAttribute("href"));
  if (target != null) {
    event.preventDefault();
  var scrollMaxHeight = Math.max( document.body.scrollHeight, document.body.offsetHeight,document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
    var scroll = target.offsetTop;
    clearTimeout(scrollAnim);
    var animTime = 500;//ms
    var step = (scroll - window.scrollY)/60 / (animTime/1000);
    if(scrollMaxHeight - scroll <= window.innerHeight)
    	scroll = scrollMaxHeight - window.innerHeight;      
    (function(){    
      if(Math.abs(window.scrollY - scroll) <= Math.abs(step)){       
      	window.scrollTo( 0, scroll);
      	return;
      }
      window.scrollTo( 0,parseFloat(window.scrollY) + step);
      scrollAnim = setTimeout(arguments.callee,1000/60);
    })();
  }
});
});

