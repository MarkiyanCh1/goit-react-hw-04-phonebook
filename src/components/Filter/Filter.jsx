import React from 'react';
import { FilterWrapper, InputFilter } from './Filter.styles';

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <FilterWrapper>
      <h3>Find contacts by name</h3>
      <InputFilter
        type="text"
        value={filter}
        onChange={e => {
          onChangeFilter(e.target.value);
        }}
        placeholder="Enter name..."
      />
    </FilterWrapper>
  );
};

export default Filter;
