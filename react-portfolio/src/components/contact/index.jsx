import React from 'react';

function Contact() {
  return (
    <form>
        <div class="mb-3">
            <label for="InputName" class="form-label">Name</label>
            <input type="password" class="form-control" id="InputName"></input>
        </div>
        <div class="mb-3">
            <label  for="InputEmail" class="form-label">Email Address</label>
            <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp"></input>
        </div>
    </form>
  );
}

export default Contact;