import React from 'react'

const news = [
    'This is the test site for the new Faire Web Page.',
    'The <b>KMOS</b> will be able modify this section, but not yet.',
    'In the <b style="color:green">Notes</b> section below, I will update with the features that have been added.',
    'In the <b style="color:green">Next</b> section below, I will update with the features I will be working on.',
    'Please send any comments, questions or problems to <a href="mailto:master_vorlin@yahoo.com">Vorlin</a>.'
]

let count = 0
const News = () => (
    <div className='ans-box'>
        {news.map(text => (
            <div key={count++} dangerouslySetInnerHTML={{__html: text}}></div>
        ))} 
    </div>
)

export default News