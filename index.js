function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')) {
        img.setAttribute('src','./assets/avatar.png')
        document.querySelector('p').innerText = '@leocapeccir'

    } else {
        img.setAttribute('src','./assets/avatar1.png')
        document.querySelector('p').innerText = '@maikybrito'

    }
}
