import React from 'react'


const CommonForm = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
      <button type="submit" className="bg-primary text-primary-foreground px-4 py-2 rounded-md">
        Submit
      </button>
    </form>
  )
}



export default CommonForm;
