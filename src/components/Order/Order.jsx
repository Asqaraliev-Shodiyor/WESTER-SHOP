import React, { useState } from 'react'
import './order.css'
import { Button, TextField } from '@mui/material'
import axios from 'axios'


function Order({ data }) {
    const Token = '6920223181:AAHp-DDm03fQhd3GfC_KpXhYtUzliLEwarE'
    const GroupID = -1002219676371
    const [ism, setIsm] = useState('')
    const [manzil, setManzil] = useState('')
    const [tel, setTel] = useState('')

    async function Order_Handle(el) {
        const formData = new FormData();
        formData.append('chat_id', GroupID);

        formData.append('photo', 'https://backoffice.samarashop.uz' + el.photo[0].photo);
        formData.append('caption', `📝 Maxsulot nomi: ${el.name} \n💲 Narxi: ${el.price_per_box * el.count} so'm  \n 🙍‍♂️ Ismi: ${ism} \n 📪 Manzil: ${manzil} \n 📞 Telefon nomer: ${tel} `)
        let res = await axios.post(`https://api.telegram.org/bot${Token}/sendPhoto`, formData)
        if (res) {
            console.log(res)
        }


    }

    function Ordering() {
        data.map(el => {
            Order_Handle(el)
        })
    }
    return (
        <div className='order-container'>
            <div className="row">
                <TextField onChange={(e) => setIsm(e.target.value)} className='inp' type='text' label='Ism' />
                <TextField onChange={(e) => setManzil(e.target.value)} className='inp' type='text' label='Manzil' />
                <TextField onChange={(e) => setTel(e.target.value)} className='inp' type='text' label='Telefon' />
            </div>
            <Button variant='contained' onClick={Ordering}>Buyurtma Berish</Button>
        </div>
    )
}

export default Order