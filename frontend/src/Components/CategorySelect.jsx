import React from 'react';

function CategorySelect({ value, onChange }) {
    return (
        <select className="form-select py-2 px-3 mb-3"> 
            <option value="">Select category</option>
            <option value="beverage">Beverage</option>
            <option value="materials">Materials</option>
            {/* Add more categories as needed */}
        </select>
    );
}

export default CategorySelect;