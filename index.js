document.addEventListener('DOMContentLoaded', function() {
    const changeBtn = document.getElementById('changeBtn');
    const body = document.body;
  
    changeBtn.addEventListener('click', function() {
      const randomNumber = Math.floor(Math.random() * 5) + 1;
      const newBackground = `url('bg${randomNumber}.jpg')`;
  
      body.style.backgroundImage = newBackground;
    });
  });