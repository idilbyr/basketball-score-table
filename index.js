let homeScr= document.getElementById('home-scr');
let guestScr= document.getElementById('guest-scr');
let homeFlt= document.getElementById('home-flt');
let guestFlt= document.getElementById('guest-flt');
let period= document.getElementById('period');
let homescr=0;
let guestscr=0;

//increment functions of home
function incrementHome1() {
   homescr++;
    homeScr.innerText=homescr;
}
function incrementHome2() {
    homescr+=2;
    homeScr.innerText=homescr;
}
function incrementHome3() {
    homescr+=3;	
    homeScr.innerText=homescr;
}

//increment functions of guest
function incrementGuest1() {
    guestscr++;
    guestScr.innerText=guestscr;
}
function incrementGuest2() {
    guestscr+=2;
    guestScr.innerText=guestscr;
}function incrementGuest3() {
    guestscr+=3;
    guestScr.innerText=guestscr;
}

//increment functions of home faults and guests
function incrementFaulsGuest() {
    guestFlt.innerText++;
}
function incrementFaulsHome() {
    homeFlt.innerText++;
}

//increment function of period
function incrementPeriod() {
    period.innerText++;
}

//timer function
function timer() {
    let minutes = 20;
    let seconds = 0;
    let timer = setInterval(() => {
      // Update the display
      document.getElementById('TimerDisplay').innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
      // Decrement seconds
      seconds--;
      if (seconds < 0) {
        seconds = 59;
        minutes--;
  
        // Reset to 20:00 if timer reaches 0:00
        if (minutes < 0) {
          minutes = 20;
        }
      }
  
      // Clear interval if we reach 0:00
      if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        // You could call `timer()` here to restart the timer
      }
  
    }, 1000); // Update every second
  }
  
  // Call the timer function to start the countdown
  timer(); 

//reset function
function new_game(){
    homescr=0;
    guestscr=0;
    homeScr.innerText=homescr;
    guestScr.innerText=guestscr;
    homeFlt.innerText=0;
    guestFlt.innerText=0;
    period.innerText=1;
    document.getElementById('TimerDisplay').innerHTML = `20:00`;
}