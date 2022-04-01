// class aanmaken
export default class Player {
    // player properties
    constructor(x, y, bulletController) {
        this.x = x;
        this.y = y;
        this.bulletController = bulletController;
        this.width = 50;
        this.height = 50;
        this.speed = 4;

        document.addEventListener("keydown", this.keydown);
        document.addEventListener("keyup", this.keyup);
    }

    // draw player
    draw(ctx) {
        this.move();
        ctx.strokeStyle = "yellow";
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, this.width, this.height);

        this.shoot();
    }

    // schiet systeem
    shoot() {
            if (this.shootPressed) {
                const speed = 5;
                const delay = 7;
                const damage = 1;
                const bulletX = this.x + this.width / 2;
                const bulletY = this.y;
                this.bulletController.shoot(bulletX, bulletY, speed, damage, delay);
            }
        }
        // movement
    move() {
        if (this.downPressed) {
            this.y += this.speed;
        }
        if (this.upPressed) {
            this.y -= this.speed;
        }
        if (this.leftPressed) {
            this.x -= this.speed;
        }

        if (this.rightPressed) {
            this.x += this.speed;
        }
    }

    // key pressed
    keydown = (e) => {
        if (e.code === "ArrowUp") {
            this.upPressed = true;
        }
        if (e.code === "ArrowDown") {
            this.downPressed = true;
        }
        if (e.code === "ArrowLeft") {
            this.leftPressed = true;
        }
        if (e.code === "ArrowRight") {
            this.rightPressed = true;
        }
        if (e.code === "Enter") {
            this.shootPressed = true;
        }
    };

    // key not pressed
    keyup = (e) => {
        if (e.code === "ArrowUp") {
            this.upPressed = false;
        }
        if (e.code === "ArrowDown") {
            this.downPressed = false;
        }
        if (e.code === "ArrowLeft") {
            this.leftPressed = false;
        }
        if (e.code === "ArrowRight") {
            this.rightPressed = false;
        }
        if (e.code === "Enter") {
            this.shootPressed = false;
        }
    };
}