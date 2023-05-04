import "./Phrase.css"
const Phrase = ({phrase,color}) => {
  return (
    <section 
    style={{backgroundColor:color}}

    className = "phrase_container">
        <p>{phrase}</p>

    </section>
  )
}

export default Phrase