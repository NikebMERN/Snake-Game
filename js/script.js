const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

// console.log(ctx);

const scale = 20;
const row = canvas.height / scale;
const column = canvas.width / scale;

let snake = [];

snake[0] = {
    x: Math.floor(Math.random() * column) * scale,
    y: Math.floor(Math.random() * row) * scale,
};

let food = {
    x: Math.floor(Math.random() * column) * scale,
    y: Math.floor(Math.random() * row) * scale,
}

// console.log(snake);

let playGame = setInterval(draw, 100);

let d = " ";

document.onkeydown = DIR;

function DIR(eve) {
    let key = eve.keyCode;
    if (key == 37 && d !== "right") {
        d = "left";
    } else if (key == 38 && d !== "down") {
        d = "up";
    } else if (key == 39 && d !== "left") {
        d = "right";
    } else if (key == 40 && d !== "up") {
        d = "down";
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = "#fff";
        ctx.strokeStyle = "red";
        ctx.fillRect(snake[i].x, snake[i].y, scale, scale);
        ctx.strokeRect(snake[i].x, snake[i].y, scale, scale);
    }

    ctx.fillStyle = "#ff0";
    ctx.strokeStyle = "green";
    ctx.fillRect(food.x, food.y, scale, scale);
    ctx.strokeRect(food.x, food.y, scale, scale);

    let SnakeX = snake[0].x;
    let Snakey = snake[0].y;
    // console.log(SnakeX);
    // console.log(Snakey);

    if (d == "left") SnakeX -= scale;
    if (d == "right") SnakeX += scale;
    if (d == "up") Snakey -= scale;
    if (d == "down") Snakey += scale;

    if (SnakeX > canvas.width) {
        SnakeX = 0;
    }
    if (Snakey > canvas.height) {
        Snakey = 0;
    }

    if (SnakeX < 0) {
        SnakeX = canvas.width;
    }
    if (Snakey < 0) {
        Snakey = canvas.height;
    }
    // console.log(newHead);
    if (SnakeX == food.x && Snakey == food.y) {
        food = {
            x: Math.floor(Math.random() * column) * scale,
            y: Math.floor(Math.random() * row) * scale,
        }
    } else {
        snake.pop();
    }
    let newHead = {
        x: SnakeX,
        y: Snakey,
    }
    if (eatSelf(newHead, snake)) {
        clearInterval(playGame);
      
    }
    snake.unshift(newHead);
    var nikeb = snake.length;
console.log(nikeb)

}
function eatSelf(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x == array[i].x && head.y == array[i].y) {
            $(".Abebe").css("display", "block");
            $(".Abebe").show(()=>{
                $(".kebri")
                .animate({ fontSize: "140px" }, 1000),
                animate({ fontSize: "50px" }, 1000)
                
            })
            return true;
            
        }
    }
    return false;
}