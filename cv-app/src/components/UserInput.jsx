import { useState } from 'react';
import { Education } from './Education';
import { GeneralInfo } from './GeneralInfo';
import { Resume } from './Resume';
import './UserInput.css';
import { WorkExperience } from './WorkExperience';

export const UserInput = () => {
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState({});

  const handleGeneralInfoChange = (e) => {
    const generalInfoCopy = { ...generalInfo };
    generalInfoCopy[e.target.name] = e.target.value;
    setGeneralInfo(generalInfoCopy);
  };

  const handleEducationInfoChange = (e) => {
    const educationInfoCopy = { ...educationInfo };
    educationInfoCopy[e.target.name] = e.target.value;
    setEducationInfo(educationInfoCopy);
  };
  return (
    <>
      <div className='main-content-wrapper'>
        <div className='input-info-wrapper'>
          <GeneralInfo handleGeneralInfoChange={handleGeneralInfoChange} />
          <Education handleEducationInfoChange={handleEducationInfoChange} />
          <WorkExperience />
        </div>

        <div className='rendered-resume'>
          <Resume generalInfo={generalInfo} educationInfo={educationInfo} />
        </div>
      </div>
    </>
  );
};
