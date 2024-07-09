const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const lines = document.querySelectorAll('.line');
const progressTracker = document.querySelectorAll('.Num-progress');
let counter = 0;

const UpdateButton = () => {
    if (counter == 0) {
        nextBtn.classList.remove('disabled');
        prevBtn.classList.add('disabled');
    }
    else if (counter == 1 || counter == 2) {
        nextBtn.classList.remove('disabled');
        prevBtn.classList.remove('disabled');
    }
    else if (counter == 3) {
        nextBtn.classList.add('disabled');
        prevBtn.classList.remove('disabled');
    }
}
const Updateprogress = () => {
    progressTracker.forEach((item, index) => {
        if (index < counter) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    lines.forEach((item, index) => {
        if (index < counter) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}
nextBtn.addEventListener('click', () => {
  if (counter < 3) counter++;
  UpdateButton();
  Updateprogress();
});

prevBtn.addEventListener('click', () => {
  if (counter > 0) counter--;
  UpdateButton();
  Updateprogress();
});


UpdateButton();
Updateprogress();