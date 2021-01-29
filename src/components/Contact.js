import React  from 'react';
import "../css/components/Home.css"


const Contact = () => {
     return(
         <>
       
	


<div class="contentc">
	<div class="contact">
		<div class="other">
			<div class="info">
				<h2>More Methods </h2>
				<h3>Email</h3>
				<div class="svg-wrap">
					<a href="mailto:mksahota10@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 485.211 485.211"><path d="M485.21 363.906c0 10.637-2.99 20.498-7.784 29.174l-153.2-171.41 151.54-132.584c5.894 9.355 9.445 20.344 9.445 32.22v242.6zM242.607 252.793l210.863-184.5c-8.654-4.737-18.398-7.642-28.91-7.642H60.65c-10.523 0-20.27 2.906-28.888 7.643l210.844 184.5zm58.787-11.162l-48.81 42.735c-2.854 2.487-6.41 3.73-9.977 3.73-3.57 0-7.125-1.243-9.98-3.73l-48.82-42.736-155.14 173.6c9.3 5.834 20.198 9.33 31.984 9.33h363.91c11.785 0 22.688-3.496 31.984-9.33l-155.15-173.6zM9.448 89.086C3.554 98.44 0 109.43 0 121.305v242.602c0 10.637 2.978 20.498 7.79 29.174L160.97 221.64 9.448 89.086z"/></svg>
					mksahota10@gmail.com</a>
				</div>
				<h3>Connect</h3>
				<div class="svg-wrap">
					
					<a href="https://www.linkedin.com/in/mksahota10/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 478.165 478.165"><path d="M442.78 0H35.424C15.86 0 0 15.4 0 34.288v409.688c0 18.828 15.86 34.19 35.424 34.19H442.76c19.586 0 35.405-15.362 35.405-34.19V34.288C478.165 15.4 462.345 0 442.78 0zM145.003 400.244H72.78V184.412h72.224v215.832zm-36.16-245.28h-.48c-24.246 0-39.926-16.695-39.926-37.336 0-21.22 16.158-37.337 40.863-37.337 24.725 0 39.927 16.12 40.385 37.338.02 20.64-15.64 37.337-40.843 37.337zm296.54 245.28h-72.082V284.807c0-29.01-10.598-48.952-36.738-48.952-20.063 0-31.798 13.428-36.958 26.458-1.893 4.423-2.39 10.898-2.39 17.393v120.537H184.95s.916-195.63 0-215.832h72.263v30.604c9.484-14.684 26.658-35.703 65.01-35.703 47.577 0 83.16 30.863 83.16 97.168v123.766zm-148.61-184.532c.06-.22.16-.438.42-.677v.677h-.42z"/></svg></a>
				</div>
			</div>
		</div>
		<div class="form">
			<br></br>
			<h1>Get In Touch</h1>
			<br></br>
			<br></br>
			<form action="">
				<div class="flex-rev">
					<input type="text" placeholder="Manpreet Kaur" name="name" id="name" />
					<label for="name">Full Name</label>
				</div>
				<div class="flex-rev">
					<input type="email" placeholder="mksahota10@gmail.com" name="email" id="email" />
					<label for="email">Your Email</label>
				</div>

				<div class="flex-rev">
					<textarea placeholder="I was thinking..." name="message" id="message" />
					<label for="message">Email Message</label>
				</div>
				<button>Send Email</button>
			</form>
		</div>
	</div>
</div>

         </>
     )

        
    
}

export default Contact;

