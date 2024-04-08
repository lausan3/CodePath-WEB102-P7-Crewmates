import { useState } from 'react'
import { supabase } from '../client'

const CreateAgent = () => {
  const [formData, setFormData] = useState({name: null, description: null});
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    console.log(selectedOption);
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

    if (formData.name) {
      insertData.name = formData.name;
    }

    if (formData.description) {
      insertData.description = formData.description;
    }

    if (selectedOption != "") {
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
      <form className='create-form'>
        <label htmlFor="title">Title</label><br />
        <input type="text" id="title" name="title" onChange={handleChange} /><br />
        <br/>

        <label htmlFor="description">Description</label><br />
        <textarea rows={5} cols={50} id="description" onChange={handleChange}>
        </textarea>
        <br/>
        
        <input
          type="radio"
          name="option"
          value="Duelist"
          checked={selectedOption === 'Duelist'}
          onChange={handleOptionChange}
        />
        Duelist
        <input
          type="radio"
          name="option"
          value="Initiator"
          checked={selectedOption === 'Initiator'}
          onChange={handleOptionChange}
        />
        Initiator
        <input
          type="radio"
          name="option"
          value="Controller"
          checked={selectedOption === 'Controller'}
          onChange={handleOptionChange}
        />
        Controller
        <input
          type="radio"
          name="option"
          value="Sentinel"
          checked={selectedOption === 'Sentinel'}
          onChange={handleOptionChange}
        />
        Sentinel

        <input type="submit" value="Submit" onClick={createAgent} />
      </form>
    </div>
  )
}

export default CreateAgent