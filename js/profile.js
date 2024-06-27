document.addEventListener("DOMContentLoaded", function() {
    // Set the student's level (this would be dynamic in a real application)
    const studentLevel = 1; // Example level, you can change this to test different levels
    const averageScores = [60, 70, 80, 90, 85, 75, 65, 95]; // Example scores for 8 subjects

    // Get the profile image element
    const profileImage = document.getElementById('profile-image');
    // Get the profile caption element
    const profileCaption = document.getElementById('profile-caption');
    // Get the profile head balloon element
    const profileBalloon = document.getElementById('profile-head-balloon');
    // Get the stamina text element
    const staminaText = document.getElementById('stamina-text');

    // Update the profile image source based on the student's level
    profileImage.src = `images/tingkat-${studentLevel}.png`;
    // Update the profile caption based on the student's level
    profileCaption.textContent = `Level-${studentLevel}`;

    // Array of balloon messages for each level
    const balloonMessages = [
        "Aku masih level-1, aku harus berjuang lagi",
        "Aku masih level-2, aku harus berjuang lagi",
        "Aku masih level-3, aku harus berjuang lagi",
        "Aku masih level-4, aku harus berjuang lagi",
        "Aku masih level-5, aku harus berjuang lagi",
        "Aku masih level-6, aku harus berjuang lagi",
        "Aku masih level-7, aku harus berjuang lagi",
        "Aku masih level-8, aku harus berjuang lagi",
        "Aku masih level-9, aku harus berjuang lagi",
        "Aku sudah di level-10, aku sangat bangga!"
    ];

    // Set the balloon message based on the student's level
    profileBalloon.textContent = balloonMessages[studentLevel - 1];

    // Calculate and set the stamina bar based on the average scores
    for (let i = 0; i < averageScores.length; i++) {
        const staminaFill = document.getElementById(`stamina-fill-${i + 1}`);
        const staminaPercentage = Math.min(Math.max(averageScores[i], 0), 100);
        staminaFill.style.width = `${staminaPercentage}%`;
        staminaFill.style.backgroundColor = `hsl(${staminaPercentage * 1.2}, 100%, 50%)`; // Color based on percentage
    }

    // Calculate the overall stamina percentage and display it
    const overallStaminaPercentage = averageScores.reduce((a, b) => a + b, 0) / averageScores.length;
    staminaText.textContent = `Stamina: ${overallStaminaPercentage.toFixed(2)}%`;
});
