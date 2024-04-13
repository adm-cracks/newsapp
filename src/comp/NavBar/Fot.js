import React from 'react'


function Fot() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-sm-4 m-auto bg-secondary text-center p-3'>
            &copy; {new Date().getFullYear()}Copyright :<a href='https://admz.in/' className='text-white'>adarsh</a>
            </div>
        </div>
    </div>
  )
}

export default Fot