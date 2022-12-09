import React from 'react'
import {AiFillFacebook, AiFillTwitterSquare, AiFillGoogleSquare, AiFillInstagram,
        AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <>
      <div className="mt-5">
        <footer
            className="text-center text-lg-start text-white"
            style={{backgroundColor:"#021a5d"}}
        >
  
        <section
           className="d-flex justify-content-between p-4"
           style={{backgroundColor:"#00c2cb"}}
        >
   
        <div className="me-5">
           <span>Get connected with us on social networks:</span>
        </div>
   
        <div className='text-dark d-flex gap-3 fs-5'>
          
            <i className="fab"> <AiFillFacebook/></i>
          
         
            <i className="fab"> <AiFillTwitterSquare/></i>
          
         
            <i className="fab"> <AiFillGoogleSquare/></i>
          
          
            <i className="fab"> <AiFillInstagram/></i>
          
         
            <i className="fab"> <AiFillLinkedin/></i>
          
         
            <i className="fab"> <AiFillGithub/></i>
         
        </div>
    
        </section>
  

 
        <section className="">
          <div className="container text-center text-md-start mt-5">
     
            <div className="row mt-3">
        
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        
                 <h6 className="text-uppercase fw-bold">ElectroMoll Electronics</h6>
                 <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px",backgroundColor: "#7c4dff",height: "2px"}}
                 />
                 <p>
                   Here you can add to cart to your favourite Electronic Item with 
                   specific quantity and buy also on ElectroMoll shop.
                 </p>
               </div>
      

      
             <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{width: "60px",backgroundColor: "#7c4dff",height: "2px"}}
                />
                <p>
                 <a href="#!" className="text-white">Resistors</a>
                </p>
                <p>
                <a href="#!" className="text-white">Capacitors</a>
                </p>
                <p>
                <a href="#!" className="text-white">Inductors</a>
               </p>
               <p>
               <a href="#!" className="text-white">Diodes</a>
               </p>
            </div>
        

        
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold">Useful links</h6>
          <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{width: "60px",backgroundColor: "#7c4dff",height: "2px"}}
              />
          <p>
            <a href="#!" className="text-white">Your Account</a>
          </p>
          <p>
            <a href="#!" className="text-white">Become an Affiliate</a>
          </p>
          <p>
            <a href="#!" className="text-white">Shipping Rates</a>
          </p>
          <p>
            <a href="#!" className="text-white">Help</a>
          </p>
        </div>
        

        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 className="text-uppercase fw-bold">Contact</h6>
          <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{width: "60px",backgroundColor: "#7c4dff",height: "2px"}}
              />
          <p><i className="fas fa-home mr-3"></i> New Delhi, Palam</p>
          <p><i className="fas fa-envelope mr-3"></i> Helpurdomain@gmail.com</p>
          <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
        </div>
        
      </div>
     
    </div>
  </section>
  

  
  <div
       className="text-center p-3"
       style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
       >
    © 2022 : &nbsp;
    <a className="text-white" href="">
       Helpurdomain@gmail.com </a>
  </div>
</footer>

</div>
    </>
  )
}

export default Footer
