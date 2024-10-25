import './WorkExperience.css';

export const WorkExperience = ({ handleWorkInfoChange }) => {
  return (
    <div className='work-experience-wrapper'>
      <h2>Work Experience</h2>
      <form>
        <label htmlFor='company-name'>Company Name:</label>
        <input
          type='text'
          name='companyName'
          onChange={handleWorkInfoChange}
          required
        />
        <label htmlFor='position-title'>Position Title:</label>
        <input
          type='text'
          name='positionTitle'
          onChange={handleWorkInfoChange}
          required
        />
        <label htmlFor='responsibilities'>Responsibilities:</label>
        <textarea
          name='responsibilites'
          onChange={handleWorkInfoChange}
        ></textarea>
        <label htmlFor='date-from'>Date From:</label>
        <input
          type='text'
          name='dateFrom'
          onChange={handleWorkInfoChange}
          required
        />
        <label htmlFor='date-until'>Date Until:</label>
        <input
          type='text'
          name='dateUntil'
          id='date-until'
          onChange={handleWorkInfoChange}
          required
        />
      </form>
    </div>
  );
};
