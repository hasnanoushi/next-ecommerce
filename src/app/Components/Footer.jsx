import './footer.css';
import React from 'react'

export default function Footer() {
  return (
    <div className='foot'>
        <div className='row' > 
        <div className='col-2'></div>
        <div className='col-2'>
            <ul className='ull'>
                <li>
Contact Us
                </li><li>About Us</li>

                <li>
                FAQ    
                </li>
               
            </ul>
        </div>
        <div className='col'></div><div className='col-2'>
        <ul className='ull'>
                <li>
Hasnazone Logistics
                </li><li>Cancellation</li>

                <li>
             Returns & Exchange   
                </li></ul></div>
               <div className='col'></div>
               <div className='col-2'> <ul className='ull'>
                <li>
Partners
                </li><li>Payments</li>

                <li>
               Services 
                </li>
               
            </ul></div>
           
            <div className='col-2'></div>
        </div>
    </div>
  )
}
