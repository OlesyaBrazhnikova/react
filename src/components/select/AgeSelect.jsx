import React from 'react';

function AgeSelect({value, defaultValue, options, onSortChange}) {
	return (
		<select value={value} onChange={(event) => onSortChange(event.target.value)}>
			<option value="" disabled>{defaultValue}</option>
			{
				options.map(option => 
					<option value={option.value} key={option.value}>{option.title}</option>
				)
			}
		</select>
	);
}

export default AgeSelect;