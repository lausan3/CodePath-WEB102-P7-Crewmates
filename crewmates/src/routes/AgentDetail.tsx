import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { supabase } from "../client";

import { AgentData } from "../interfaces/interfaces";

const AgentDetail = () => {
  const params = useParams();
  const [agentData, setAgentData] = useState<AgentData>({name: "", description: "", role: ""});
  const agentId = params.id;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await supabase
        .from("Agents")
        .select()
        .eq('id', agentId);

        console.log(data);

        if (data === null || data.length === 0) {
          console.error("Error fetching data from Agents");
          navigate('/notfound');
        } else {
          setAgentData(data[0]);
        }
    }

    fetchData().catch(console.error);
  }, []);

  return (
    <div className="main-ctn">
      <h2>{agentData.name}, {agentData.role}</h2>
      <h3>{agentData.description}</h3>
    </div>
  )
}

export default AgentDetail