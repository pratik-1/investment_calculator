

const Input = (props) => {
    return (<p>
        <label htmlFor={ props.id}>{props.label}</label>
        <input
          type="number"
          id={props.id}
          min='0.01'
          step='0.01'
          value={props.value}
          onChange={props.onChange}
        />
    </p>
    );
}

export default Input;