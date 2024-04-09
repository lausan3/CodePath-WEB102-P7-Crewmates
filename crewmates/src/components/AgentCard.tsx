import { Link } from "react-router-dom"
import { DBData } from "../interfaces/interfaces"


const AgentCard = ({id, name, description, role}: DBData) => {
  return (
    <Link to={`/link/${id}`}>
      <section className="card-section">
        <h2>{name}</h2>
        <h3>{description}</h3>
        <h3>Role: {role}</h3>
      </section>
    </Link>
  )
}

export default AgentCard