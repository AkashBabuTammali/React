function Button({colorName,color,onClick}){
    return(
        <button style={{backgroundColor:color}} onClick={onClick}>{colorName}</button>
    );
}
export default Button;