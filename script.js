    // Function to open the modal
    function openModal() {
        document.getElementById('modal-container').style.display = 'flex';
    }

    // Function to close the modal
    function closeModal() {
        document.getElementById('modal-container').style.display = 'none';
    }

    // Handle form submission (you can customize this part based on your requirements)
    document.getElementById('myForm').addEventListener('submit', function (event) {
        event.preventDefault();

           // Get form values
           var name = document.getElementById('name').value;
           var email = document.getElementById('email').value;
   
           // Save data to local storage
           localStorage.setItem('name', name);
           localStorage.setItem('email', email);
   
        // Perform actions with form data or send it to a server
        closeModal();
        alert('Form submitted!');
    });

    document.addEventListener('DOMContentLoaded', function () {
        var storedName = localStorage.getItem('name');
        var storedEmail = localStorage.getItem('email');

        if (storedName && storedEmail) {
            document.getElementById('name').value = storedName;
            document.getElementById('email').value = storedEmail;
        }
    });