import Innlegg from './Innlegg'

function Aside({ innlegg }) {
  return (
    <aside>
      <h2>Siste innlegg</h2>
      {innlegg && innlegg.length > 0 ? (
        innlegg.map((innl) => (
          <Innlegg
            key={innl.id}
            id={innl.id}
            text={innl.text}
            title={innl.title}
            description={innl.description}
          />
        ))
      ) : (
        <p className="ingen">Ingen innlegg</p>
      )}
    </aside>
  )
}

export default Aside
