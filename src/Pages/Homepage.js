import React from 'react'

function Homepage(props) {
  console.log(props)
  return (
    <div>
      <h1>Welcome to the home {props.name} page</h1>
      <button className='btn btn-success' onClick={props.buttonevent}>Click</button>
    </div>
  )
}

export default Homepage
