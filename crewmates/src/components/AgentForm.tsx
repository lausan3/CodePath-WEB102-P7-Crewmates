interface AgentFormProps {
  data: any;
  selectedOption: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleOptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  createAgent: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

const AgentForm = ({data, selectedOption, handleChange, handleOptionChange, createAgent}: AgentFormProps) => {
  return (
    <div className="main-ctn">
      <form className='create-form'>
        <label htmlFor="title">Title</label><br />
        <input type="text" id="title" name="name" value={data.name} onChange={handleChange} /><br />
        <br/>

        <label htmlFor="description">Description</label><br />
        <textarea rows={5} cols={50} name="description" value={data.description} onChange={handleChange}>
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

export default AgentForm