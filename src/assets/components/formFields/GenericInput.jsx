const GenericInput = ({ fieldName, value, onChange, type }) => {
  return (
    <div>
      <label htmlFor={fieldName}>{fieldName}</label>
      <input type={type} name={fieldName} value={value} onChange={onChange}></input>
    </div>
  );
};

export default GenericInput;
