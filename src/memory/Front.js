import React from 'react'
import {Link} from 'react-router-dom'

function Front() {
  return (
    <div>
        <div>
            <h1> How good's your memory?</h1>

            <p>Find all the pairs in <span>Least Time</span> & with minimum clicks</p>
          <Link to = '/memory'>Let's find out</Link>
        </div>
    </div>
  )
}

export default Front