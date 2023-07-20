import React from 'react';
var AddMovie = (props) => {
  return (
    <form className='add-form form-inline'>
      <input
        type='text'
        value={props.addInput}
        id='movie-add'
        placeholder='Add a new movie...'
        onChange={props.change}
      />
      <button className='add-button' type='button' onClick={(e) => (props.clickFn(props.addInput))}>Add</button>
    </form>
  );
}

export default AddMovie