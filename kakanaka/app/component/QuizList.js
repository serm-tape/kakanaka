import React from 'react'

class QuizList extends React.Component {
    constructor() {
        super()
        this.state = {
            currentQuiz: 0
        }
    }

    render() {
        const quizContent = this.props.quizes[this.state.currentQuiz]
        return (
            <Quiz
                text={quizContent[0]}
                correct={quizContent[1]}
                onAnswer={this.getNextQuiz.bind(this)}
            />
        )
    }

    getNextQuiz(e) {
        let nextQuiz = this.state.currentQuiz + 1
        if (nextQuiz >= this.props.quizes.length) {
            this.props.endGame()
        }else{
            this.setState({ currentQuiz: nextQuiz })
        }
        if(e.target.value == 'true'){
            this.props.addScore()
        }
    }
}

const choiceStyle = {
    cursor: 'hand',
    flex: '1 1 auto',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    border: '0',
    fontSize: 32
}

const Quiz = ({ text, correct, onAnswer }) => (
    <div style={{flex:'1 1 auto', display:'flex', flexFlow:'column'}}>
        <h1 style={{ backgroundColor: '#272D38', color:'#FFAE57', margin: 0 }}>{text}</h1>
        <button value={(correct==1)} onClick={onAnswer} style={{...choiceStyle, color:'#FF3333'}}> คะ </button>
        <button value={(correct==2)} onClick={onAnswer} style={{...choiceStyle, color:'#FF3333'}}> ค่ะ </button>
    </div>
)

export default QuizList
