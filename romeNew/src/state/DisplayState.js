import React, { useState } from 'react'
import { Visitor, VisitorComponent } from '../lang/RomeVisitor'
export const DisplayContext = React.createContext();

export const DisplayProvider = (props) => {
  const [display, setDisplay] = useState(
    {	
	delay:10,
	text:"",
	output:"",
	input:"",
	running:false,
	reading:false,
	selected:0,
	commands:[],
	memory:[
		{
		key:0,
		type:"",
		content:"yo",
		selected:true,
		special:"",
		name:""
		},
		{
		key:1,
		type:"",
		content:"",
		selected:false,
		special:"",
		name:""
		}
	]
      }
  )

  return (
    <DisplayContext.Provider value={[display, setDisplay]} >
      {props.children}
    </DisplayContext.Provider>
  )

}
