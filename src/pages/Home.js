import React from 'react'

function Home() {
    return (
        <div>
            {process.env.REACT_APP_TEST}

            {console.log(process.env)}
        </div>
    )
}

export default Home
