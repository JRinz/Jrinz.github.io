window.onload = function() {
    // Get all the ball elements
    const balls = document.querySelectorAll('.ball');
    // Count the number of balls
    let numBalls = balls.length;
  
    // Add event listener to the document for mousemove event
    document.addEventListener('mousemove', function(event) {
      // Set the cursor to the custom cursor
      document.body.style.cursor = 'url(whitehole.png), auto';
  
      // Loop through all the balls
      balls.forEach(function(ball) {
        // Get the bounds of the ball element
        const rect = ball.getBoundingClientRect();
  
        // Check if the cursor is over the ball
        if (event.clientX >= rect.left && event.clientX <= rect.right && 
            event.clientY >= rect.top && event.clientY <= rect.bottom) {
          // Hide the ball and decrease the count of balls
          ball.style.display = 'none';
          numBalls--;
  
          // Check if all the balls are gone
          if (numBalls === 0) {
            // Display a message to indicate that the player has won
            const winMessage = document.createElement('h1');
            winMessage.textContent = 'You Win!';
            winMessage.style.textAlign = 'center';
            document.body.appendChild(winMessage);
          }
        }
      });
    });
  
    // Add event listener to the balls for click event
    balls.forEach(function(ball) {
      ball.addEventListener('click', function(event) {
        // Prevent the default click behavior
        event.preventDefault();
        // Hide the clicked ball and decrease the count of balls
        ball.style.display = 'none';
        numBalls--;
  
        // Check if all the balls are gone
        if (numBalls === 0) {
          // Display a message to indicate that the player has won
          const winMessage = document.createElement('h1');
          winMessage.textContent = 'You Win!';
          winMessage.style.textAlign = 'center';
          document.body.appendChild(winMessage);
        }
      });
    });
  };
  