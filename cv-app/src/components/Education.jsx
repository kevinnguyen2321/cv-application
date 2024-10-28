import { Children, useState } from 'react';
import './Education.css';
import { v4 as uuidv4 } from 'uuid';
import { EducationForm } from './EducationForm';

export const Education = ({ handleEducationInfoChange }) => {
  const [educationFormChildren, setEducationFormChildren] = useState([
    { id: 1 },
  ]);

  const addNewEducationForm = (e) => {
    setEducationFormChildren([...educationFormChildren, { id: uuidv4() }]);
  };

  const removeForm = (event, id) => {
    event.preventDefault();

    setEducationFormChildren(
      educationFormChildren.filter((form) => form.id !== id)
    );
  };
  return (
    <div className='education-wrapper'>
      <h2>Education</h2>
      {educationFormChildren.map((form) => {
        return (
          <EducationForm
            key={form.id}
            id={form.id}
            handleEducationInfoChange={handleEducationInfoChange}
            addNewEducationForm={addNewEducationForm}
            removeForm={removeForm}
          />
        );
      })}
    </div>
  );
};
