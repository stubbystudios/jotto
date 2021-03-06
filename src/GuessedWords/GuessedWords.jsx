import React from 'react';
import PropTypes from 'prop-types';
import './GuessedWords.scss';

const GuessedWords = (props) => {
  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
      <p
        data-test='guess-instructions'
        className='guess-instructions'>
        Try to guess the secret word!
      </p>
    );
  } else {
    const guessedWordsRows = props.guessedWords.map((word, index) => (
      <li
        data-test='guessed-word'
        className='guessed-word'
        key={index}
      >
        <div className='guess-count-col' data-test='guessed-word-index'>{index + 1}</div>
        <div className='guess-word-col'>
          {word.guessedWord}
        </div>
        <div className='matching-letter-col' >
          {word.letterMatchCount}
        </div>
      </li>
    )).reverse();
    contents = (
      <section
        data-test='guessed-words'
        className='guessed-words'
      >
        <header>
          <h3>Guessed Words</h3>
        </header>
        <ul className='guessed-words-list'>
          <li className='guess-words-header'>
            <div className='guess-count-col'>#</div>
            <div className='guess-word-col'>Guess</div>
            <div className='matching-letter-col'>Matching Letters</div>
          </li>
          {guessedWordsRows}
        </ul>
      </section>
    )
  }
  return (
    <section
      data-test='component-guessed-words'
      className='component-guessed-words'
    >{contents}</section>
  );
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;