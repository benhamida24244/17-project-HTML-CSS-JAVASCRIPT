const InputUser = document.getElementById('input-user');
const Api_link = 'https://api.github.com/users';
const NotFoundInfo = document.querySelector('.No-Info');
const RepoUl = document.getElementById('Repo-Example');
const GetInfo = document.querySelector('.getInfo'); // تحديد GetInfo خارج الدالة

InputUser.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const user = e.target.value;
        getApiDetails(`${Api_link}/${user}`).then(userData => {
            if (userData) {
                getRepoDetails(`${Api_link}/${user}/repos`).then(repoData => {
                    showUserDetails(userData, repoData);
                });
            }
        });
        e.target.value = "";
    }
});

function showUserDetails(userData, repoData) {
    GetInfo.classList.add('active'); 
    NotFoundInfo.classList.remove('active');

    let j = ``;
    repoData.slice(0, 4).forEach((item) => { 
        j += `<a href="${item.html_url}">${item.name}</a><br>`;
    });
    GetInfo.innerHTML = `
        <img src="${userData.avatar_url}" alt="" id="Image-Account">
        <div class="info-profile">
            <h1 id="Name-Account">${userData.name}</h1>
            <p id="Description-Account">${userData.bio}</p>
            <div class="infoAudience">
                <div id="followers">
                    <p>${userData.followers}</p>
                    <p><b>Followers</b></p>
                </div>
                <div id="following">
                    <p>${userData.following}</p>
                    <p><b>Following</b></p>
                </div>
                <div id="Repos">
                    <p>${userData.public_repos}</p>
                    <p><b>Repos</b></p>
                </div>
            </div>
            <div id="Repo-Example">
                ${j}
            </div>
        </div>
    `;
}

async function getApiDetails(api) {
    try {
        const response = await fetch(api);
        const data = await response.json();
        
        if (response.status === 404) {
            GetInfo.classList.remove('active');
            NotFoundInfo.classList.add('active');
        } else {
            return data;
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getRepoDetails(api) {
    try {
        const response = await fetch(api);
        const repoData = await response.json();
        return repoData;
    } catch (error) {
        console.error('Error:', error);
    }
}
