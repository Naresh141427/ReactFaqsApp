import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

const intialFaqsList = [
  {
    id: 0,
    questionText: 'What is IRC?',
    answerText:
      'IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.',
    isButtonClicked: false,
  },
  {
    id: 1,
    questionText: 'What is the medium of instruction?',
    answerText:
      'The courses would be delivered in English and Telugu. The program will be available in more vernacular languages soon.',
    isButtonClicked: false,
  },
  {
    id: 2,
    questionText:
      'Is there an EMI option to pay the fee for CCBP Tech 4.0 Intensive?',
    answerText:
      'Yes, EMI support is available for credit cards. Please select EMI option while making payment for more information.',
    isButtonClicked: false,
  },
  {
    id: 3,
    questionText: 'How will my doubts be cleared? What is the mechanism?',
    answerText:
      'You can ask your doubts in the discussions section and course mentor will answer them. You can also see the doubts asked by other students.',
    isButtonClicked: false,
  },
]

class Faqs extends Component {
  state = {faqsList: intialFaqsList}

  showingAnswer = id => {
    this.setState(prevState => ({
      faqsList: prevState.faqsList.map(each => {
        if (each.id === id) {
          return {...each, isButtonClicked: !each.isButtonClicked}
        }
        return each
      }),
    }))
  }

  render() {
    const {faqsList} = this.state
    return (
      <div className="app-container">
        <div className="app-card-container">
          <h1 className="header">FAQs</h1>
          <ul className="faqs-list-container">
            {faqsList.map(each => (
              <FaqItem
                faqsList={each}
                key={each.id}
                showingAnswer={this.showingAnswer}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
