import Card from "../../Components/card/Card"
import { FaPlus } from "react-icons/fa6";

const FaQuestion = ({faq}) => {
  return (
  <Card className='faq'>
<div>
    <h5 className="faq__question">
{faq.question}

    </h5>
    <button className="faq__icon"><FaPlus /></button>
</div>
<p className="faq__answer">{faq.answer}</p>
  </Card>
  )
}

export default FaQuestion
