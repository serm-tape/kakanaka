import React from 'react'

const FBShareButton = () => (
    <button style={{backgroundColor:'blue', color:'white', border:0, padding:10, cursor:'pointer'}} onClick={callFBShareApi}>
        Share on Facebook
    </button>
)

function callFBShareApi(){
    FB.getLoginStatus( r => {
        if(r.status == 'connected'){
            feedFB()
        }else{
            FB.login( r => {
                if(r.status == 'connected'){
                    feedFB();
                }
            })
        }
    })
}

function feedFB(){
    FB.ui({
        method: 'feed',
        link: window.location.host,
        caption: 'คุณใช้คะค่ะ ได้ถูกต้องหรือยังคะ',
    }, (r) => {
        if(r && r.error_message) FB.AppEvents.logEvent('SHARE_ERROR')
        else{ FB.AppEvents.logEvent('SHARE_SUCCESS') }
    })
}

export default FBShareButton