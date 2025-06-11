const TextInput = ({ fieldName, value, onChange }) => {
  return (
    <div>
      <label htmlFor={fieldName}>{fieldName}</label>
      <input type='text' name={fieldName} value={value} onChange={onChange}></input>
    </div>
  );
};

export default TextInput;
