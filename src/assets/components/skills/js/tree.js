export class TreeSkills {
    skill = false;
    radius = 100;

    constructor(opt) {
        this.canvas = opt.canvas;
        this.ctx = opt.ctx;

        this.width = opt.canvasWidth;
        this.height = opt.canvasHeight;
    }

    createCircle = (x, y, radius, color) => {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx.closePath();
        this.ctx.fill();
    };

    createLineTo = (moveToX, moveToY, finalX, finalY, color) => {
        this.ctx.strokeStyle = color;
        this.ctx.beginPath();
        this.ctx.lineWidth = 3;
        this.ctx.moveTo(moveToX, moveToY);
        this.ctx.lineTo(finalX, finalY);
        this.ctx.stroke();
    };

    createStrokeCircle = (x, y, radius, color, lineWidth, boo) => {
        this.ctx.beginPath();
        this.ctx.strokeStyle = color;
        this.ctx.lineJoin = "none";
        this.ctx.lineWidth = lineWidth;
        boo
            ? this.ctx.arc(x, y, radius, 0, 2 * Math.PI)
            : this.ctx.arc(x, y, radius, 0, ((2 * Math.PI) / 100) * this.skill.level);
        this.ctx.stroke();
        this.ctx.closePath();
    };

    createTextInCircle = (x, y, color, text) => {
        this.ctx.beginPath();
        this.ctx.font = "20px JetBrains Mono";
        this.ctx.fillStyle = color;
        this.ctx.textAlign = "center";
        this.ctx.fillText(text, x, y);
    };

    subCircleTree = (x, y, tree, color, ang, boolean) => {
        let PI = Math.PI;
        if (!boolean) {
            PI = -Math.PI;
        }

        let acc = 0;

        for (let i = 0; i < tree.length; i++) {
            let angleX = Math.cos(i * (PI / tree.length) + ang);
            let angleY = Math.sin(i * (PI / tree.length) + ang);

            let finalX = x + this.radius * angleX;
            let finalY = y + this.radius * angleY;

            let angle = Math.atan2(angleY, angleX);

            if (i == 1) {
                acc = angle;
                console.log(acc);
            }

            if (tree[i].tree && tree[i].tree.length > 0) {
                console.log("tree");
                if (angleY > 0) {
                    angle = angle - acc;
                    this.subCircleTree(finalX, finalY, tree[i].tree, "red", angle, true);
                } else {
                    angle = angle + acc;
                    this.subCircleTree(finalX, finalY, tree[i].tree, "red", angle, false);
                }
            }

            this.createLineTo(x, y, finalX, finalY, color);
            this.createCircle(finalX, finalY, 10, color, boolean);
            // this.createTextInCircle(finalX, finalY, "red", tree[i].name);
        }
    };

    circleTree = (tree) => {
        let acc = 0;
        for (let i = 0; i < tree.length; i++) {
            let angleX = Math.cos(i * ((2 * Math.PI) / tree.length));
            let angleY = Math.sin(i * ((2 * Math.PI) / tree.length));

            let angle = Math.atan2(angleY, angleX);

            if (i == 1) {
                acc = angle;
                console.log(acc);
            }

            let finalX = this.width / 2 + this.radius * 2 * angleX;
            let finalY = this.height / 2 + this.radius * 2 * angleY;

            if (tree[i].tree && tree[i].tree.length > 0) {
                if (angleY > 0) {
                    angle = angle - acc;
                    this.subCircleTree(finalX, finalY, tree[i].tree, "blue", angle, true);
                } else {
                    angle = angle + acc;
                    this.subCircleTree(finalX, finalY, tree[i].tree, "blue", angle, false);
                }
            }

            this.createLineTo(this.width / 2, this.height / 2, finalX, finalY, "green");
            this.createCircle(finalX, finalY, 20, "green");
            // this.createTextInCircle(finalX, finalY, "red", this.skill.tree[i].name);
        }
    };

    drawTreeGraph = () => {
        if (this.skill.tree && this.skill.tree.length > 0) {
            this.circleTree(this.skill.tree);
        }

        this.createCircle(this.width / 2, this.height / 2, this.radius - 60, "green");
        this.createStrokeCircle(this.width / 2, this.height / 2, this.radius - 60, "grey", 4, true);
        this.createStrokeCircle(this.width / 2, this.height / 2, this.radius - 60, "red", 4, false);
        // this.createTextInCircle(this.width / 2, this.height / 2, "red", this.skill.name);
    };

    init(skill) {
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.skill = skill;

        this.drawTreeGraph();

        requestAnimationFrame(this.draw);
    }

    draw = () => {
        // if (this.skill.tree.length > 0) {
        //     this.circleTree(this.skill.tree);
        // }

        // this.createCircle(this.width / 2, this.height / 2, this.radius - 60, "green");
        // this.createStrokeCircle(this.width / 2, this.height / 2, this.radius - 60, "grey", 4, true);
        // this.createStrokeCircle(this.width / 2, this.height / 2, this.radius - 60, "red", 4, false);
        // this.createTextInCircle(this.width / 2, this.height / 2, "red", this.skill.name);

        requestAnimationFrame(this.draw);
    };
}
