import { FilterLabel } from './Filter.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
//import { getFilter } from 'redux/selectors';
import { filterContacts } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <input type="text" name="filter" onChange={handleChange} />
    </FilterLabel>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
