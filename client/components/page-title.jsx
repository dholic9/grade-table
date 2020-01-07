import React from 'react';

function PageTitle(props) {
  return (
    <div className="container-fluid">
      <div className="row justify-content-between">
        <h1 className="title col-sm">{props.text}</h1>
        <h1 className="avg col-sm">Average Grade:
          <span className="badge badge-secondary">{props.avg}</span>
        </h1>
      </div>
    </div>
  );
}

export default PageTitle;
