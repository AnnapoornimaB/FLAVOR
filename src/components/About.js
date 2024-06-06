import './About.css'

export default function About(){
    return(
        <section className="about" id="about">
         <h3 className="sub-heading">about us</h3>
         <h1 className="heading">Why choose us?</h1>
         <div className="row">
            <div className="img">
               <img src="images/abt-img.png" alt="" />
            </div>
            <div className="content">
               <h3>best food in the country</h3>
               <p>Our restaurant combines flavors & inspiration from the Far East & the West to create what we think is the best! Home to the original (recipe), we specialize in pizzas, as well as handmade appetizers, sandwiches, salads, and gluten friendly, vegetarian, & vegan selections. Feel free to indulge in a tiki drink or craft beer with our fantastic unique cuisine. Cheers!</p>
               <p>Our restaurant pushes the envelope of (CN) cuisine. Taking its influences from our team members’ culinary roots, restaurant blends traditional and innovative techniques to create unique offerings using local ingredients in all of its dishes. restaurant is grounded in hospitality with our staff’s commitment to providing you with a memorable experience each time you walk through our door.</p>
               <div className="abt-icon-container">
                  <div className="abt-icons">
                     <i className="fas fa-shipping-fast"></i>
                     <span>free delivery</span>
                  </div>
                  <div className="abt-icons">
                     <i className="fas fa-dollar-sign"></i>
                     <span>easy payment</span>
                  </div>
                  <div className="abt-icons">
                     <i className="fas fa-headset"></i>
                     <span>24/7 service</span>
                  </div>
               </div>
               <a href="#" className="btn">learn more</a>
            </div>
         </div>
      </section>
    )
}