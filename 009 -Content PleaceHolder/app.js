const Container = document.getElementById('container');
const ContainerWait = document.getElementById('container-wait');

setTimeout(() => {
    ContainerWait.classList.add('loading');
    Container.classList.remove('loading');
}, 3000);