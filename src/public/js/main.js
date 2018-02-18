(()=>{

	const sections = document.querySelectorAll('.section');
	const headerLinks = document.querySelectorAll('.js-header__link');
	const clientCards = document.querySelectorAll('.client__card--s');
	const header = document.getElementsByClassName('js-header')[0];
	const footer = document.getElementsByClassName('js-footer')[0];

	fixedHeader();
	scrollSections();
	quotes();

	function scrollSections(){

		for (let i=6, a=-1; i>0; i--){
			a = a+1;
			headerLinks[i].addEventListener('click', () => {
				sections[a].scrollIntoView({behavior: "smooth", block: "start"});				
			});			
		}

		headerLinks[0].addEventListener('click', () => {
				footer.scrollIntoView({behavior: "smooth", block: "start"});				
			});			
	}

	function fixedHeader(){
		window.onscroll = debounce( ()=>{
			let scroll = document.documentElement.scrollTop || document.body.scrollTop;

			if(scroll >= 100 && !header.classList.contains('header--fixed')){
				header.classList.add('header--fixed');
			}
			if(scroll < 100){
				header.classList.remove('header--fixed');
			}
		},
		50);
	}

	function quotes(){
		// clientCards.forEach( (clientCard) => clientCard.addEventListener('click', () => {
		// 	clientCard.classList.toggle('client__card--active');
		// }))
	}

// https://davidwalsh.name/javascript-debounce-function --> optimize scroll
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

})();