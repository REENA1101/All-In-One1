import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'font-awesome/css/font-awesome.min.css';

export default function Footer() {
  return (
    <div>
          <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
       <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block' style={{marginLeft: "75px"}}>
          <span>Get connected with us on social networks :</span>
        </div>

        <div style={{marginRight: "130px"}}> 
        <a href="" class="me-4 text-reset">
        <MDBIcon icon='facebook' />
      </a>
      <a href="" class="me-4 text-reset">
        <MDBIcon icon='twitter' />
      </a>
      <a href="" class="me-4 text-reset">
      <MDBIcon icon='google' />
      </a>
      <a href="" class="me-4 text-reset">
      <MDBIcon icon='instagram' />
      </a>
      <a href="" class="me-4 text-reset">
      <MDBIcon icon='linkedin' />
      </a>
      <a href="" class="me-4 text-reset">
      <MDBIcon icon='github' />
      </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                
                <MDBIcon icon="diamond" className="me-3" />
              ALL IN ONE .CO
              </h6>
                <p>
                  The All In One Co. is a company website which provides the counter, Timer and Todo App 
                  all of these three individual apps in just one website. Enjoy!
                </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration: "none"}}>
                 Counter
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration: "none"}}>
                  Timer
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration: "none"}}>
                 Todo App
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration: "none"}}>
                 About Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration: "none"}}>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration: "none"}}>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration: "none"}}>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration: "none"}}>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                  @all_in_one@gmail.com
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />Call @0123456789
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> Drop a Hey! 
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)'  }}>
       Find Everything <a className='text-reset fw-bold' href="#" style={{textDecoration: "none"}}>@The All_In_One App</a>
        {/* <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a> */}
      </div>
    </MDBFooter>
  
    </div>
  )
}
