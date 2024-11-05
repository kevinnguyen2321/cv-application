import './Resume.css';

export const Resume = ({
  generalInfo,
  educationInfo,
  workInfo,
  isResumeOpen,
}) => {
  return (
    <div
      className='resume-wrapper'
      style={{ display: isResumeOpen ? 'block' : 'none' }}
    >
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
            {educationInfo.map((educationEl) => {
              return (
                <div className='education-resume-info' key={educationEl.id}>
                  <p className='school-name-wrapper'>
                    {educationEl.schoolName} {'-'}
                    <span className='education-studyDates'>
                      {educationEl.dateOfStudy}
                    </span>{' '}
                  </p>
                  <p>{educationEl.studyTitle}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className='right-side'>
          <div className='about-me-resume-wrapper'>
            <h2 className='about-header'>About me</h2>
            <p className='about-me-text'>{generalInfo.aboutMe}</p>
          </div>

          <div className='work-info-resume-wrapper'>
            <h2 className='experience-header'>Work Experience</h2>
            {workInfo.map((workEl) => {
              return (
                <div className='work-el-wrapper' key={workEl.id}>
                  <h4>
                    {workEl.positionTitle}{' '}
                    <span className='work-dates'>{`${workEl.dateFrom} | ${workEl.dateUntil}`}</span>
                  </h4>
                  <p className='companyName-resume-wrapper'>
                    {workEl.companyName}
                  </p>
                  <p className='responsibilities-resume-wrapper'>
                    {workEl.responsibilites}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
