import PropTypes from 'prop-types';
import { InputStyled, Label } from './Filter.styled';

export const Filter = ({ filter, onFilterChange }) => {
  return (
    <div>
      <Label htmlFor="filter">Find contacts by name</Label>
      <InputStyled
        type="text"
        id="filter"
        value={filter}
        onChange={event => onFilterChange(event.target.value)}
      />
    </div>
  );
};


Filter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
};
