import React from 'react';
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardHeader,
  MDBCardText,
  MDBNavLink
} from 'mdbreact';
import SectionContainer from '../../components/sectionContainer';
import '../../style.css'

const WiaHomePage = () => {

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <SectionContainer>
        <MDBCarousel
          activeItem={1}
          length={5}
          //showControls
          showIndicators
          className='z-depth-1'
          slide
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId='1'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg'
                  alt='First slide'
                />
                <MDBMask overlay='black-light' />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className='h3-responsive'>Welcome to <span> WIAGO </span></h3>
                <p>Your best application for your Wiafirm Node Geolocation</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg'
                  alt='Second slide'
                />
                <MDBMask overlay='black-strong' />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className='h3-responsive'> Where ever you go </h3>
                <p>Dans une ville, dans un pays, en voyage... Où que vous soyez, avec <span> WIAGO </span> vous avez la possibilité de visualiser tous les équipements connectés à votre réseau</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg'
                  alt='Third slide'
                />
                <MDBMask overlay='black-slight' />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className='h3-responsive'>Oups! Service Denied. </h3>
                <p>Pas de stress gérer les dénis de service avec <span> WIAGO </span>. <br/>Eh oui! avec <span> WIAGO </span> vous êtes notifier instantanemment lorsqu'un noeud tombe en panne et connaissant exactement sa position vous pouvez aller immédiatement le réparer </p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='4'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg'
                  alt="Mattonit's item"
                />
                <MDBMask overlay='black-light' />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className='h3-responsive'>Best Wireless Access Point</h3>
                <p> Pas de quoi de laisser troubler par un dénis de service. Avec <span> WIAGO </span>, chercher les points d'accès les plus proches de vous et connectez-vous</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='5'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(92).jpg'
                  alt='First slide'
                />
                <MDBMask overlay='black-light' />
              </MDBView>
              <MDBCarouselCaption>
                <MDBCard
                  style={{ width: '15rem', height: '10rm' }} 
                  className='go'
                >
                  <MDBCardHeader color='deep-orange lighten-1'>Finished</MDBCardHeader>
                  <MDBCardBody>
                    <MDBCardTitle>Welcome to WIAGO</MDBCardTitle>
                    <MDBCardText>
                      Please click the button and start use <span> WIAGO </span>
                    </MDBCardText>                    
                    <MDBNavLink
                      tag='button'
                      to='/LoginPage'
                      color='mdb-color'
                      className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                      onClick={scrollToTop}
                    >
                      Login
                    </MDBNavLink>
                  </MDBCardBody>
                </MDBCard>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </SectionContainer>
    </div>
    
  );
};

export default WiaHomePage;
