window.addEventListener('load', function() {

const togglebutton= document.getElementsByClassName('navbar-toggler')[0];
const navlinks= document.getElementsByClassName('list-items');
togglebutton.addEventListener('click',function() {
	for(var i=0;i<navlinks.length;i++){
		navlinks[i].classList.toggle('active');
	}
});
});