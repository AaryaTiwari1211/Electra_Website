import React from 'react'

const ContactUs = () => {
    function validateForm() {
        // Example: Basic validation for demonstration purposes
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var contact = document.getElementById("contact").value;
        var query = document.getElementById("query").value;

        if (name === "" || email === "" || contact === "" || query === "") {
            alert("All fields must be filled out");
            return false;
        }

        return true;
    }
    return (
        <div>ContactUs</div>
    )
}

export default ContactUs