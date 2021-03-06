import React from 'react';

function Contact() {
  return (
    <div>
        <h1 className="mt-5 text-center">Contact Me</h1>
        <form className="p-5 mt-3 contactBg">
            <div className="mb-3">
                <label for="InputName" className="form-label">Name:</label>
                <input type="text" className="form-control" id="InputName" placeholder="William Everteen"></input>
            </div>
            <div className="mb-3">
                <label  for="InputEmail" className="form-label">Email Address:</label>
                <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Williame@gmail.com"></input>
            </div>
            <div className="mb-3">
                <label  for="Message" className="form-label">Message:</label>
                <textarea type="email" className="form-control" id="Message" aria-describedby="emailHelp" placeholder="I would love to have a chat!"></textarea>
            </div>
        </form>
    </div>
  );
}

export default Contact;