function setup() {
  createCanvas(500, 500);
}

function draw() {
  // No necesitamos draw para esta tarea
}

function mouseClicked() {
  // Dibuja el nombre "Diego Mejías" en una posición aleatoria en el canvas
  let x = random(width);
  let y = random(height);
  fill(0); // Establece el color del texto en rosado
  textSize(20);
  text("Diego Mejías", x, y);
}
