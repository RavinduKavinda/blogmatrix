import React from 'react'
import './footer.css'

export const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <>
        <footer className='footer'>
            <div className="container flex">
                <p>
                Copyright &copy; {currentYear} BLOGMATRIX. All rights reserved. 
                This digital garden is cultivated with love and creativity. Unauthorized blooming is not allowed. 
                </p>
                <div className="owner">REACT</div>
            </div>
        </footer>
    </>
  )
}
