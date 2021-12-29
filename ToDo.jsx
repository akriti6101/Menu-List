
function ToDo(props)
{
      return (
        <div className="div3"  >
        <button  className="btn2"   >
         <i className="fa fa-close " style={{fontSize :"20px",color:"red"}}  name={props.text}  onClick={()=>{
            props.onSelect(props.text);
        }} ></i></button>
       <li  id={props.text}  >{props.content}</li>
       </div>
      );
}
export default ToDo;