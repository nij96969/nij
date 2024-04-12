document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contactForm");
    var responseDiv = document.getElementById("response");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting via the browser

        var formData = new FormData(form);

        // Make an AJAX request
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "contact.php"); // Replace "contact.php" with your server-side script URL
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

        xhr.onload = function() {
            if (xhr.status === 200) {
                responseDiv.innerHTML = "<p>Your message has been sent successfully. We will get back to you shortly!</p>";
                form.reset(); // Reset the form
            } else {
                responseDiv.innerHTML = "<p>Oops! Something went wrong. Please try again later.</p>";
            }
        };

        xhr.onerror = function() {
            responseDiv.innerHTML = "<p>Oops! Something went wrong. Please try again later.</p>";
        };

        xhr.send(formData);
    });
});
