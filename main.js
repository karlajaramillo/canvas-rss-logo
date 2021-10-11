// retireve the element node in the DOM representing the canvas

function draw () {
  const canvas = document.querySelector('#example');

  // set canvas size
  canvas.height = 120; // 1grid --> 1 px
  canvas.width = 120;

  if (canvas.getContext){
    const ctx = canvas.getContext('2d');
    // draw rectangle
    ctx.fillStyle = 'rgb(229,138,62)';
    ctx.fillRect(0, 0 , 120, 120);

    // lines
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 15;
    ctx.beginPath();
    // They share the same center (4,21) and differ in radius (15 and 10).
    // They share the same center (20,105) and differ in radius (15 and 10).
    // x --> from x-> 20px
    // y --> until y-> 105px
    // radius --> 75 
    // from top to right --> anticlockwise property-- > false
    //ctx.arc(4,21,15, Math.PI*3/2, 0, false);
    ctx.arc(20,105, 75, Math.PI* 1.5, 0, false);
    //ctx.arc(30,70, 55, Math.PI*3/2, 0, false);
    //keeps our lines separated
    // moveTo --> same x --> 20
    // moveTo --> y-> 75px - 15 (lineWidth) --> 55
    ctx.moveTo(20,55); // move vertically down, to draw the other semicircle

    // draw small semicircle, at the same coord x, y, but less radius -->semicircle is smaller
    ctx.arc(20,105,50, Math.PI* 1.5,0,false);
    //keeps our lines separated

    ctx.stroke();

    //Draw circle
    ctx.beginPath();
    //ctx.arc(20,105,1,0,Math.PI*2);
    // //x->35, y -> 90, radious->10, circle, starting point->0
    ctx.arc(30, 105-12, 12, 0, Math.PI*2, true); 
    ctx.fillStyle = "#fff";
    ctx.fill();
  }

}
draw();



