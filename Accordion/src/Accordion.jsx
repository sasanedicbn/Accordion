import { useState } from "react";

const Accordion = ({question}) => {
    const [active, setActive] = useState(false)
    return(
       
      <section>
        <div className=" "> {question.title}
            <button>+</button>
            
        </div>
      </section>
    )
}

export default Accordion;