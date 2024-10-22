import './WorkExperience.css';

export const WorkExperience = () => {
  return (
    <div className='work-experience-wrapper'>
      <h2>Work Experience</h2>
      <form>
        <label htmlFor='company-name'>Company Name:</label>
        <input type='text' required />
        <label htmlFor='position-title'>Position Title:</label>
        <input type='text' required />
        <label htmlFor='responsibilities'>Responsibilities:</label>
        <textarea></textarea>
        <label htmlFor='date-from'>Date From:</label>
        <input type='text' required />
        <label htmlFor='date-until'>Date Until:</label>
        <input type='text' id='date-until' />
      </form>
    </div>
  );
};
