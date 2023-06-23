window.addEventListener("DOMContentLoaded", () => {
    const secondHand = document.querySelector(".second-hand");
    const minHand = document.querySelector(".min-hand");
    const hourHand = document.querySelector(".hour-hand");
    const deg = 6;
    
    setInterval(() => {
        const setDate = new Date();
        
        let seconds = setDate.getSeconds() * deg;
        let minutes = setDate.getMinutes() * deg;
        let hour = setDate.getHours() * 30;
        
        secondHand.style.transform = `rotateZ(${seconds}deg)`;
        minHand.style.transform = `rotateZ(${minutes}deg)`;
        hourHand.style.transform = `rotateZ(${(hour) + (minutes/12)}deg)`;
    })

    // function setClock() {
    //     const setDate = new Date();

    //     let seconds = setDate.getSeconds() * deg;
    //     let minutes = setDate.getMinutes() * deg;
    //     let hour = setDate.getHours() * 30;

    //     secondHand.style.transform = `rotateZ(${seconds}deg)`;
    //     minHand.style.transform = `rotateZ(${minutes}deg)`;
    //     hourHand.style.transform = `rotateZ(${(hour) + (minutes/12)}deg)`;
    // }
    // setInterval(setClock);
});
