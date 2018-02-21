(()=>{

	const sections = document.querySelectorAll('.section');
	const headerLinks = document.querySelectorAll('.js-header__link');
	const clientCards = document.querySelectorAll('.js-client-card-small');
	const header = document.getElementsByClassName('js-header')[0];
	const footer = document.getElementsByClassName('js-footer')[0];

	const opinions = [
	{
		"name" : "Jinny Snow",
		"position" : "Company CEO",
		"opinion" : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
		"imgClass" : "jinnySnow"
	},
	{
		"name" : "Camille Balboa",
		"position" : "developer",
		"opinion" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur pariatur debitis, laborum ipsa exercitationem culpa laboriosam fugit explicabo doloribus incidunt!",
		"imgClass" : "camilleBalboa"
	},
	{
		"name" : "John Snow",
		"position" : "guard",
		"opinion" : "Temporibus vitae error culpa sequi debitis dolor, perspiciatis quaerat doloremque, similique minima repellendus ad laborum animi, dolores cumque at.",
		"imgClass" : "johnSnow"
	}];

	fixedHeader();
	scrollSections();
	quotesDisplay();
	carousel();
	burger();

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

	function quotesDisplay(){
		let quoteOpinion = document.getElementsByClassName('js-opinion')[0];
		let quoteName = document.getElementsByClassName('js-name')[0];
		let quotePosition = document.getElementsByClassName('js-position')[0];
		let quoteImg = document.getElementById('js-client-card');

		let quoteData = [quoteOpinion, quoteName, quotePosition, quoteImg];

		for(let i=0; i<clientCards.length; i++){
			clientCards[i].addEventListener('click', ()=> {

				// active card setup
				activeCardSetup();
				clientCards[i].classList.add('client__card--active');

				// fade in effect to elements
				quoteData.forEach( (element)=>{element.classList.add('fadeIn')} )
				setTimeout(
					() => {
						quoteData.forEach( (element)=>{element.classList.remove('fadeIn')} )
					}
					,500);
				// change of content
				quoteOpinion.textContent = opinions[i].opinion;
				quoteName.textContent = opinions[i].name;
				quotePosition.textContent = opinions[i].position;
				quoteImg.className = 'client__card js-client-card fadeIn client__card--'+opinions[i].imgClass;
			});
		}
	
		function activeCardSetup(){
			let active = document.getElementsByClassName('client__card--active')[0];
			
			active.className = active.className.replace(' client__card--active', '');
			this.className += ' client__card--active';
		}
	}

	function carousel(){
		let arrowLeft = document.getElementsByClassName('carousel__arrow--left')[0];
		let arrowRight = document.getElementsByClassName('carousel__arrow--right')[0];
		let arrows = [arrowLeft,arrowRight];
		let cardName = document.getElementsByClassName('js-carousel-card-name')[0];
		let cardPosition = document.getElementsByClassName('js-carousel-card-position')[0];

		arrows.forEach( (arrow) => 
		{ 
			arrow.addEventListener('click', ()=> {
				arrow.classList.add('pulseRedArrow');
				setTimeout( () => {arrow.classList.remove('pulseRedArrow')} ,500);
			});
		});

		arrowRight.addEventListener('click', ()=>{moveRight();});
		arrowLeft.addEventListener('click', ()=>{moveLeft();} );

		function moveRight(){
			let leftCard = document.getElementsByClassName('carousel__card-container--left')[0];
			let midCard = document.getElementsByClassName('carousel__card-container--mid')[0];
			let rightCard = document.getElementsByClassName('carousel__card-container--right')[0];
			let hiddenCard = document.getElementsByClassName('carousel__card-container--hidden')[0];

			setTimeout( ()=>{

			leftCard.classList.add('carousel__card-container--mid');
				leftCard.classList.remove('carousel__card-container--left');
			midCard.classList.add('carousel__card-container--right');
				midCard.classList.remove('carousel__card-container--mid');
			rightCard.classList.add('carousel__card-container--hidden');
				rightCard.classList.remove('carousel__card-container--right');
			hiddenCard.classList.add('carousel__card-container--left');
				hiddenCard.classList.remove('carousel__card-container--hidden');

			}, 150);
		}

		function moveLeft(){
			let leftCard = document.getElementsByClassName('carousel__card-container--left')[0];
			let midCard = document.getElementsByClassName('carousel__card-container--mid')[0];
			let rightCard = document.getElementsByClassName('carousel__card-container--right')[0];
			let hiddenCard = document.getElementsByClassName('carousel__card-container--hidden')[0];

			setTimeout( ()=>{

			leftCard.classList.add('carousel__card-container--hidden');
				leftCard.classList.remove('carousel__card-container--left');
			midCard.classList.add('carousel__card-container--left');
				midCard.classList.remove('carousel__card-container--mid');
			rightCard.classList.add('carousel__card-container--mid');
				rightCard.classList.remove('carousel__card-container--right');
			hiddenCard.classList.add('carousel__card-container--right');
				hiddenCard.classList.remove('carousel__card-container--hidden');
			}, 150);				
		}
	}


	// burger

	function burger(){
		let input = document.getElementsByClassName('js-burger-input')[0];
		let linkContainer = document.getElementsByClassName('js-header-link-container')[0];
		let stripes = document.getElementsByClassName('js-stripe');
		let body = document.getElementsByTagName('body')[0];


		input.addEventListener('click', ()=>{
			// linkContainer.classList.toggle('burger__menu');
			stripes[0].classList.toggle('burger__stripe--red');
			stripes[2].classList.toggle('burger__stripe--red');
			// body.classList.toggle('scroll-lock');
			// headerLinks.forEach( (link)=> { link.classList.toggle('burger__link')})
			});

		// headerLinks.forEach( (link) => {
		// link.addEventListener('click', 
		// 	() => { 
		// 	if ( linkContainer.classList.contains('burger__menu') ){

		// 			// linkContainer.classList.add('');
		// 			setTimeout( () => {

		// 			linkContainer.classList.remove('burger__menu');
		// 			stripes[0].classList.remove('burger__stripe--red');
		// 			stripes[2].classList.remove('burger__stripe--red');
		// 			body.classList.remove('scroll-lock');
					
		// 			headerLinks.forEach( (link)=> {
		// 				link.classList.remove('burger__link');
		// 			});


		// 			},1500);
		// 		}
		// 	});
		// });
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