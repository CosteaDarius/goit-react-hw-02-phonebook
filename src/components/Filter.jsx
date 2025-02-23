const Filter = ({ filter, onFilterChange }) => {
    return (
      <label>
        Find contacts by name:
        <input type="text" value={filter} onChange={(e) => onFilterChange(e.target.value)} />
      </label>
    );
  };
  
  export default Filter;