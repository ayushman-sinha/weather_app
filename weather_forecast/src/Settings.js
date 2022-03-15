import React from 'react'

const Settings = () => {
  return (
    <div>
        <p></p>
        <div>Select your Unit :</div>
        <div>
            <select name="unit">
            <option value="1">Standard</option>
            <option value="2">Imperial</option>
            <option value="3">Metric</option>
            </select>
        </div>
    </div>
  )
}

export default Settings