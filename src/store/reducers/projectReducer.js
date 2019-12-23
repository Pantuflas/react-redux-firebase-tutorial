const initState = {
    projects: [
        {id: 1, title: 'react redux firebase tutorial', content: 'A tutorial series on youtube to learn how to use react, redux, and firebase, together'},
        {id: 2, title: 'React Udemy course', content: 'A Udemy complete course on how to use React, from basics, passing through hooks, redux, life cycles, etc.'},
        {id: 3, title: 'Letter to Karen', content: 'A hand written letter to the love of my life, Karen, so I can wish her a very merry christmas and hopefully, express more of love to her.'}
    ]
}

const projectReducer = (state = initState, action) => {
    return state;
}

export default projectReducer;