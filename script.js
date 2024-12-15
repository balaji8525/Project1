document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
 
    if (form) { // Check if form exists
        form.addEventListener("submit", function(event) {
            event.preventDefault();
 
            // Collect form data
            const name = document.getElementById("name").value;
            const phone = document.getElementById("phone").value;
            const message = document.getElementById("message").value;
            const email = document.getElementById("email").value;
            const budget = document.getElementById("budget").value;
            const link = document.getElementById("link").value;
            // Collect selected services 
            const selectedServices = []; const serviceCheckboxes = document.querySelectorAll('input[name="services"]:checked'); 
            serviceCheckboxes.forEach((checkbox) => { selectedServices.push(checkbox.value); }); 
            const servicesText = selectedServices.length > 0 ? selectedServices.join(", ") : "None";
 

 
          
            // Prepare the email intent
            const recipient = "recipient@example.com"; // Replace with your email address
            const subject = encodeURIComponent("New Contact Form Submission");
            const body = encodeURIComponent(
                `Name: ${name}\nPhone: ${phone}\n\n Budget:\n${budget}\n\n Email: ${email}\n\n link : ${link}\n\n Services: ${servicesText}\n\n Message: ${message}`
            );
 
            // Open the mail client
            window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
        });
    } else {
        console.error("Form with ID 'contactForm' not found.");
    }
});