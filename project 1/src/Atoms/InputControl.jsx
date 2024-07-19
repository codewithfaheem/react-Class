/*
    props. label

    props. value 
    props. name
    props. setValue
*/

export const InputControl = (props) => {
    const updateValue = (e) => {
        props.setValue(props.name, e.target.value)
    }

 return (
    <>
        <div>
            <label>{props.label}</label>
            <input value={props.value} onChange={updateValue} />
            <hr />
        </div>
    </>
 )   
}