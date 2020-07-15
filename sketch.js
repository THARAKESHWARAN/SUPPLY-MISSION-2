var helicopterIMG, helicopterSprite, groundSprite, packageSprite, packageBody;
var package, ground;
var box1, box2, box3;
var staticBox1, staticBox2, staticBox3;
var packageSprite;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	box1 = new StaticBox(280, 610, 20, 100);
	box2 = new StaticBox(370, 630, 200, 20);
	box3 = new StaticBox(440, 610, 20, 100);
	
	staticBox1 = createSprite(270, 610, 20, 100);
	staticBox1.shapeColor = color(255, 0, 255);
	
	staticBox2 = createSprite(370, 650, 200, 20);
	staticBox2.shapeColor = color(255, 0, 255);

	staticBox3 = createSprite(480, 610, 20, 100);
	staticBox3.shapeColor = color(255, 0, 255);

	package = Bodies.rectangle(width / 2, 200, 10, 10, { restitution: 1.2, isStatic: true })
	World.add(world, package);

	groundSprite = createSprite(400, 690, 800, 20);

	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;
	packageSprite.debug = true;

	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;

	ground = Bodies.rectangle(400, 670, 800, 20, { isStatic: true });
	World.add(world, ground);

	Engine.run(engine);

}


function draw() {

	background(255);

	Engine.update(engine);

	groundSprite.x = ground.position.x;
	groundSprite.y = ground.position.y;

	packageSprite.x = package.position.x
	packageSprite.y = package.position.y

	drawSprites();
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(package, false);
	}
}
