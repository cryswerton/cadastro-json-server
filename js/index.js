// javascript for index.html
const container = document.querySelector('.blogs')

const renderPosts = async () => {
    let uri = 'http://localhost:3000/books'

    // res is the response object we got
    const res = await fetch(uri)
    const posts = await res.json()

    let template = ''
    posts.forEach( post => {
        template += `
            <div class="post">
                <h3>${post.name}</h3>
                <a href="/details.html?id=${post.id}">See more...</a>
            </div>
        `
    })

    container.innerHTML = template

}

// After the Content is fully loaded the function renderPosts is fired.
window.addEventListener('DOMContentLoaded', () => renderPosts())

