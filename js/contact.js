// dom manipulation

const form = document.querySelector('.form');
const firstName = document.querySelector('.first-name');
const secondName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const message = document.querySelector('.message');
const submitBtn = document.querySelector('.submit-btn');
const alert = document.querySelector('.alert');
const firstNameWarning = document.querySelector('.first-name-warning');
const secondNameWarning = document.querySelector('.second-name-warning');
const emailWarning = document.querySelector('.email-warning');
const messageWarning = document.querySelector('.message-warning');

firstName.focus();

// regEx declaration

const regName = /^[a-z ,.'-]+$/i;
const regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
 
// functions

// functions to clear the input field
const clear = () =>{
	firstName.value = '';
	secondName.value = '';
	email.value = '';
	message.value = '';

}

// function to reset input color to default setting
const resetInputColor = () =>{
	firstName.style.border = '1px solid black';
	secondName.style.border = '1px solid black';
	email.style.border = '1px solid black';
	message.style.border = '1px solid black';
		
		
}

// function to get all the input values

const getInputValues = () =>{
	const userInput={
		'first name': firstName.value,
		'second name': secondName.value,
		'email': email.value,
		'message': message.value
	}
	
	console.log(userInput);

}

// function to scroll to top
const toTop = () =>{
	window.scrollTo(0, 0);
}

// function to remove success message
const successRemove = () =>{
	setTimeOut(()=>{
		alert.style.display = 'none';
	},4000)
}

const checkFirstName =()=>{
	let firstNameValue = firstName.value;
	if(!regName.test(firstNameValue)){
		firstNameWarning.textContent = 'please input correct first name';
		firstNameWarning.style.fontSize = '0.9rem';
		firstNameWarning.style.color = 'red';
		firstName.style.border = '2px solid red'
	
	}else if(regName.test(firstNameValue)){
		firstNameWarning.style.display = 'none';
		firstName.style.border = '2px solid rgb(6, 210, 6)'
		
	}
}


const checkSecondName =()=>{
	let secondNameValue = secondName.value;
	if(secondNameValue == ''){
		secondNameWarning.style.display = 'none';
	}else if(!regName.test(secondNameValue)){
		secondNameWarning.textContent = 'please input correct last name';
		secondNameWarning.style.fontSize = '0.9rem';
		secondNameWarning.style.color = 'red';
		secondName.style.border = '2px solid red'
	
	}else if(regName.test(secondNameValue)){
		secondNameWarning.style.display = 'none';
		secondName.style.border = '2px solid rgb(6, 210, 6)'
		
	}
}

const secondNameExtraCheck = () =>{
	const secondNameValue = secondName.value;
	
	if(secondNameValue !=''){
		if(regName.test(secondNameValue)){
			return true;
		}
	}

	

}
	

const checkEmail =()=>{
	let emailValue = email.value;
	if(!regEmail.test(emailValue)){
		emailWarning.textContent = 'please input correct email';
		emailWarning.style.fontSize = '0.9rem';
		emailWarning.style.color = 'red';
		email.style.border = '2px solid red';
	}else if(regEmail.test(emailValue)){
		emailWarning.style.display = 'none';
		email.style.border = '2px solid rgb(6, 210, 6)';
	}
}


const checkMessage =()=>{
	let messageValue = message.value;
	if(messageValue == ''){
		messageWarning.textContent = 'please input your message';
		messageWarning.style.fontSize = '0.9rem';
		messageWarning.style.color = 'red';
		message.style.border = '2px solid red';
	}else if(messageValue != ''){
		messageWarning.style.display = 'none';
		message.style.border = '2px solid rgb(6, 210, 6)';
	}


}

const checkAll = () =>{
	const firstNameValue = firstName.value;
	const secondNameValue = secondName.value;
	const emailValue = email.value;
	const messageValue = message.value;
	
	if(regName.test(firstNameValue) && regEmail.test(emailValue) && messageValue != '' && secondNameExtraCheck()){
		alert.style.display = 'block';
		alert.style.backgroundColor = 'rgb(6, 210, 6)';
		alert.textContent = 'success';
		getInputValues();
		resetInputColor();
		clear();
		setTimeout(()=>{
 			alert.style.display = 'none';
 		},2000)
	}
}

// input eventListener
firstName.addEventListener('input', ()=>{
	checkFirstName();
})

secondName.addEventListener('input', ()=>{
	checkSecondName();
})

email.addEventListener('input', ()=>{
	checkEmail();
})

message.addEventListener('input', ()=>{
	checkMessage();
})


// form eventListener
form.addEventListener('submit', (e)=>{
	e.preventDefault();
	checkFirstName();
	checkSecondName();
	checkEmail();
	checkMessage();
	toTop();
	checkAll();
})

// project completed