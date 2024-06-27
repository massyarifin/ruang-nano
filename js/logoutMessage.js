document.addEventListener("DOMContentLoaded", function() {
    const logoutMessage = localStorage.getItem('logoutMessage');
    if (logoutMessage) {
        // Get the modal and elements
        const modal = document.getElementById("logoutModal");
        const messageDiv = document.getElementById("logoutMessage");
        const closeBtn = document.getElementsByClassName("close-btn")[0];

        // Set the message and display the modal
        messageDiv.textContent = logoutMessage;
        modal.style.display = "block";

        // When the user clicks on <span> (x), close the modal
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        localStorage.removeItem('logoutMessage');
    }
});
