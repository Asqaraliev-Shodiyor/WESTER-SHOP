import React, { useEffect, useState } from 'react'
import './home.css'
import axios from 'axios'
import Card from './../Card/Card'
import Loading from '../Loading/Loading'
let APi = 'https://backoffice.samarashop.uz/api/search/?q='


function Home() {
  const [maxsulotlar, setmaxsulotlar] = useState([])
  const [loading, setloading] = useState(true)
  console.log(maxsulotlar)
  useEffect(()=>{
    tovarlar()
  },[])
  function tovarlar(){
    axios.get(APi).then((res)=>{
      setmaxsulotlar(res.data)
      setloading(false)
    })

  }
  return (
    <div className='home-container'>
      <div className="home-wrapper">
  
            {
              loading ? <Loading /> :
              maxsulotlar.map((item,index)=>(
                <Card  item={item} key={index} />
              ))
              
              
            } 
        
          
          </div>
    </div>
  )
}

export default Home