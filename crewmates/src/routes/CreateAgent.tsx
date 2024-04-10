import { useState } from 'react'
import { supabase } from '../client'
import { handleChange, handleOptionChange } from '../interfaces/utils';

import AgentForm from '../components/AgentForm';

const CreateAgent = () => {
  const [formData, setFormData] = useState({name: "", description: ""});
  const [selectedOption, setSelectedOption] = useState("");

  const createAgent = async (event: React.MouseEvent<HTMLInputElement>) => {
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

    await supabase
      .from('Agents')
      .insert(insertData)
      .select();

    alert("Successfully created an agent!");

    window.location.reload();
  }

  return (
    <div className="main-ctn">
      <AgentForm
        data={formData} 
        selectedOption={selectedOption} 
        handleChange={(event) => handleChange(event, setFormData)}
        handleOptionChange={(event) => handleOptionChange(event, setSelectedOption)} 
        submit={(event) => createAgent(event)}
      />
    </div>
  )
}

export default CreateAgent