import './Education.css';

export const EducationForm = ({
  id,
  handleEducationInfoChange,
  removeEducationEntry,
  addEducationEntry,
  isInitial,
}) => {
  const handleAddBtnClick = () => {
    addEducationEntry();
  };
  return (
    <form>
      <label htmlFor='school-name'>School Name:</label>
      <input
        type='text'
        id='school-name'
        name='schoolName'
        onChange={(e) =>
          handleEducationInfoChange(id, 'schoolName', e.target.value)
        }
        required
      />
      <label htmlFor='study-title'>Title of Study:</label>
      <input
        type='text'
        id='study-title'
        name='studyTitle'
        onChange={(e) =>
          handleEducationInfoChange(id, 'studyTitle', e.target.value)
        }
        required
      />
      <label htmlFor='date'>Date of study</label>
      <input
        type='text'
        id='date'
        name='dateOfStudy'
        onChange={(e) =>
          handleEducationInfoChange(id, 'dateOfStudy', e.target.value)
        }
        required
      />
      <button className='add-button'
        onClick={() => {
          handleAddBtnClick();
        }}
      >
        Add Education
      </button>
      {!isInitial && (
        <button className='delete-button'
          onClick={() => {
            removeEducationEntry(id);
          }}
        >
          Delete
        </button>
      )}
    </form>
  );
};
