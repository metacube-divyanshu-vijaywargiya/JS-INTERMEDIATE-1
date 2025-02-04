function drawFace() {
    const canvas = document.getElementById('smileyCanvas');
    const ctx = canvas.getContext('2d');

    // Drawing face circle
    ctx.beginPath();
    ctx.arc(100, 100, 80, 0, Math.PI * 2); //arc(x, y, radius, startAngle, endAngle)
    ctx.stroke();

    // Drawing both eyes
    // Left eye
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(70, 80); 
    ctx.arc(70, 80, 10, 0, Math.PI * 2); 
    ctx.stroke();

    // Right eye
    ctx.beginPath();
    ctx.moveTo(130, 80); 
    ctx.arc(130, 80, 10, 0, Math.PI * 2); 
    ctx.stroke();

    // Drawing glasses
    ctx.beginPath();
    ctx.moveTo(60, 80); 
    ctx.lineTo(140, 80);
    ctx.stroke();

    // Drawing smile
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI);
    ctx.stroke();
}

drawFace();