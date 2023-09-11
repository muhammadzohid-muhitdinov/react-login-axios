import React from 'react'
import {  Spin } from 'antd'

const Loading = () => {
  return (
    <div className='loading'>
        <Spin size='large' />
        <h1>Loading ...</h1>
    </div>
  )
}

export default Loading