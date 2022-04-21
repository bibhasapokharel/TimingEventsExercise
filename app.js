//1
const div1 = document.querySelector(`#first`);
setTimeout(() =>{
    const p1 = document.createElement(`p`);
    p1.innerText = `Hi`;
    div1.append(p1);

    
}, 1000);


//2
const div2 = document.querySelector(`#timeout-nesting`);
setTimeout(() => {
    const p2 = document.createElement(`p`);
    p2.innerText = `One`;
    div2.append(p2);

    setTimeout(() => {
        const p3 = document.createElement(`p`);
        p3.innerText = `Two`;
        div2.append(p3);
    }, 1000);
}, 2000);


//3a

let count = 1;

const stop = setInterval(() => {
    console.log(count);
    count++;
}, 1000);

//3b

const btn = document.querySelector(`button`);

btn.addEventListener(`click`, () => {
    clearInterval(stop);
});

// B  O  N  U  S

//4




const p3 = document.createElement(`p`);
const div3 = document.querySelector(`#countdown`);
div3.append(p3);


const staringMinutes = 2;
let time = staringMinutes* 60;

const inter = setInterval(updateCountdown, 1000);

function updateCountdown () {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;  
 if (seconds > 0 && minutes > 0){
     p3.innerText = `Time left   ${minutes}:${seconds}s`;
 } else {
     p3.innerText = `TIME IS UP!`
    //  clearInterval(inter);
 }
  time--;
}

//create variable min and sec/ combine (another var) then then take that number and reduce the 

//seconds


// const timer = 2;// previous timer (to run func)
// let time = timer* 60;


// const countDown = setInterval(() => {
//     const min = Math.floor(time / 60);
//     let seconds = time % 60

//     if (time > 0 ){

//         p3.innerText = `Time left` + ` ` + min +`0:` + seconds+ `s`;
//       
        
//     } else {
//         p3.innerText = `${min}: ${seconds}`;
//         clearInterval(countDown);
//     }
//     time--;
// }, 1000);
