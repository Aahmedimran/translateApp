import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useravatar from '../../../assets/useravatar.png'
import List from './List'
import './index.css'

const alphaBatList = [

  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'w',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]
const Translate = () => {
  const user = localStorage.getItem("username");
  const navigate = useNavigate();
  const [translateWord, setTranslateWord] = useState('')
  const [translaton, settranslaton] = useState([]);
  const [signList, setsignList] = useState([])
  const [inputvalue, setinputvalue] = useState([])




  
  // const checktranslation = () => {

  //   const listArray = []
  //   setsignList([])
  //   const updatevalue = inputvalue;

  //   updatevalue.split('').map((alphaBat) => {


  //     const index = alphaBatList.map.findindex(

  //       (alpha) => alpha.toLocaleLowerCase() === alphaBat.toLocaleLowerCase()
  //     )
  //     return listArray.push(List()[index])
  //   })
  //   setsignList(listArray)
  //   settranslaton(inputvalue)

  // }


const checktranslation = () => {

listArray = []
setsignList([])
console.log(signList,"signList")
const updatevalue = inputvalue;

updatevalue.split('').map((alphaBat) => {


const index = alphaBatList.map.findindex(

(alpha) => alpha.tolocaleLowerCase() ===alphaBat.toLocaleLowerCase()


return listArray.push(getList()[index])
})
setsignList(listArray)
  settranslaton(inputvalue)
getTranslation()
}











  return (
    <>
      <div className='translate_header'>
        <div>
          <h1>Lost in Translate</h1>
        </div>
        <div className='translate_header_chaild'>
          <div>
            <p className='translte_user'>{user}</p>
          </div>
          <div className='translate_user_image'>
            <img src={useravatar} alt="Avater" onClick={() => navigate('/profile')} />
          </div>
          <div><button onClick={() => {
            localStorage.clear("username")
            navigate('/login')
          }}>LogOut</button></div>
        </div>
      </div>
      <div className='translate_body'>

        <div className='translate_body_firstchaild'>
          <h1>Translate page</h1>
          <form onSubmit={
            (e) => {
              e.preventDefault()
              checktranslation()
            }
          }>
            <input
              value={translateWord}


              onChange={(e) => {
                setTranslateWord(e.target.value)
                setinputvalue(e.target.value)
              }
              }
              placeholder='Enter your name'
            />
            <div>
              <textarea></textarea>
            </div>
            <button className='transBtn'>
              Translate
            </button>
          </form>
        </div>
      </div>
      <div className='footer_translate'></div>

    </>
  )
}

export default Translate