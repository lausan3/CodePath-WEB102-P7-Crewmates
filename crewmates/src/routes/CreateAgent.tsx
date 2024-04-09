import { useState } from 'react'
import { supabase } from '../client'
import AgentForm from '../components/AgentForm';

const CreateAgent = () => {
  const [formData, setFormData] = useState({name: "", description: ""});
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setFormData( (prev) => {
        return {
            ...prev,
            [name]:value,
        }
    })
  }

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
  }

  return (
    <div className="main-ctn">
      <AgentForm data={formData} selectedOption={selectedOption} handleChange={handleChange} handleOptionChange={handleOptionChange} createAgent={createAgent}/>
    </div>
  )
}

export default CreateAgent