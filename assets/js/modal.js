var modal = document.getElementById("modal");
var btns = document.getElementsByClassName("btn-modal");
var buy = document.getElementsByClassName("modal-flex__btn")[0];
var span = document.getElementsByClassName("modal-flex__close")[0];

for(let i = 0; i < btns.length; i++){
  btns[i].onclick = function () {
    modal.style.display = "block";
  }

  buy.onclick = function () {
    modal.style.display = "none";
  }

  span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }
}
  
