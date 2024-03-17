
const Accordion = ({question}) => {
    return(
       
      <section>
        <div className=" "> {question.title}
            <button>+</button>
        </div>
      </section>
    )
}

export default Accordion;