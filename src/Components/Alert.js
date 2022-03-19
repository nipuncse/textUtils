import React from 'react'

 function Alert(props) {
  return (
	<>
	{props.alert&&<div className={`alert alert-${props.mode==='light'?'dark':'success'} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.typ} : </strong>{props.alert.msg}
  
</div>}
	</>
  )
}

export default Alert
