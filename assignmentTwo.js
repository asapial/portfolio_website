document.querySelectorAll('.quantity button').forEach(button => {
    button.addEventListener('click', function() {
        let quantity = document.querySelector('.quantity span');
        let current = parseInt(quantity.textContent);
        if (this.textContent === '+') {
            quantity.textContent = current + 1;
        } else if (this.textContent === '-' && current > 1) {
            quantity.textContent = current - 1;
        }
    });
});

    // JavaScript for shifting images in a cyclic manner
    const middleImage = document.getElementById('middleImage');
    const rightImages = [
      document.getElementById('rightImage1'),
      document.getElementById('rightImage2'),
      document.getElementById('rightImage3'),
      document.getElementById('rightImage4'),
    ];

    // Rotate images every 3 seconds
    setInterval(rotateImages, 2000);

    function rotateImages() {
      // Store the current middle image's src
      const middleImageSrc = middleImage.src;

      // Shift right images left, the first right image becomes the middle image
      middleImage.src = rightImages[0].src;

      // Shift other right images
      for (let i = 0; i < rightImages.length - 1; i++) {
        rightImages[i].src = rightImages[i + 1].src;
      }

      // Set the last right image to the old middle image
      rightImages[rightImages.length - 1].src = middleImageSrc;
    }