document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // ===================== Validation Functions =====================

    function validateFullName() {
        const fullname = document.getElementById("fullname").value.trim();
        const namePattern = /^[A-Za-z\s]+$/;

        if (fullname.length < 5) {
            alert("Full name must contain at least 5 characters.");
            return false;
        }

        if (!namePattern.test(fullname)) {
            alert("Full name must contain only letters and spaces.");
            return false;
        }

        return true;
    }

    function validateEmail() {
        const email = document.getElementById("email").value.trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@e-uvt\.ro$/;

        if (!emailPattern.test(email)) {
            alert("Email must be valid and end with @e-uvt.ro");
            return false;
        }

        return true;
    }

    function validatePhone() {
        const phone = document.getElementById("phone").value.trim();
        const phonePattern = /^\d{10}$/;

        // Phone is optional
        if (phone === "") {
            return true;
        }

        if (!phonePattern.test(phone)) {
            alert("Phone must contain exactly 10 digits.");
            return false;
        }

        return true;
    }

    function validateSubject() {
        const subject = document.getElementById("subject").value.trim();

        if (subject === "") {
            alert("Subject must be selected from the available options.");
            return false;
        }

        return true;
    }

    function validateMessage() {
        const message = document.getElementById("msg").value.trim();

        if (message === "") {
            alert("Message cannot be empty.");
            return false;
        }

        return true;
    }

    function validateRadioButton() {
        const radioButtons = document.getElementsByName("hear");
        const isChecked = Array.from(radioButtons).some(radio => radio.checked);

        if (!isChecked) {
            alert("You must select at least one option for 'How did you hear about me?'");
            return false;
        }

        return true;
    }

    function validateDateOfBirth() {
        const dobInput = document.getElementById("dob").value;

        if (dobInput === "") {
            alert("Date of Birth is required.");
            return false;
        }

        const dob = new Date(dobInput);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();

        // Adjust age if birthday hasn't occurred this year
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }

        if (age < 18) {
            alert("You must be at least 18 years old.");
            return false;
        }

        return true;
    }

    function validateAge() {
        const age = document.getElementById("age").value;

        if (age === "") {
            alert("Age is required.");
            return false;
        }

        const ageNum = parseInt(age);

        if (ageNum < 18 || ageNum > 60) {
            alert("Age must be between 18 and 60.");
            return false;
        }

        return true;
    }

    function validateWebsite() {
        const website = document.getElementById("website").value.trim();

        // Website is optional
        if (website === "") {
            return true;
        }

        // Check if URL starts with https://
        if (!website.startsWith("https://")) {
            alert("Website URL must start with https://");
            return false;
        }

        // Validate URL format
        try {
            new URL(website);
            return true;
        } catch {
            alert("Website URL is not valid.");
            return false;
        }
    }

    function validateFileUpload() {
        const fileInput = document.getElementById("fileUpload");
        const file = fileInput.files[0];

        // File upload is optional
        if (!file) {
            return true;
        }

        const allowedExtensions = [".pdf", ".docx"];
        const fileName = file.name.toLowerCase();
        const fileSize = file.size; // in bytes
        const maxFileSize = 2 * 1024 * 1024; // 2MB

        // Check file extension
        const hasValidExtension = allowedExtensions.some(ext => fileName.endsWith(ext));
        if (!hasValidExtension) {
            alert("File Upload must be a PDF or DOCX file.");
            return false;
        }

        // Check file size
        if (fileSize > maxFileSize) {
            alert("File size must not exceed 2MB.");
            return false;
        }

        return true;
    }

    function validateColor() {
        const color = document.getElementById("favColor").value;

        if (color === "") {
            alert("Favorite Color is required.");
            return false;
        }

        return true;
    }

    // ===================== Run All Validations =====================

    const validations = [
        validateFullName(),
        validateEmail(),
        validatePhone(),
        validateSubject(),
        validateMessage(),
        validateRadioButton(),
        validateDateOfBirth(),
        validateAge(),
        validateWebsite(),
        validateFileUpload(),
        validateColor()
    ];

    // Check if all validations passed
    if (validations.every(result => result === true)) {
        // Show confirmation dialog
        const confirmed = confirm(
            "All validations passed! Are you sure you want to submit the form?"
        );

        if (confirmed) {
            // Form submission would happen here
            alert("Form submitted successfully!");
            // Uncomment the line below if you want to actually submit the form
            // this.submit();
        }
    }
});
