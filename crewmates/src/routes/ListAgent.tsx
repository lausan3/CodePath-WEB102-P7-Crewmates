import { useState, useEffect } from "react"
import { supabase } from "../client"
import AgentCard from "../components/AgentCard";

const ListAgent = () => {
  const [agentData, setAgentData] = useState<any[]>([]);

  // Retrieve agentData from supabase
  useEffect( () => {
    const fetchData = async () => {
      const {data} = await supabase
        .from('Agents')
        .select()
        .order('created_at', { ascending: true });

      if (data === null) {
        console.error("Supabase returned no data!");
      } else {
        setAgentData(data);
      }
    }

    fetchData().catch(console.error);

    console.log(agentData);
  }, [])

  return (
    <div className="main-ctn">
      <h3>List</h3>
      {
        agentData.length > 0 ? agentData.map( (agent) => {
          return (
            <AgentCard data={agent} />
          )
        }
        )
        :
        <p>No data...</p>
      }
    </div>
  )
}

export default ListAgent