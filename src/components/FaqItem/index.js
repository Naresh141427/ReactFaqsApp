import './index.css'

const FaqItem = props => {
  const {faqsList, showingAnswer} = props
  const {id, questionText, answerText, isButtonClicked} = faqsList

  const onClickingButton = () => {
    showingAnswer(id)
  }
  const answer = isButtonClicked ? answerText : ''

  const imageUrl = isButtonClicked
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const imageAltText = isButtonClicked ? 'minus' : 'plus'

  return (
    <li className="faq-item">
      <div className="question-container">
        <h1 className="question">{questionText}</h1>
        <button type="button" className="button" onClick={onClickingButton}>
          <img src={imageUrl} alt={imageAltText} />
        </button>
      </div>
      {isButtonClicked ? (
        <div>
          <hr className="horizontal-rule" />
          <p className="answer-text">{answer}</p>
        </div>
      ) : (
        ''
      )}
    </li>
  )
}

export default FaqItem
