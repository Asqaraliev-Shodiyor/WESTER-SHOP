import React from 'react';
import { Divider, List, Typography } from 'antd';
import './cart.css'
import Paper from '@mui/material/Paper';
import Order from '../Order/Order';




export default function FolderList() {
  /*  */


  function jami_narxi(params) {
    if (data.length > 0) {
      let jami = data.map((item) => {
        return item.price_per_box * item.count
      })

      let reduced = jami.reduce((a, b) => {
        return a + b
      })

      return reduced

    } else {
      return '0'
    }
  }
  function jami_vazni(params) {
    if (data.length > 0) {
      let jami = data.map((item) => {
        return item.weight * item.count
      })

      let reduced = jami.reduce((a, b) => {
        return a + b
      })

      return reduced

    } else {
      return '0'
    }
  }
  let data = localStorage.getItem("savat") ? JSON.parse(localStorage.getItem("savat")) : []
  return (
    <div className="cart-container">
      <Divider orientation="left">Savatdagi mahsulotlar</Divider>
      <div className="carts-wrapper">
        <List
          size="large"
          bordered
          style={{ width: '70%' }}
          dataSource={data}
          renderItem={(item) =>
            <List.Item>
              <div>
                <img style={{ width: 50 }} src={'https://backoffice.samarashop.uz' + item?.photo[0]?.photo} />
                <p>{item.name}</p>
                <p>Qutidagi soni: {item.quantity_in_box} ta</p>
              </div>
              <div>
                <h3>{item.count} ta</h3>
                <h3>{item.price_per_box * item.count} so'm</h3>
              </div>
            </List.Item>}
        />
      <Paper elevation={2} style={{width: '30%'}} >
           <h1>Jami narxi: {jami_narxi()} so'm</h1>
          <h1>Jami og'irligi: {jami_vazni()} KG</h1>
          </Paper>
      </div>

      <div>
      </div>
      <Order data={data} />
    </div>




  );
}
