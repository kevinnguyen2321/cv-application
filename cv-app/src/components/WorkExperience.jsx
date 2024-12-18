import './WorkExperience.css';
import { WorkForm } from './WorkForm';

export const WorkExperience = ({
  handleWorkInfoChange,
  workInfo,
  addWorkEntry,
  removeWorkEntry,
  isResumeOpen,
}) => {
  return (
    <div
      className='work-experience-wrapper'
      style={{ display: isResumeOpen ? 'none' : 'block' }}
    >
      <h2>Work Experience</h2>
      {workInfo.map((entry) => {
        return (
          <WorkForm
            key={entry.id}
            id={entry.id}
            handleWorkInfoChange={handleWorkInfoChange}
            addWorkEntry={addWorkEntry}
            removeWorkEntry={removeWorkEntry}
            isInitial={entry.isInitial}
          />
        );
      })}
    </div>
  );
};
