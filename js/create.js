// javascript for create.html

const form = document.querySelector('form')

const createPost = async (e) => {
    e.preventDefault()

    const doc = {
        name: form.name.value,
        author: form.author.value,
        score: form.score.value,
        finish_reading_date: form.finish_reading_date.value 
    }

    // Make a post request to add a new book by sending the doc object
    await fetch('http://localhost:3000/books', {
        method: 'POST',
        body: JSON.stringify(doc),
        headers: {'Content-Type': 'application/json'}
    })

    window.location.replace('/index.html')
}

form.addEventListener('submit', createPost)

