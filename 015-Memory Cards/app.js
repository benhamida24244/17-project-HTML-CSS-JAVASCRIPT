const AddnewCardBtn = document.querySelector('.addNewCard');
const AddNewCardPage = document.querySelector('.add-newCard');
const CloseBtn = document.querySelector('.clse-btn');
const MyCard = document.querySelector('.flash-cards');
const Question = document.querySelector('.Question');
const Answer = document.querySelector('.Answer');
const FormInfo = document.getElementById('add-card-form');
const QuestionForm = document.getElementById('add-card-question');
const AnswerForm = document.getElementById('add-card-answer');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const InfoCard = document.querySelector('.infoCard');
const fLipBtn = document.querySelector('.btn-flipp');
const ClearCard = document.querySelector('.clear-cards');
let Isfleip = false;
let Cards = [];
let currentIndex = 0;



function  updateCardDisplay() {
    if (Cards.length > 0) {
      const CurrentCard = Cards[currentIndex];
      Question.textContent = CurrentCard.question;
      Answer.textContent = CurrentCard.answer;
      Question.classList.add('showing');
      Answer.classList.remove('showing');
      InfoCard.textContent = `${currentIndex + 1}/${Cards.length}`;  
    }  
      else
      {
      Question.textContent = 'No Card Found';
      Answer.textContent = '';
      InfoCard.textContent = '0/0';

      }
}



MyCard.addEventListener('click', ()=> {
if (Isfleip) {
    MyCard.classList.add('flip-horizontal-top');
    Answer.classList.add('flip-horizontal-top');
    fLipBtn.style.display = 'none';
    Question.classList.remove('showing');
    Answer.classList.add('showing');
}
else {
    MyCard.classList.remove('flip-horizontal-top');
    Answer.classList.remove('flip-horizontal-top');
    fLipBtn.style.display = 'block';
    Question.classList.add('showing');
    Answer.classList.remove('showing');
}
Isfleip =!Isfleip;
});

AddnewCardBtn.addEventListener('click', () => {
AddNewCardPage.classList.add('show');
});


CloseBtn.addEventListener('click', () => {
    AddNewCardPage.classList.remove('show');    
});

FormInfo.addEventListener('submit', (e) => {
    e.preventDefault();
      const QuestionData = QuestionForm.value.trim();
      const AnswerData = AnswerForm.value.trim();
      if (QuestionData && AnswerData) {
        Cards.push({ question : QuestionData, answer : AnswerData});
        QuestionForm.value = '';
        AnswerForm.value = '';
        AddNewCardPage.classList.remove('show');
        updateCardDisplay();
      }
});


leftBtn.addEventListener('click', () => {
     if (currentIndex > 0) {
        currentIndex--;
        updateCardDisplay();
     }
});

rightBtn.addEventListener('click', () => {
 if (currentIndex < Cards.length - 1) {
    currentIndex++;
    updateCardDisplay();
 }
});

ClearCard.addEventListener('click', () => {
 Cards = [];
 currentIndex = 0;
 updateCardDisplay();
});
updateCardDisplay();