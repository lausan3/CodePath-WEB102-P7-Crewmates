import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../client";

import { AgentData } from "../interfaces/interfaces";
import AgentForm from "../components/AgentForm";
import { handleChange, handleOptionChange } from "../interfaces/utils";

const EditAgent = () => {
  const params = useParams();
  const agentId = params.id;
  const navigate = useNavigate();
  const [formData, setFormData] = useState<AgentData>({ name: "", description: "", role: "", color: ""});
  const [selectedOption, setSelectedOption] = useState("");

  // Fetch agent details for id
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from('Agents')
        .select()
        .eq('id', agentId);

      if (!data || data.length <= 0) {
        console.error("Couldn't find an entry for " + agentId) + ".";
      } else {
        const { name, description, role, color } = data[0];
        setFormData({ name: name, description: description, role: role, color: color})
      }
    }

    fetchData().catch(console.error);
  }, []);

  const editAgent = async (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();

    const insertData: { name?: string; description?: string; role?: string } = {};

    if (formData.name !== "") {
      insertData.name = formData.name;
    }

    if (formData.description !== "") {
      insertData.description = formData.description;
    }

    if (selectedOption !== "") {
      insertData.role = selectedOption;
    }

    console.log(insertData);

    await supabase
      .from('Agents')
      .update(insertData)
      .eq('id', agentId);

    navigate("/list");
  }

  const deleteAgent = async () => {
    await supabase
      .from('Agents')
      .delete()
      .eq('id', agentId);

    navigate("/list");
  }

  return (
    <div className="main-ctn">
      <div className="center-box column">
        <AgentForm
          data={formData}
          selectedOption={selectedOption}
          handleChange={(event) => handleChange(event, setFormData)}
          handleOptionChange={(event) => handleOptionChange(event, setSelectedOption)}
          submit={(event) => editAgent(event)}
          />
        <button 
          className="edit-delete-btn"
          onClick={deleteAgent}
          >Delete Agent</button>
      </div>
    </div>
  )
}

export default EditAgent