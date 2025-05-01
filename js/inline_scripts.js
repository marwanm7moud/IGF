
                    $(document).ready(function () {
                        // Attach click event to the submit button
                        $("#submitBtn").on("click", function () {
                            // Get form values
                            var name = $("#name").val();
                            var email = $("#mail").val();
                            var mobile = $("#mobile").val();
                            var subject = $("#subject").val();
                            var message = $("#message").val();
                        
                            // Validate the required fields
                            if (!name || !mobile || !email || !subject) {
                                alert('Please fill out all required fields.');
                                return;
                            }
                        
                            // Create the mailto link with form data
                            var link = 'mailto:Info@igfservices.net?subject=Request for a Call-Back: ' + subject
                                + '&body=Name: ' + name
                                + '%0AEmail: ' + email
                                + '%0APhone: ' + mobile
                                + '%0ASubject: ' + subject
                                + '%0AMessage: ' + message;
                        
                            // Redirect to mailto link to send email
                            window.location.href = link;
                        });
                    });
                