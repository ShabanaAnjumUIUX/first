import React from "react";

function Product({ product }) {
  console.log(product);
  return (
    <>
      <div className="container">
        <div className="row">
        {product.map((productitem) => {
          return (
            <>
            <div className="col-lg-3">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src={productitem.image}
                />

                <div className="card-body">
                  <h5 className="card-title">{productitem.title}</h5>
                  <p className="">{productitem.description}</p>
                  <h5>${productitem.price}</h5>
                </div>
              </div>
              </div>
            </>
          );
        })}
        </div>
      </div>
    </>
  );
}

export default Product;
