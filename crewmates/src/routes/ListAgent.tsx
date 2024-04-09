import { useState, useEffect } from "react"
import { supabase } from "../client"
import AgentCard from "../components/AgentCard";
import { DBData } from "../interfaces/interfaces";

const ListAgent = () => {
  const [agentData, setAgentData] = useState<DBData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

    setIsLoading(false);
  }, [])

  useEffect(() => {
    console.log(agentData);
  }, [agentData]);

  if (isLoading) {
    return (
      <div className="main-ctn">
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <div className="main-ctn">
      <h3>List</h3>
      <div className="center-box">
        <div className="list-ctn">
          {
            
            agentData.length > 0 ? agentData.map( (agent, index) => {
              return (
                <AgentCard 
                key={index}
                {...agent}
                />
              )
            }) 
            :
            null
            // <p>No data...</p>
          }
        </div>
      </div>
    </div>
  )
}

export default ListAgent