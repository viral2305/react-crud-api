import React, { useRef } from 'react'

const Use = () => {
    const reference = useRef(null);
    const submitForm = (e) => {
        e.preventDefault();
        console.log(reference.current)
    }
  return (
    <div>
        <form action='' onSubmit={submitForm}>
            <label>enter your name</label>
            <input type="text" id="name" ref={reference}></input>
            <button>submit</button>
        </form>
    </div>
  )
}

export default Use