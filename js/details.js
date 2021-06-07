// javascript for details.html
const id = new URLSearchParams(window.location.search).get('id')
const container = document.querySelector('.details')

const renderDetails = async () => {
    const res = await fetch('http://localhost:3000/books/' + id)
    const post = await res.json()
    
    const template = `
        <h2>${post.name}</h2>
        <h3>${post.author}</h3>
        <h3>${post.score}</h3>
        <h3>${post.finished_reading_date}</h3>
    `

    container.innerHTML = template

}

window.addEventListener('DOMContentLoaded', () => renderDetails())



