import './UserInputs.css';

const UserInputs = ({ numPick, handleNumPickChange }) => {
  /**
   * 1. Rerender based on number of picks immediately
   * 2. use Range from underscore to create an array of numbers between 1 and range input
   *
   */

  return (
    <div>
      <div className='input-container'>
        <label>Number of Picks</label>
        <input
          min='3'
          max='7'
          value={numPick}
          type='number'
          placeholder='How Many?'
          onChange={handleNumPickChange}
        ></input>
      </div>
      <div className='input-container'>
        <label>Highest Number Choice</label>
        <input type='number' placeholder='Highest Number'></input>
      </div>
    </div>
  );
};

export default UserInputs;