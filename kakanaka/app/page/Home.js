import React from 'react'
import {withRouter} from 'react-router-dom'

class Home extends React.Component {
    constructor(){
        super()
        this.state = {
            profile: null,
        }
    }
    render(){
        return(
            <div style={{flex:'1 1 auto', display:'flex', flexFlow:'column', justifyContent:'center', alignItems:'center'}}>
                <h2> ฝึกใช้ให้ถูกเถอะค่ะ </h2><br/>

                <button
                    style={{background:'blue', color:'white', padding:10, cursor:'pointer',border:0}}
                    onClick={loginFacebook.bind(this)}
                >
                    Login with Facebook
                </button>

            </div>
        )
    }
}

function loginFacebook(){
    FB.getLoginStatus( r => {
        if(r.status != 'connected'){
            FB.login( () => this.props.history.push('/game'))
        }else{
            this.props.history.push('/game')
        }
    })
}

export default withRouter(Home)