import { useState } from 'react';

const JoinFlamesForm = () => {
  const [instagram, setInstagram] = useState('');
  const [email, setEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitFailed, setFormSubmitFailed] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false); // New state variable

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = document.querySelectorAll('.required');
    let valid = true;

    // Check if all required fields are filled
    requiredFields.forEach((field) => {
      if (!field.value) {
        field.parentElement.classList.add('input-value-no');
        valid = false;
      } else {
        const classes = field.parentElement.classList;
        if (classes.contains('input-value-no')) {
          field.parentElement.classList.remove('input-value-no');
        }
      }
    });

    // If all required fields are filled, submit the form
    if (valid) {
      setFormSubmitting(true); // Set formSubmitting to true
      try {
        const scriptURL =
          'https://script.google.com/macros/s/AKfycbw80A7u3FLFoid0mkPQFDinakY7SeoQ63ZmeU0n7menWChjClUub1cddKK-VbcBY0qR/exec';
        const response = await fetch(scriptURL, {
          method: 'POST',
          body: new FormData(e.target),
        });
        if (response.ok) {
          setFormSubmitted(true);
        } else {
          setFormSubmitFailed(true);
        }
      } catch (error) {
        console.error(error);
        setFormSubmitFailed(true);
      } finally {
        setFormSubmitting(false); // Set formSubmitting back to false
      }
    }
  };

  return (

    


    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Instagram"
        className="required"
        id="instagram"
        name="instagram"
        value={instagram}
        onChange={(e) => setInstagram(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email"
        className="required"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="button button-next submit_disabled"
        type="submit"
        id="submit"
        disabled={formSubmitting} // Disable the button while the form is being submitted
      >
        {formSubmitting ? 'Sending...' : 'Join Flames'} 
      </button>

      {formSubmitted && (
        <div className="modal-popup form-submitted form-submitted-success">
          Form submitted successfully!
        </div>
      )}
      {formSubmitFailed && (
        <div className="modal-popup form-submitted form-submitted-failed nay">
          Failed to submit the form. Please try again later.
        </div>
      )}
    </form>
  );
};

export default JoinFlamesForm;
