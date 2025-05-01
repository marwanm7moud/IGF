
    $(document).ready(function () {
        $("#submitBtn").on("click", function () {
            // Get form values
            var name = $("#name").val();
            var email = $("#email").val();
            var subject = $("#subject").val();
            var message = $("#message").val();

            // Validate the required fields
            if (!name || !email || !subject || !message) {
                alert('Please fill out all required fields.');
                return;
            }

            // Validate email format
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Create the mailto link with form data
            var link = 'mailto:Info@igfservices.net?subject=' + encodeURIComponent(subject)
                + '&body=' + encodeURIComponent('Name: ' + name)
                + '%0A' + encodeURIComponent('Email: ' + email)
                + '%0A' + encodeURIComponent('Subject: ' + subject)
                + '%0A' + encodeURIComponent('Message: ' + message);

            // Redirect to mailto link to send email
            window.location.href = link;
        });
    });
