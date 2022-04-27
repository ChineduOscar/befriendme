// for nav-menu
const smallOpenerMenu = document.querySelector('.small-opener-menu');
const navBars = document.querySelector('.nav-bars');
const ham1 = document.querySelector('.ham1');
const toTop = document.querySelector('.to-top');
const growingButton = document.querySelector('.latest-post-btn');
const body = document.body;

// toggle menu 
smallOpenerMenu.addEventListener('click', ()=>{
	navBars.classList.toggle('show');
	smallOpenerMenu.classList.toggle('hambuger-menu-translated');
	growingButton.classList.toggle('display-none');
	body.classList.toggle('no-scroll');
})


// to top button

const topTopOnScroll = () =>{
	let positon = window.scrollY;
	if(positon >= 700){
		toTop.style.display = 'block';
	}
	else{
		toTop.style.display = 'none';
	}
}

window.addEventListener('scroll', ()=>{
	topTopOnScroll();
});

// continuous growing button



setInterval(()=>{
	const array = ['scale(1)', 'scale(1.1)'];
	const randomed = array[Math.floor(Math.random() * array.length)];
	growingButton.style.transform = randomed;
	
}, 500)



// project completed























