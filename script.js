let quote = ["Dream big and dare to fail.", "There is no tomorrow.", "Start where you are." , "Character is power.", "Either you run the day or the day runs you." , "Self-doubt kills talent." , "Stay hungry. Stay foolish." , "Everything you imagine is real."];
let btn = document.querySelector('button');
let main = document.querySelector('main');
btn.addEventListener('click', function(){
    let x = Math.random()*100;
    let y = Math.random()*100;
    let r = Math.floor(Math.random()*360);
    let f = Math.floor(Math.random()*50);
    let motive = quote[Math.floor(Math.random()*quote.length)]
    let p = document.createElement('p');
    p.innerHTML = motive;
    p.style.left = x+"%";
    p.style.top = y+"%";
    p.style.rotate = r+"deg";
    p.style.fontSize = f+"px";
    p.style.position = 'absolute';
    main.appendChild(p);
})
