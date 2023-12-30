import React from 'react';
import './Piano.css';

const WhiteKey = ({ note }) => {
  return <div className={`key white ${note}`} />;
};

const BlackKey = ({ note }) => {
  return <div className={`key black ${note}`} />;
};

const Octave = ({ octaveNumber }) => {
  const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

  return (
    <div className={`octave octave${octaveNumber}`}>
      {notes.map((note, index) => (
        <React.Fragment key={note}>
          <WhiteKey note={`${note}${octaveNumber}`} />
          {index < notes.length - 1 && <BlackKey note={`${note}#${octaveNumber}`} />}
        </React.Fragment>
      ))}
    </div>
  );
};

const Piano = () => {
  const octaves = Array.from({ length: 7 }, (_, index) => index + 1);

  return (
    <div className="piano">
      {octaves.map((octave) => (
        <Octave key={octave} octaveNumber={octave} />
      ))}
    </div>
  );
};

export default Piano;
