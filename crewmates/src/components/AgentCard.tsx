interface AgentCardProps {
  data: any
}

const AgentCard = ({data}: AgentCardProps) => {
  return (
    <div className="main-ctn">
      <section className="card-section">
        <h2>{data.name}</h2>
        <h2>{data.description}</h2>
        <h2>Role: {data.role}</h2>
      </section>
    </div>
  )
}

export default AgentCard