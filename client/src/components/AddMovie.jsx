import React from 'react';

var AddMovie = (props) => {
  return (
    <form className='add-form form-inline'>
      <input
        type='text'
        value={props.value}
        id='movie-add'
        placeholder='Add a new movie...'
        onChange={props.change}
      />
      <button id='add-button' type='button' onClick={(e) => (props.clickFn(e.target, props.value))}>Add</button>
    </form>
  );
}

export default AddMovie