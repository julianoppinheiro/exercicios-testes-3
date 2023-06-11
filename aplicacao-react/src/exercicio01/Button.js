function Button(props) {
    return (
        <div>
            <button role={props.label}
             >{props.label}</button>
        </div>
    )
}

export default Button;