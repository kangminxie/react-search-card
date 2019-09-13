import React from 'react';

const Project = ( {id, name, keywords, isFinished} ) => {
  const description = isFinished ? 'Finished Alreay' : 'Project in progressing';
  const str = keywords.map(word => word + '');
  const keywordsList = '[' + str + ']';
  return (
    <div id={id}>
      <h3>{name}</h3>
      <p>{keywordsList}</p>
      <p>{description}</p>
    </div>
  );
}

export default Project;
