import './UserInputs.css';

const UserInputs = ({
  numPick,
  handleNumPickChange,
  numLimit,
  handleNumLimitChange,
}) => {
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
          min={3}
          max={7}
          value={numPick}
          type='number'
          onChange={handleNumPickChange}
        ></input>
      </div>
      <div className='input-container'>
        <label>Highest Number Choice</label>
        <input
          min={1}
          max={99}
          type='number'
          value={numLimit}
          onChange={handleNumLimitChange}
        ></input>
      </div>
    </div>
  );
};

export default UserInputs;