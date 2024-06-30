
/*let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// Origin:
let ox = canvas.width / 1;
let oy = canvas.height;
  
// Mouse cursor positions:
let mx = ox;
let my = 5;
  
window.addEventListener("mousemove", event => {
  let rect = canvas.getBoundingClientRect();
  mx = event.clientX - rect.left;
  my = event.clientY - rect.top;
});

function drawPointer(ctx, ox, oy, dx, dy) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(ox, oy);
  ctx.lineTo(ox + dx * 100, oy + dy * 100);
  ctx.stroke();
}

function frame(timestamp) {
  requestAnimationFrame(frame);

  // Direction:
  let dx = mx - ox;
  let dy = my - oy;
  
  // Normalize direction to length 1:
  let dl = Math.sqrt(dx * dx + dy * dy);
  dx /= dl;
  dy /= dl;
  
  drawPointer(ctx, ox, oy, dx, dy);
 

}
requestAnimationFrame(frame);*/


$(document).ready(function () {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  let x = canvas.width / 2;
  let y = canvas.height - 30;
  let dx = 4;
  let dy = 4;
  let paddleHeight = 10;
  let paddleWidth = 75;
  let paddleX = (canvas.width - paddleWidth) / 2;
  let ballRadius = 10;
  let rightPressed = false;
  let leftPressed = false;
  let brickRowCount = 3;
  let brickColumnCount = 5;
  let brickWidth = 75;
  let brickHeight = 20;
  let brickPadding = 10;
  let brickOffsetTop = 30;
  let brickOffsetLeft = 30;
  let score = 0;
  let lives = 3;
  let mouseX;


  function onMouseMove(evt) {// Event data passes to this function
    // Assign the relative position of the mouse in the canvas to mouseX
    mouseX = evt.pageX - canvas.offsetLeft - paddleWidth / 2;
    //Do the same for mouseY
    mouseY = evt.pageY - canvas.offsetTop;
    // Position the paddle
    paddleX = mouseX;
    
  }
  canvas.addEventListener("mousemove", onMouseMove, false);
  
  
  function drawPaddle() {
    ctx.beginPath()
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight)
    ctx.fillStyle = '#c02ef0'
    ctx.fill()
    ctx.closePath()
  }

  function drawBall() {
    ctx.beginPath()
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2)
    ctx.fillStyle = '#c02ef0'
    ctx.fill()
    ctx.closePath()
  }

  function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawPaddle()
    drawBricks()
    collisionDetection()
    drawScore()
    drawLives()
    drawBall()

    x += dx
    y += dy
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
      dx = -dx
    }
    if (y + dy < ballRadius) {
      dy = -dy
    } else if (y + dy > canvas.height - ballRadius) {
      if (x > paddleX && x < paddleX + paddleWidth) {
        dy = -dy
      } else {
        lives--
        if (!lives) {
          alert('GAME OVER')
          document.location.reload()
        } else {
          x = canvas.width / 2
          y = canvas.height - 30
          dx = 4
          dy = 4
          paddleX = (canvas.width - paddleWidth) / 2
        }
      }
    }

    if (rightPressed && paddleX < canvas.width - paddleWidth) {
      paddleX += 7
    } else if (leftPressed && paddleX > 0) {
      paddleX -= 7
    }

    requestAnimationFrame(draw)

  }

  document.addEventListener('keydown', keyDownHandler, false)
  document.addEventListener('keyup', keyUpHandler, false)

  function keyDownHandler(e) {
    if (e.key == 'Right' || e.key == 'ArrowRight') {
      rightPressed = true

    } else if (e.key == 'Left' || e.key == "ArrowLeft") {
      leftPressed = true
    }
  }
  let bricks = []
  for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = []
    for (let r = 0; r < brickRowCount; r++) {
      bricks[c][r] = { x: 0, y: 0, status: 1 }
    }
  }
  function drawBricks() {
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        if (bricks[c][r].status === 1) {
          let brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft
          let brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop
          bricks[c][r].x = brickX
          bricks[c][r].y = brickY
          ctx.beginPath()
          ctx.rect(brickX, brickY, brickWidth, brickHeight)
          ctx.fillStyle = '#c02ef0'
          ctx.fill()
          ctx.closePath()
        }

      }
    }
  }
  function collisionDetection() {
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        let b = bricks[c][r]
        if (b.status === 1) {
          if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
            dy = -dy
            b.status = 0
            score++
            if (score === brickColumnCount * brickRowCount) {
              alert('You Win!!')
              document.location.reload()
            }
          }
        }
      }
    }
  }
  function keyUpHandler(e) {
    if (e.key == 'Right' || e.key == 'ArrowRight') {
      rightPressed = false

    } else if (e.key == 'Left' || e.key == "ArrowLeft") {
      leftPressed = false
    }
  }

  function drawScore() {
    ctx.font = '16px Arial'
    ctx.fillStyle = '#c20ef0'
    ctx.fillText('Score: ' + score, 8, 20)

  }
  function drawLives() {
    ctx.font = '16px Arial'
    ctx.fillStyle = '#c20ef0'
    ctx.fillText('Lives: ' + lives, canvas.width - 65, 20)
  }
 // draw();





var game=draw()

$("#pause").click(function() {
game.pause()
 
});

$("#resume").click(function() {
 game.play()
});




});


