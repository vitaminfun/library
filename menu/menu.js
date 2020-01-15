var elem = document.getElementsByClassName('menu-item');
for (var i = 0; i < elem.length; i++) {
	elem[i].addEventListener('mouseenter', showSub, false);
	elem[i].addEventListener('mouseleave', hideSub, false);
}

function showSub(){
	if(this.children.length>1){
		this.children[1].style.height = "auto";
		this.children[1].style.opacity = "1";
		this.children[1].style.overflow = "visible";
	} else {
		return false;
	}
}

function hideSub() {
    if(this.children.length>1) {
       this.children[1].style.height = "0";
       this.children[1].style.overflow = "hidden";
       this.children[1].style.opacity = "0";
    } else {
       return false;
    }
}
function f(){
	alert('Выбрано подменю 1 меню 1');
}
function f1(){
	alert('Выбрано подменю 2 меню 1');
}
function f2(){
	alert('Выбрано подменю 3 меню 1');
}
function f3(){
	alert('Выбрано подменю 1 меню 2');
}
function f4(){
	alert('Выбрано подменю 2 меню 2');
}
function f5(){
	alert('Выбрано подменю 3 меню 2');
}
function showPageFirst(){
	window.open('2.1.html',"_blanc","top=350,left=650,height=400,width=500");
}
function showPageSecond(){
	window.open('2.2.html',"_blanc","top=350,left=650,height=400,width=500");
}
function showPageThird(){
	window.open('2.3.html',"_blanc","top=350,left=650,height=400,width=500");
}