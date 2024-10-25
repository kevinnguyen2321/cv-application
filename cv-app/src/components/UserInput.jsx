import { useState } from 'react';
import { Education } from './Education';
import { GeneralInfo } from './GeneralInfo';
import { Resume } from './Resume';
import './UserInput.css';
import { WorkExperience } from './WorkExperience';

export const UserInput = () => {
  const [generalInfo, setGeneralInfo] = useState({
    name: 'Bob Smith',
    phoneNumber: 555,
    email: 'bob.smith@example.com',
    currentPosition: 'Graphic Designer',
    aboutMe: `As a Senior Graphic Designer with over [X] years of experience, I am passionate about turning creative concepts into visual stories that engage, inspire, and communicate with precision. My expertise spans across branding, digital design, and print media, where I’ve had the opportunity to lead design projects for both global brands and innovative startups.
    My design philosophy is rooted in a deep understanding of both aesthetics and functionality. I believe in creating designs that not only look stunning but also serve a clear purpose. From crafting compelling brand identities to designing user-centric web and mobile interfaces, I thrive in collaborative environments that push the boundaries of creativity.`,
  });
  const [educationInfo, setEducationInfo] = useState({
    schoolName: 'Oxford University',
    studyTitle: "Bachelor's in Graphic Designing, B.A",
    dateOfStudy: 'August 2015 - May 2019',
  });
  const [workInfo, setWorkInfo] = useState({
    companyName: 'Google',
    positionTitle: 'Lead Graphic designer',
    responsibilites:
      'Lead a team of junior designers in a collabrative setting',
    dateFrom: 'Aug 2018',
    dateUntil: 'November 2020',
  });

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

  const handleWorkInfoChange = (e) => {
    const workInfoCopy = { ...workInfo };
    workInfoCopy[e.target.name] = e.target.value;
    setWorkInfo(workInfoCopy);
  };
  return (
    <>
      <div className='main-content-wrapper'>
        <div className='input-info-wrapper'>
          <GeneralInfo handleGeneralInfoChange={handleGeneralInfoChange} />
          <Education handleEducationInfoChange={handleEducationInfoChange} />
          <WorkExperience handleWorkInfoChange={handleWorkInfoChange} />
        </div>

        <div className='rendered-resume'>
          <Resume
            generalInfo={generalInfo}
            educationInfo={educationInfo}
            workInfo={workInfo}
          />
        </div>
      </div>
    </>
  );
};
