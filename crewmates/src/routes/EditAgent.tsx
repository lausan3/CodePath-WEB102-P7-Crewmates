import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";

import { AgentData } from "../interfaces/interfaces";
import AgentForm from "../components/AgentForm";
import { handleChange, handleOptionChange } from "../interfaces/utils";

const EditAgent = () => {
  const params = useParams();
  const agentId = params.id;
  const [formData, setFormData] = useState<AgentData>({ name: "", description: "", role: "" });
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
        const { name, description, role } = data[0];
        setFormData({ name: name, description: description, role: role })
      }
    }

    fetchData().catch(console.error);
  }, []);

  const editAgent = async () => {
    await supabase
      .from('Agents')
      .update(formData)
      .eq('id', agentId);
  }

  const deleteAgent = async () => {
    await supabase
      .from('Agents')
      .delete()
      .eq('id', agentId)
  }

  return (
    <div className="main-ctn">
      <AgentForm
        data={formData}
        selectedOption={selectedOption}
        handleChange={(event) => handleChange(event, setFormData)}
        handleOptionChange={(event) => handleOptionChange(event, setSelectedOption)}
        submit={editAgent}
      />
      <button 
        className="edit-deletebtn"
        onClick={deleteAgent}
      />Delete Agent
    </div>
  )
}

export default EditAgent