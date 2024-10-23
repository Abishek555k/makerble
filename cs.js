// Add event listeners to expand buttons or comment post buttons if needed
document.querySelectorAll('.expand-btn').forEach(button => {
    button.addEventListener('click', function() {
      alert('Story expanded!');
    });
  });
  
  document.querySelectorAll('.comment-btn').forEach(button => {
    button.addEventListener('click', function() {
      let comment = this.previousElementSibling.value;
      if (comment) {
        alert('Comment Posted: ' + comment);
        this.previousElementSibling.value = ''; // Clear input
      }
    });
  });
  const postBtn = document.getElementById('postBtn');
const postForm = document.getElementById('postForm');
const cancelBtn = document.getElementById('cancelBtn');

// Show the form when 'Post' button is clicked
postBtn.addEventListener('click', function() {
  postForm.style.display = 'block';
});

// Hide the form when 'Cancel' button is clicked
cancelBtn.addEventListener('click', function() {
  postForm.style.display = 'none';
});