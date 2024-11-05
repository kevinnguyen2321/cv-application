import './WorkExperience.css';

export const WorkForm = ({
  handleWorkInfoChange,
  addWorkEntry,
  removeWorkEntry,
  isInitial,
  id,
}) => {
  return (
    <form>
      <label htmlFor='company-name'>Company Name:</label>
      <input
        type='text'
        name='companyName'
        onChange={(e) => {
          handleWorkInfoChange(id, 'companyName', e.target.value);
        }}
        required
      />
      <label htmlFor='position-title'>Position Title:</label>
      <input
        type='text'
        name='positionTitle'
        onChange={(e) => {
          handleWorkInfoChange(id, 'positionTitle', e.target.value);
        }}
        required
      />
      <label htmlFor='responsibilities'>Responsibilities:</label>
      <textarea
        name='responsibilites'
        onChange={(e) => {
          handleWorkInfoChange(id, 'responsibilites', e.target.value);
        }}
      ></textarea>
      <label htmlFor='date-from'>Date From:</label>
      <input
        type='text'
        name='dateFrom'
        onChange={(e) => {
          handleWorkInfoChange(id, 'dateFrom', e.target.value);
        }}
        required
      />
      <label htmlFor='date-until'>Date Until:</label>
      <input
        type='text'
        name='dateUntil'
        id='date-until'
        onChange={(e) => {
          handleWorkInfoChange(id, 'dateUntil', e.target.value);
        }}
        required
      />

      <button className='add-button' onClick={addWorkEntry}>
        Add Work Experience
      </button>
      {!isInitial && (
        <button
          className='delete-button'
          onClick={() => {
            removeWorkEntry(id);
          }}
        >
          Delete
        </button>
      )}
    </form>
  );
};
