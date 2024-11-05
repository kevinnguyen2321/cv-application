import { useEffect, useState } from 'react';
import { Education } from './Education';
import { GeneralInfo } from './GeneralInfo';
import { Resume } from './Resume';
import './UserInput.css';
import { WorkExperience } from './WorkExperience';
import { v4 as uuidv4 } from 'uuid';

export const UserInput = () => {
  const [generalInfo, setGeneralInfo] = useState({
    name: 'Bob Smith',
    phoneNumber: 555,
    email: 'bob.smith@example.com',
    currentPosition: 'Graphic Designer',
    aboutMe: `As a Senior Graphic Designer with over [X] years of experience, I am passionate about turning creative concepts into visual stories that engage, inspire, and communicate with precision. My expertise spans across branding, digital design, and print media, where I’ve had the opportunity to lead design projects for both global brands and innovative startups.
    My design philosophy is rooted in a deep understanding of both aesthetics and functionality. I believe in creating designs that not only look stunning but also serve a clear purpose. From crafting compelling brand identities to designing user-centric web and mobile interfaces, I thrive in collaborative environments that push the boundaries of creativity.`,
  });

  const [educationInfo, setEducationInfo] = useState([
    {
      id: 1,
      schoolName: 'Oxford University',
      studyTitle: "Bachelor's in Graphic Designing, B.A",
      dateOfStudy: 'August 2015 - May 2019',
      isInitial: true,
    },
  ]);

  const [workInfo, setWorkInfo] = useState([
    {
      id: 1,
      companyName: 'Google',
      positionTitle: 'Lead Graphic designer',
      responsibilites: `
    - Led creative design projects from concept to completion, focusing on branding, digital media, and print design for diverse client portfolios.
    - Managed and mentored junior designers, providing guidance on best practices in visual design, typography, and layout for brand consistency and project success.
    - Collaborated cross-functionally with marketing and product teams to ensure cohesive branding and messaging across all digital channels.
    `,
      dateFrom: 'Aug 2018',
      dateUntil: 'November 2020',
      isInitial: true,
    },
  ]);

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('workInfo', JSON.stringify(workInfo));
  }, [workInfo]);

  //Logic for adding multiple education forms//
  // Save educationInfo to localStorage on every change
  useEffect(() => {
    localStorage.setItem('educationInfo', JSON.stringify(educationInfo));
  }, [educationInfo]);

  const addEducationEntry = () => {
    event.preventDefault();
    const newEntry = {
      id: uuidv4(),
      schoolName: '',
      studyTitle: '',
      dateOfStudy: '',
      isInitial: false,
    };
    setEducationInfo([...educationInfo, newEntry]);
  };

  const removeEducationEntry = (id) => {
    event.preventDefault();
    const updatedArr = educationInfo.filter((entry) => entry.id !== id);
    setEducationInfo(updatedArr);
  };

  const handleEducationInfoChange = (id, field, value) => {
    setEducationInfo((prevEducationInfo) =>
      prevEducationInfo.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    );
  };

  // End of adding more education logic ^^//

  const handleGeneralInfoChange = (e) => {
    const generalInfoCopy = { ...generalInfo };
    generalInfoCopy[e.target.name] = e.target.value;
    setGeneralInfo(generalInfoCopy);
  };

  //Logic for adding more work experience//

  const handleWorkInfoChange = (id, field, value) => {
    setWorkInfo((prevWorkInfo) =>
      prevWorkInfo.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    );
  };

  const addWorkEntry = () => {
    event.preventDefault();
    const newEntry = {
      id: uuidv4(),
      companyName: '',
      positionTitle: '',
      responsibilites: '',
      dateFrom: '',
      dateUntil: '',
      isInitial: false,
    };
    setWorkInfo([...workInfo, newEntry]);
  };

  const removeWorkEntry = (id) => {
    event.preventDefault();
    const updatedArr = workInfo.filter((entry) => entry.id !== id);
    setWorkInfo(updatedArr);
  };

  const handleViewResumeClick = () => {
    if (!isResumeOpen) {
      setIsResumeOpen(true);
    } else {
      setIsResumeOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={handleViewResumeClick}
        className={isResumeOpen ? 'close-resume' : 'view-resume-btn'}
      >
        {isResumeOpen ? 'Close Resume' : 'View Resume'}
      </button>
      <div className='main-content-wrapper'>
        <div className='input-info-wrapper'>
          <div className='input-left-side'>
            <GeneralInfo
              handleGeneralInfoChange={handleGeneralInfoChange}
              isResumeOpen={isResumeOpen}
            />
            <Education
              handleEducationInfoChange={handleEducationInfoChange}
              addEducationEntry={addEducationEntry}
              educationInfo={educationInfo}
              removeEducationEntry={removeEducationEntry}
              isResumeOpen={isResumeOpen}
            />
            <WorkExperience
              handleWorkInfoChange={handleWorkInfoChange}
              workInfo={workInfo}
              addWorkEntry={addWorkEntry}
              removeWorkEntry={removeWorkEntry}
              isResumeOpen={isResumeOpen}
            />
          </div>
        </div>

        <div className='rendered-resume'>
          <Resume
            generalInfo={generalInfo}
            educationInfo={educationInfo}
            workInfo={workInfo}
            isResumeOpen={isResumeOpen}
          />
        </div>
      </div>
    </>
  );
};
