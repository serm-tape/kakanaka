import React from 'react'
import FBShareButton from './FBShareButton'

const EndScene = ({score}) => (
    <div style={{display:'flex', flex:'1 1 auto', flexFlow:'column', justifyContent:'center', alignItems:'center'}}>
        <h1>คุณได้ {score}/20 คะแนน</h1>
        <FBShareButton />
    </div>
)

export default EndScene
