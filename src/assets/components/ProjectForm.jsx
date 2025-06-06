import useState from 'react';
import MilestoneForm from './MilestoneForm';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
function ProjectForm() {
  //Form Data
  const [projName, setName] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(1);
  const [interval, setInterval] = useState('day');
  const [projDate, setProjDate] = useState('');
  const [milestones, setMilestones] = useState([]);

  //Navigation Data
  const navigate = useNavigate();

  const cancelForm = () => {
    const confirmed = window.confirm('Are you sure you want to cancel and discard all changes?');
    if (confirmed) {
      setName('');
      setDescription('');
      setDuration('');
      setInterval('day');
      setProjDate('');
      setMilestones('');
    }
    //Redirect to home page
    navigate('/');
  };
  const createProject = (e) => {
    e.preventDefault();
    const project = {
      id: uuid(),
      projName,
      description,
      estimate: { value: +duration, interval },
      projDate,
      milestones: milestones,
      createdAt: new Date().toISOString(),
    };
    try {
      window.api.saveProject(project);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form onSubmit={createProject}>
      <div>
        <label htmlFor='proj-name'>Project Name</label>
        <input
          type='text'
          id='proj-name'
          name='proj-name'
          value={projName}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='proj-description'>Description</label>
        <input
          type='text'
          id='proj-name'
          name='proj-name'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='proj-duration'>How Long Will it Take?</label>
        <input
          type='number'
          id='proj-duration'
          name='proj-duration'
          min='1'
          max='100'
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <select
          id='duration-interval'
          value={interval}
          onChange={(e) => setInterval(e.target.value)}
        >
          <option value='minute'>Min</option>
          <option value='hour'>Hour</option>
          <option value='day'>Day</option>
          <option value='week'>Week</option>
          <option value='month'>Month</option>
          <option value='year'>Year</option>
        </select>
      </div>
      <div>
        <label htmlFor='proj-date'>Complete by</label>
        <input
          type='datetime-local'
          name='proj-date'
          id='proj-date'
          value={projDate}
          onChange={(e) => setProjDate(e.target.value)}
        />
      </div>
      <MilestoneForm milestones={milestones} setMilestones={setMilestones} />
      <div>
        <button type='button' onClick={cancelForm}>
          Cancel
        </button>
        <button type='submit'>Create</button>
      </div>
    </form>
  );
}

export default ProjectForm;
