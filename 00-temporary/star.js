var canvas, ctx, length = 15; // length of the star's arm

// grab a reference to the 2d context from canvas element
canvas = document.getElementById("star");
ctx = canvas.getContext("2d");

// move into the middle of the canvas, just to make room
ctx.translate(30, 30);

// initial offset rotation so our star is straight
ctx.rotate((Math.PI * 1 / 10));

// make a point, 5 times
for (var i = 5; i--;) {
    // draw line up
    ctx.lineTo(0, length);
    // move origin to current same location as pen
    ctx.translate(0, length);
    // rotate the drawing board
    ctx.rotate((Math.PI * 2 / 10));
    // draw line down
    ctx.lineTo(0, -length);
    // again, move origin to pen...
    ctx.translate(0, -length);
    // ...and rotate, ready for next arm
    ctx.rotate(-(Math.PI * 6 / 10));
}
// last line to connect things up
ctx.lineTo(0, length);
ctx.closePath();
// stroke the path, you could also .fill()
ctx.stroke();