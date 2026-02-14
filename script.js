function abrirRegalo(){
    document.getElementById("inicio").style.display="none";
    document.getElementById("contenido").classList.remove("oculto");
}

/* PARTICULAS */

const canvas = document.getElementById("fx");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let particles = [];

function lluvia(){
    for(let i=0;i<120;i++){
        particles.push({
            x: Math.random()*canvas.width,
            y: Math.random()*canvas.height,
            vx:(Math.random()-0.5)*4,
            vy:(Math.random()-0.5)*4,
            size: Math.random()*4+1
        });
    }
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="white";

    particles.forEach(p=>{
        p.x += p.vx;
        p.y += p.vy;

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
        ctx.fill();
    });

    requestAnimationFrame(draw);
}

draw();
