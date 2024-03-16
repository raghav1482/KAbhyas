import React from 'react';

function StudentCard({ name, photo, review }) {
  return (
    <div className="student-card embla__slide">
      <img src={photo} alt={name} className="student-photo" />
      <div className="student-info">
        <h2 className="student-name">{name}</h2>
        <p className="student-review">{review}</p>
      </div>
    </div>
  );
}

export default StudentCard;
