import React from 'react'
import { useNavigate } from 'react-router-dom'
import useravatar from '../../../assets/useravatar.png'
import './index.css'


const Profile = () => {

  const user = localStorage.getItem("username");
  const navigate = useNavigate();
  return (
    <>
      <div className='translate_header'>
        <div>
          <h1 onClick={()=>navigate('/translate')}>Lost in Translate</h1>
        </div>
        <div className='translate_header_chaild'>
          <div>
            <p>{user}</p>
          </div>
        <div className='translate_user_image'>
          <img src={useravatar} alt="Avater"  />
        </div>
        </div>
      </div>
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Profile