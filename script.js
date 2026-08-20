const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get the customer's information
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const message = document.getElementById("message").value;

    // Create the WhatsApp message
    const whatsappMessage =
        "Hello Kanmi's Hairven!%0A%0A" +
        "*NEW APPOINTMENT REQUEST*%0A%0A" +
        "Name: " + name + "%0A" +
        "Phone: " + phone + "%0A" +
        "Email: " + (email || "Not provided") + "%0A" +
        "Service: " + service + "%0A" +
        "Preferred Date: " + date + "%0A" +
        "Preferred Time: " + time + "%0A" +
        "Additional Information: " + (message || "None") + "%0A%0A" +
        "Please confirm the appointment. Thank you!";

    // Kanmi's WhatsApp number
    const whatsappNumber = "2349063312916";

    // Create the WhatsApp link
    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        whatsappMessage;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

});