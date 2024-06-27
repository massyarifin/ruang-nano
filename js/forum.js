document.addEventListener("DOMContentLoaded", function() {
    // Forum functionality
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const post = this.closest('.post');
            if (!this.classList.contains('liked')) {
                let likes = parseInt(post.querySelector('.like-count').textContent);
                post.querySelector('.like-count').textContent = likes + 1;
                this.classList.add('liked');
            }
        });
    });

    const replyButtons = document.querySelectorAll('.reply-button');
    replyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const post = this.closest('.post');
            const replyForm = post.querySelector('.reply-form');
            replyForm.style.display = (replyForm.style.display === 'none' || !replyForm.style.display) ? 'block' : 'none';
        });
    });

    const sendButton = document.querySelector('.send-button');
    sendButton.addEventListener('click', function() {
        const newPostText = document.querySelector('.new-post textarea').value;
        if (newPostText.trim() !== "") {
            const postsContainer = document.querySelector('.posts');
            const newPost = document.createElement('div');
            newPost.classList.add('post');
            newPost.innerHTML = `
                <div class="post-header">
                    <span>User</span>
                    <span>Just now</span>
                </div>
                <div class="post-body">${newPostText}</div>
                <div class="post-footer">
                    <button class="like-button">Like (<span class="like-count">0</span>)</button>
                    <button class="reply-button">Reply</button>
                </div>
                <div class="replies"></div>
                <div class="reply-form" style="display: none;">
                    <textarea placeholder="Write a reply..."></textarea>
                    <button class="send-reply-button">Send</button>
                </div>
            `;
            postsContainer.prepend(newPost);
            document.querySelector('.new-post textarea').value = "";

            // Add event listeners to the new buttons
            newPost.querySelector('.like-button').addEventListener('click', function() {
                if (!this.classList.contains('liked')) {
                    let likes = parseInt(this.querySelector('.like-count').textContent);
                    this.querySelector('.like-count').textContent = likes + 1;
                    this.classList.add('liked');
                }
            });

            newPost.querySelector('.reply-button').addEventListener('click', function() {
                const replyForm = this.closest('.post').querySelector('.reply-form');
                replyForm.style.display = (replyForm.style.display === 'none' || !replyForm.style.display) ? 'block' : 'none';
            });

            newPost.querySelector('.send-reply-button').addEventListener('click', function() {
                const replyText = this.previousElementSibling.value;
                if (replyText.trim() !== "") {
                    const reply = document.createElement('div');
                    reply.classList.add('reply');
                    reply.innerHTML = `
                        <div class="reply-header">
                            <span>User</span>
                            <span>Just now</span>
                        </div>
                        <div class="reply-body">${replyText}</div>
                        <button class="toggle-reply">Expand</button>
                    `;
                    this.closest('.post').querySelector('.replies').appendChild(reply);
                    this.previousElementSibling.value = "";
                    this.closest('.reply-form').style.display = 'none';

                    // Add event listener to the toggle reply button
                    reply.querySelector('.toggle-reply').addEventListener('click', function() {
                        const replyBody = this.previousElementSibling;
                        replyBody.style.display = (replyBody.style.display === 'none' || !replyBody.style.display) ? 'block' : 'none';
                        this.textContent = (replyBody.style.display === 'none') ? 'Expand' : 'Hide';
                    });
                }
            });
        }
    });

    // Add event listener to existing toggle reply buttons
    document.querySelectorAll('.toggle-reply').forEach(button => {
        button.addEventListener('click', function() {
            const replyBody = this.previousElementSibling;
            replyBody.style.display = (replyBody.style.display === 'none' || !replyBody.style.display) ? 'block' : 'none';
            this.textContent = (replyBody.style.display === 'none') ? 'Expand' : 'Hide';
        });
    });
});
