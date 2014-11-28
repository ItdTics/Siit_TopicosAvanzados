$(document).ready(menu);

var contador = 1;

function menu(){
	$('.menu_bar').click(function(){
		if(contador==1){
			 $('nav').animate({
				left: '0'
			});
			contador=0;
		}else{
			$('nav').animate({
				left: '-100%'
			});
			contador=1;
		}
	});
	$('.contenido').click(function(){
		if(contador==0){
			$('nav').animate({
				left: '-100%'
			});
			contador=1;
		}
	});
	$('nav').click(function(){
		if(contador==0){
			$('nav').animate({
				left: '-100%'
			});
			contador=1;
		}
	})

};