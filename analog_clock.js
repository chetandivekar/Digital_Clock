setInterval(() => {
    d = new Date(); 
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; 
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
    let second = document.getElementById('second')
    let minute = document.getElementById('minute')
    let hour = document.getElementById('hour')
    
    minute.style.transform = `rotate(${min_rotation}deg)`;
    hour.style.transform = `rotate(${hr_rotation}deg)`;

}, 1000);

