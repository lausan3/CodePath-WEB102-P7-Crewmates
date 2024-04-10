import { Link } from "react-router-dom"
import { DBData } from "../interfaces/interfaces"


const AgentCard = ({id, name, description, role, color}: DBData) => {
  return (
    <Link className='card-link' to={`/list/${id}`}>
      <section className={`card-section ${color}`}>
        <h2>{name}</h2>
        <h3>{description}</h3>
        <h3>Role: {role}</h3>
      </section>
    </Link>
  )
}

export default AgentCard