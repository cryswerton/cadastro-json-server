// javascript for details.html
const id = new URLSearchParams(window.location.search).get('id')
const container = document.querySelector('.details')
const deleteBtn = document.querySelector('.delete')

const renderDetails = async () => {
    const res = await fetch('http://localhost:3000/books/' + id)
    const post = await res.json()
    
    const template = `
        <h2>${post.name}</h2>
        <h3>${post.author}</h3>
        <h3>${post.score}</h3>
        <h3>${post.finish_reading_date}</h3>
    `

    container.innerHTML = template

}

deleteBtn.addEventListener('click', async (e) => {
    const res = await fetch('http://localhost:3000/books/' + id, {
        method: 'DELETE'
    })
    window.location.replace('/index.html')
})

window.addEventListener('DOMContentLoaded', () => renderDetails())



