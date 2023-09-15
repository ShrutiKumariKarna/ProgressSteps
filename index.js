const prevbtn = document.getElementById('prev-button');
const nextbtn = document.getElementById('next-button');
const progressBar = document.getElementById("myProgressBar");
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");
const circle4 = document.querySelector(".circle4");

let click = 0;

nextbtn.addEventListener("click", () => {
  if (click < 3) { 
    click++;
    if (click === 1) {
      circle2.classList.add("active");
      prevbtn.classList.remove("disable-button");
      progressBar.style.width = "35%";
    } else if (click === 2) {
      circle3.classList.add("active");
      progressBar.style.width = "68%";
    } else if (click === 3) {
      progressBar.style.width = "100%";
      circle4.classList.add("active");
      nextbtn.classList.add("disable-button");
    }
  }
});

prevbtn.addEventListener('click', () => {
  if (click > 0) {
    if (click === 3) {
      circle4.classList.remove("active");
      progressBar.style.width = "68%";
    } else if (click === 2) {
      circle3.classList.remove("active");
      progressBar.style.width = "35%";
    } else if (click === 1) {
      circle2.classList.remove("active");
      progressBar.style.width = "0%";
      prevbtn.classList.add("disable-button");
      nextbtn.classList.remove("disable-button");
    }
    click--;
  }
});
