import React from 'react'
const DropDownSelect = ({name,placeholder,val,required,_handleChange}) => (
	<div>
		<label>{placeholder}</label>
		<select name={name} required={required} onChange={_handleChange}>
			<option value="">select an option</option>
			{val.map(values => <option value={values} key={values}>{values}</option>)}
			</select>
		</div>
)

export default DropDownSelect;
