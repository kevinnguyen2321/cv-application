import './Resume.css';

export const Resume = ({ generalInfo, educationInfo, workInfo }) => {
  return (
    <div className='resume-wrapper'>
      <div className='resume-header'>
        <h2>{generalInfo.name}</h2>
        <p>{generalInfo.currentPosition}</p>
      </div>

      <div className='content-wrapper'>
        <div className='left-side'>
          <div className='contact-wrapper'>
            <h2>Contact</h2>
            <p>{generalInfo.phoneNumber}</p>
            <p>{generalInfo.email}</p>
          </div>

          <div className='education-resume-wrapper'>
            <h2>Education</h2>
            <p>
              {educationInfo.schoolName}
              <span>{educationInfo.dateOfStudy}</span>{' '}
            </p>
            <p>{educationInfo.studyTitle}</p>
          </div>
        </div>

        <div className='right-side'>
          <div className='about-me-resume-wrapper'>
            <h2 className='about-header'>About me</h2>
            <p className='about-me-text'>{generalInfo.aboutMe}</p>
          </div>

          <div className='work-info-resume-wrapper'>
            <h2 className='experience-header'>Work Experience</h2>
            <h4>
              {workInfo.positionTitle}
              <span className='work-dates'>{`${workInfo.dateFrom} | ${workInfo.dateUntil}`}</span>
            </h4>
            <p>{workInfo.companyName}</p>
            <p>{workInfo.responsibilites}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
