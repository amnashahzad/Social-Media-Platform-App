// script.js

// Get all like buttons
const likeButtons = document.querySelectorAll('.like-button');

// Handle like button click
likeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const likeCount = button.parentNode.querySelector('.like-count');
    let count = parseInt(likeCount.innerText);
    count++;
    likeCount.innerText = count;
  });
});

// script.js

// Handle comment form submission
const commentForms = document.querySelectorAll('.comment-form');

commentForms.forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const commentInput = form.querySelector('.comment-input');
    const commentList = form.parentNode.querySelector('.comments-list');
    const comment = commentInput.value;

    if (comment.trim() !== '') {
      const li = document.createElement('li');
      li.innerText = comment;
      commentList.appendChild(li);
      commentInput.value = '';
    }
  });
});

// script.js

// Fetch posts from the server or API
fetch('https://api.example.com/posts')
  .then((response) => response.json())
  .then((data) => {
    const postsContainer = document.querySelector('.content');

    // Loop through the posts and create HTML dynamically
    data.forEach((post) => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');

      const postHeader = document.createElement('div');
      postHeader.classList.add('post-header');
      postHeader.innerHTML = `
        <h2>${post.title}</h2>
        <span class="post-date">${post.date}</span>
      `;

      const postBody = document.createElement('div');
      postBody.classList.add('post-body');
      postBody.innerHTML = `
        <p>${post.content}</p>
      `;

      postElement.appendChild(postHeader);
      postElement.appendChild(postBody);
      postsContainer.appendChild(postElement);
    });
  })
  .catch((error) => {
    console.error('Error fetching posts:', error);
  });
