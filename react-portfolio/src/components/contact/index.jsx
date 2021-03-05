import React from 'react';

function Contact() {
  return (
    <div>
        <h1 class="mt-5 text-center">Contact Me</h1>
        <form class="p-5 mt-3 contactBg">
            <div class="mb-3">
                <label for="InputName" class="form-label">Name:</label>
                <input type="text" class="form-control" id="InputName" placeholder="William Everteen"></input>
            </div>
            <div class="mb-3">
                <label  for="InputEmail" class="form-label">Email Address:</label>
                <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Williame@gmail.com"></input>
            </div>
            <div class="mb-3">
                <label  for="Message" class="form-label">Message:</label>
                <textarea type="email" class="form-control" id="Message" aria-describedby="emailHelp" placeholder="I would love to have a chat!"></textarea>
            </div>
        </form>
    </div>
  );
}

export default Contact;