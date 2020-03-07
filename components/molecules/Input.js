function Input(props) {
  return (
    <div className="[ grid grid-cols-12 ]">
      <label className="[ col-span-3 text-right self-center mr-3-0 ]">{props.label}</label>
      <div className="[ col-span-9 ]">
        <input type={props.type} onChange={props.handleInput} name={props.name} value={props.value} />
      </div>
    </div>
  );
}

export default Input;
