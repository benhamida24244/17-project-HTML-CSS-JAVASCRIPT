const ThisYear = document.getElementById('Year');
const increaceBtn = document.getElementById('IncreaseBtn');
const deacriseBtn = document.getElementById('DecreaseBtn');
const IsLeapYearText = document.getElementById('result');
let Year = new Date().getFullYear();
ThisYear.innerHTML = Year.toString();
const BackgroundScreen = document.getElementById('container');
const Circle = document.querySelectorAll('.circle');
const Midcircle = document.querySelectorAll('.mid-circle');
const Dashbord = document.getElementById('class1');
function IsLeapYear(year) {
    return (year % 4 === 0 && year % 100!== 0) || year % 400 === 0;
}

function UpdateStateYear(Year) {
    if (IsLeapYear(Year)) {
        IsLeapYearText.textContent = "Is a Leap Year";
        BackgroundScreen.style.backgroundColor = "rgb(159, 237, 163)";
        Dashbord.style.backgroundColor = "rgb(159, 237, 163)";
        UpdateBtn(Year);
    } else {
        IsLeapYearText.textContent = "Is Not a Leap Year";
        BackgroundScreen.style.backgroundColor = "rgb(227, 123, 149)";
        Dashbord.style.backgroundColor = "rgb(227, 123, 149)";
        UpdateBtn(Year);
    }
}

function UpdateBtn(Year) {
    if (IsLeapYear(Year)) {
        // For Each
        Circle.forEach((circle , index) => {
            setTimeout(() => {
                circle.style.animation = "slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
                circle.style.backgroundColor = "rgb(111, 237, 130)";  
                Midcircle[index].style.backgroundColor = "rgba(76, 198, 57, 0.669)"; 
            }, index*200);
            
        });
    }
else {
    // For Each
        Circle.forEach((circle , index) => {
            setTimeout(() => {
            circle.style.animation = "slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
            circle.style.backgroundColor = "rgb(221, 81, 109)";  
            Midcircle[index].style.backgroundColor = "rgba(133, 43, 61, 0.598)"; 
            }, index*200);
            
        });
    
}
}
increaceBtn.addEventListener('click', () => {
    Year++;
    ThisYear.innerHTML = Year.toString();
    UpdateStateYear(Year);
});

deacriseBtn.addEventListener('click', () => {
    Year--;
    ThisYear.innerHTML = Year.toString();
    UpdateStateYear(Year);
});


UpdateStateYear(Year);