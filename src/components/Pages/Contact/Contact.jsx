import React from "react";

const Contact = () => {
  return (
    <>
      <div>
      

<div><h1 className='text-center'>Contact Us</h1>
    <h4>Welcome to the site.</h4>
    <form class="row g-1">
  <div class="col-md-2">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div><br/>
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-4">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-4">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-4">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
 
 
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
<br/>
<div>
    <iframe 
    title='myframe'
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4665049460964!2d85.33135762562853!3d27.671973027813213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e869676cb9%3A0xcd531938a9853aa!2sBalkumari%20Temple!5e0!3m2!1sen!2snp!4v1670754321653!5m2!1sen!2snp" 
    width="100%" 
    height="450" 
    style={{border:0 }}
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">

    </iframe>
    </div>
    </div>
     
   



      </div>
    </>
  );
};

export default Contact;
