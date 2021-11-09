function showMeSomething(texto) {
  alert(texto)
}

const linksSocialMedia = {
  github: 'JhoneCode',
  youtube: 'channel/UCPeEn8q5WBbY_KoZW8s8ApQ',
  facebook: 'joaopedro.castrovieira.3',
  instagram: 'joao_peedrocv',
  twitter: 'jhonyy_'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url) // promise
    .then(response => response.json()) // arrow function
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
