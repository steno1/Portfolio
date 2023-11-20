import Card from "../../Components/card/Card";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";

const FaQuestion = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <Card className='faq' onClick={toggleAnswer}>
      <div>
        <h5 className="faq__question">{faq.question}</h5>
        <button className="faq__icon" >
          {showAnswer ? <FiMinus /> : < FiPlus />}
        </button>
      </div>
      {showAnswer && <p className="faq__answer">{faq.answer}</p>}
    </Card>
  );
};

export default FaQuestion;
