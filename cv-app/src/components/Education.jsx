import './Education.css';
import { EducationForm } from './EducationForm';

export const Education = ({
  handleEducationInfoChange,
  addEducationEntry,
  educationInfo,
  removeEducationEntry,
  isResumeOpen,
}) => {
  return (
    <div
      className='education-wrapper'
      style={{ display: isResumeOpen ? 'none' : 'block' }}
    >
      <h2>Education</h2>
      {educationInfo.map((form) => {
        return (
          <EducationForm
            key={form.id}
            id={form.id}
            isInitial={form.isInitial}
            handleEducationInfoChange={handleEducationInfoChange}
            addEducationEntry={addEducationEntry}
            removeEducationEntry={removeEducationEntry}
          />
        );
      })}
    </div>
  );
};
