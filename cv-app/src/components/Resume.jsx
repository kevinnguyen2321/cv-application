import './Resume.css';

export const Resume = ({ generalInfo, educationInfo }) => {
  return (
    <div className='resume-wrapper'>
      <div className='resume-header'>
        <h2>{generalInfo.name}</h2>
        <p>{generalInfo.email}</p>
        <p>{generalInfo.phoneNumber}</p>
      </div>

      <div className='education-info-wrapper'>
        <p className='info-bold uppercase'>Education</p>
        <p>
          {educationInfo.schoolName}, {''}
          <span className='italic'>{educationInfo.studyTitle}</span>{' '}
          {`(${educationInfo.dateOfStudy})`}
        </p>
      </div>

      <div className='experience-wrapper'>
        <p className='info-bold uppercase'>Experience</p>
      </div>
    </div>
  );
};
