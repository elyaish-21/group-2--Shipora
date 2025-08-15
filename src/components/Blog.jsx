import React from "react";
import blog1 from "/images/GlobalAsianNews1.jpeg"
import blog2 from "/images/GlobalAsianNews2.jpeg"
import blog3 from "/images/GlobalAsianNews3.jpeg" 


export default function Blog() {
  return (
      <>
         <div className="centered">
            <div className="tag">Our Blog</div>
            <h1 className="blog--title">Global Asian News</h1>
         </div>
         <section className="blog-section">
            <div className="container">
               <div className="blog-grid">

               <div className="blog-card">
                  <div className="blog-image">
                     <img src={blog1} alt="Blog Post 1" />
                  </div>
                  <div className="blog-content">
                     <div className="blog-meta">August 14, 2025 | Design</div>
                     <h3 className="blog-title"><a href="#">How to Style Your Space Like a Pro</a></h3>
                     <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                     <a className="read-more" href="#">Read More →</a>
                  </div>
               </div>

               <div className="blog-card">
                  <div className="blog-image">
                     <img src={blog2} alt="Blog Post 2" />
                  </div>
                  <div className="blog-content">
                     <div className="blog-meta">August 10, 2025 | Lifestyle</div>
                     <h3 className="blog-title"><a href="#">The Art of Minimal Living</a></h3>
                     <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                     <a className="read-more" href="#">Read More →</a>
                  </div>
               </div>

               <div className="blog-card">
                  <div className="blog-image">
                     <img src={blog3} alt="Blog Post 3" />
                  </div>
                  <div className="blog-content">
                     <div className="blog-meta">August 5, 2025 | Travel</div>
                     <h3 className="blog-title"><a href="#">Top 10 Destinations for 2025</a></h3>
                     <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                     <a className="read-more" href="#">Read More →</a>
                  </div>
               </div>

               </div>
            </div>
         </section>
      </>
  );
}
