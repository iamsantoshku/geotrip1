import React from "react";

const Review = () => {
  const reviews = [
    {
      name: "Aman Diwakar",
      country: "United States",
      img: "src/assets/img/team-1.jpg",
      stars: 4,
      review: "Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt.",
    },
    {
      name: "Kunal M. Thakur",
      country: "United States",
      img: "src/assets/img/team-2.jpg",
      stars: 4,
      review: "Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt.",
    },
    {
      name: "Divya Talwar",
      country: "United States",
      img: "src/assets/img/team-3.jpg",
      stars: 4,
      review: "Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt.",
    },
    {
      name: "Karan Maheshwari",
      country: "United States",
      img: "src/assets/img/team-4.jpg",
      stars: 4,
      review: "Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt.",
    },
    {
      name: "Ritika Mathur",
      country: "United States",
      img: "src/assets/img/team-5.jpg",
      stars: 4,
      review: "Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt.",
    },
  ];

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <span key={i} className="me-1 text-xs text-warning">
          <i className="fa-solid fa-star"></i>
        </span>
      );
    }
    return stars;
  };

  return (
    <div>
      <section
        className="gray-simple bg-cover"
        style={{
          background: "url(src/assets/img/reviewbg.png) no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
              <div className="secHeading-wrap text-center mb-5">
                <h2>Loving Reviews By Our Customers</h2>
                <p>
                  Cicero famously orated against his political opponent Lucius
                  Sergius Catilina.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center justify-content-center g-xl-4 g-lg-4 g-md-4 g-3">
            {reviews.map((review, index) => (
              <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card border rounded-3">
                  <div className="card-body">
                    <div className="position-absolute top-0 end-0 mt-3 me-3">
                      <span className="square--40 circle text-primary bg-light-primary">
                        <i className="fa-solid fa-quote-right"></i>
                      </span>
                    </div>
                    <div className="d-flex align-items-center flex-thumbes">
                      <div className="revws-pic">
                        <img
                          src={review.img}
                          className="img-fluid rounded-2"
                          width="80"
                          alt={review.name}
                        />
                      </div>
                      <div className="revws-caps ps-3">
                        <h6 className="fw-bold fs-6 m-0">{review.name}</h6>
                        <p className="text-muted-2 text-md m-0">
                          {review.country}
                        </p>
                        <div className="d-flex align-items-center justify-content-start">
                          {renderStars(review.stars)}
                        </div>
                      </div>
                    </div>
                    <div className="revws-desc mt-3">
                      <p className="m-0 text-md">{review.review}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
