const Texteara = document.getElementById('choices');
const tagsElements = document.getElementById('tric');

const createTags = (input) => {
    const tags = input.split(',').filter((tag) => tag.trim() !== '').map((tag) => tag.trim());
    tagsElements.innerHTML = '';
    tags.forEach(tag => {
        const tagsElement = document.createElement('div');
        tagsElement.classList.add('word');
        tagsElement.innerText = tag;
        tagsElements.appendChild(tagsElement);
    });
};


const Highlight = (tag) => {
    tag.classList.add('highlight');
}

const UNHighlight = (tag) => {
    tag.classList.remove('highlight');
}


const randoomTags = () => {
    const tags = tagsElements.querySelectorAll('.word');
    return tags[Math.floor(Math.random() *tags.length)];
}



const randomSelector = () => {
   const interval = setInterval(() => {
    const randomTag = randoomTags();
    Highlight(randomTag);
    setTimeout(() => {
        UNHighlight(randomTag);
    }, 100);
   } , 100);
   setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
        const randomTag = randoomTags();
    Highlight(randomTag);
    } , 100);
   } , 3000)
};



Texteara.focus();
Texteara.addEventListener('keyup', (e) => {
    createTags(e.target.value);
    if (e.key === 'Enter') {
        setTimeout(() => (e.target.value = ""), 10);
        randomSelector();
    }
});