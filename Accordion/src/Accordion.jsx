import { useState } from "react";

const Accordion = ({question}) => {
    const [active, setActive] = useState(false)

    function showDescription() {
        setActive((active) => !active)
    }

    return(
       
      <section>
        <div className=" "> {question.title}
            <button>+</button>
            
        </div>
      </section>
    )
}

export default Accordion;