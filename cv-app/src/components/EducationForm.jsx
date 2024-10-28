import './Education.css';

export const EducationForm = ({
  id,
  handleEducationInfoChange,
  addNewEducationForm,
  removeForm,
}) => {
  return (
    <form>
      <label htmlFor='school-name'>School Name:</label>
      <input
        type='text'
        id='school-name'
        name='schoolName'
        onChange={handleEducationInfoChange}
        required
      />
      <label htmlFor='study-title'>Title of Study:</label>
      <input
        type='text'
        id='study-title'
        name='studyTitle'
        onChange={handleEducationInfoChange}
        required
      />
      <label htmlFor='date'>Date of study</label>
      <input
        type='text'
        id='date'
        name='dateOfStudy'
        onChange={handleEducationInfoChange}
        required
      />
      <button onClick={addNewEducationForm}>Add</button>
      <button
        onClick={() => {
          removeForm(event, id);
        }}
      >
        Delete
      </button>
    </form>
  );
};
