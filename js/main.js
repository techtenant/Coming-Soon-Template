const countdown = document.querySelector('.countdown');

const launchDate = new Date('Jan 1, 2019 16:00:20').getTime();

const intvl = setInterval(() =>{
    const currentDate  =new Date().getTime();
    const duration = launchDate - currentDate;
    const daysCalc = Math.floor(duration/ (1000 * 60 * 60 * 24));
    const hourcalc = Math.floor((duration % (1000 * 60 * 60 * 24)) / 
    (1000 * 60 * 60));
    const minscalc = Math.floor(duration % (1000 * 60 * 60) / 
    (1000 * 60));
    const seccalc = Math.floor(duration % (1000 * 60) / 
    1000);
    countdown.innerHTML = `
    <div> ${daysCalc}<span>Days</span></div>
    <div> ${hourcalc}<span>Hours</span></div>
    <div> ${minscalc}<span>Minutes</span></div>
    <div> ${seccalc}<span>Seconds</span></div>
    `
    if(launchDate < 0){
        clearInterval(intvl);
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Launched';
    }
},1000);