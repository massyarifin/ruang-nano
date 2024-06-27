document.addEventListener("DOMContentLoaded", function() {
    const quizForm = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');

    if (quizForm) {
        quizForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const answer = document.getElementById('question1').value;
            if (answer == 2) {
                resultDiv.innerText = 'Jawaban Anda benar!';
            } else {
                resultDiv.innerText = 'Jawaban Anda salah. Coba lagi!';
            }
        });
    }
});
