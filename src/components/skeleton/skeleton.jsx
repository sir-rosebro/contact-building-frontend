import React from 'react';

export default function BlogSkeleton() {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2 className="placeholder-glow">
            <span className="placeholder col-6"></span>
          </h2>
          <p className="placeholder-glow">
            <span className="placeholder col-8"></span>
          </p>
        </div>
      </div>
      <div className="row">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 placeholder-glow">
              <div className="card-img-top placeholder" style={{ height: '200px' }}></div>
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-8"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-12"></span>
                  <span className="placeholder col-10"></span>
                  <span className="placeholder col-6"></span>
                </p>
              </div>
              <div className="card-footer placeholder-glow">
                <span className="placeholder col-4"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}