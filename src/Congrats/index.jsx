import React from 'react';

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` propr is)
 */
const Congrats = (props) => {
  if (props.success) {
    return (
      <section data-test='component-congrats'>
        <p data-test='congrats-message'>Congratulations! You guessed the word!</p>
      </section>
    );
  } else {
    return (
      <div data-test='component-congrats' />
    );
  }
}

export default Congrats;