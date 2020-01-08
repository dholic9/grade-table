import React from 'react';

function PageTitle(props) {
  return (
    <div className="container-fluid">
      <div className="row justify-content-between">
        <h1 className="title col ml-3 text-sm-left">{props.text}</h1>
        <h2 className="avg  col  mr-1 text-md-right">Average Grade:
          <span className="badge badge-secondary">{props.avg}</span>
        </h2>
      </div>
    </div>
  );
}

export default PageTitle;
