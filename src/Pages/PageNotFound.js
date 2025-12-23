import React from "react";
import { useParams } from "react-router-dom";

function PageNotFound() {
  let url = useParams();
  console.log(url.id);
  return (
    <div>
      <h1 className="display-1 text-center">
        OOPS! <br /> <span className="text-danger">404</span> <br /> <span className="text-warning"> {url.id}</span> <br />
        PAGE NOT FOUND
      </h1>
    </div>
  );
}

export default PageNotFound;
