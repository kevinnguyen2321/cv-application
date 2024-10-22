import './GeneralInfo.css';

export const GeneralInfo = ({ handleGeneralInfoChange }) => {
  return (
    <div className='general-info-wrapper'>
      <div className='input-wrapper'>
        <h2>General Information</h2>
        <form>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={handleGeneralInfoChange}
            required
          />
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={handleGeneralInfoChange}
            required
          />
          <label htmlFor='phone'>Phone Number:</label>
          <input
            type='tel'
            id='phone'
            name='phoneNumber'
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            onChange={handleGeneralInfoChange}
            required
          />
        </form>
      </div>
    </div>
  );
};
