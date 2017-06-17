import React from 'react'
import QuizList from '../component/QuizList'
import EndScene from '../component/EndScene'

const mockQuiz = [
    ['ไปไหน', 1],
    ['อะไรนะ', 1],
    ['มีฐานะ', 2],
    ['จริงจัง', 2]
]

class Game extends React.Component {
    constructor(){
        super()
        this.state = {
            score: 0,
            ended: false,
        }
    }

    componentWillMount(){
        console.log('will mount')
        //get quiz list
    }

    componentDidMount(){
        
    }

    render() {
        if(!this.state.ended){
            return (
                <QuizList
                    quizes={mockQuiz}
                    addScore={()=>{this.setState({score:this.state.score + 1})}}
                    endGame={()=>{this.setState({ended: true})}}
                />
            )
        }else{
            return (
                <EndScene score={this.state.score} />
            )
        }
    }
}

export default Game