import './Education.css';
import { EducationForm } from './EducationForm';

export const Education = ({
  handleEducationInfoChange,
  addEducationEntry,
  educationInfo,
  removeEducationEntry,
}) => {
  return (
    <div className='education-wrapper'>
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
