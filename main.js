
/*==========================
============================
    Made by abdullah soliman  
============================
=============================*/
// Get the input element
const body = document.querySelector('body');
const fileInput = document.getElementById('myimg');

fileInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  
  if (file) {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function() {
      const imgData = reader.result;

      // Set the background image of body to the uploaded image
      body.style.backgroundImage = `url(${imgData})`;
    };
  }
});
