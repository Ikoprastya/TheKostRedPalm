import React from "react";
import logo from "./images/freepikOrderNow.png"
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from "./images/image1.jpeg"
import image2 from "./images/image2.jpeg"

import SliderImage from "./components/SliderImage";

function App() {
  const slides = [
    { url: "./images/slider/slide1.jpeg", title: "slide1" },
    { url: "./images/slider/slide2.jpeg", title: "slide2" },
    { url: "./images/slider/slide3.jpeg", title: "slide3" },
    { url: "./images/slider/slide4.jpeg", title: "slide4" },
  ];
  return (
    <>
      <header>
          <div className="bgImage"></div>
          <div className="content">
              <h1>THE KOST RED PALM</h1>
          </div>
          <div className="content-2  ">
            <div className="row">
              <div className="col-md-7 ">
                <p className="animationLeft">
                  The Kost Red Palm merupakan tempat kost yang nyaman dengan fasilitas
                  yang disedikan. The Kost Red Palm bertempat dekat dengan Kampus dan
                  Rumah Sakit Udayana. Pemandangan sunset dan patung Garuda Wisnu
                  Kencana(GWK) dapat dinikmati dari rooftop. Lokasi The Kost Red Palm
                  di Jl. Lkr. Timur Unud Jl. Merdeka No.21, Jimbaran, Kec. Kuta Sel.,
                  Kabupaten Badung, Bali 80361.
                </p>
              </div>
              <div className="col-md-4 icon-order">
                <a href="#down">
                  <img src={logo} alt="freepikOrderNow" />
                </a>
              </div>
            </div>
          </div>

       
      </header>

      <section>
        <div className="bgWhite">
          <h1 >FASILITAS</h1>
          
        </div>
       
          <div className="row  conFac">
            {/* Lantai Bawah */}
            <div className="col-sm-6 latas">
              <div className="card ">
                  <img className="card-img-top" src={image1} alt="lantaiAtas" />
                  <div className="card-body py-4">
                    <h5 className="card-title pb-2">Kamar Lantai Bawah</h5>
                    <div className="card-text">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="30"
                          viewBox="0 0 26 30"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_11_203)">
                            <path
                              d="M19.7339 8.80177L18.2607 7.1192L11.6364 14.6848L13.1096 16.3674L19.7339 8.80177ZM24.164 7.1192L13.1096 19.7444L8.74215 14.7683L7.26892 16.4509L13.1096 23.1215L25.6477 8.80177L24.164 7.1192ZM1.3551 16.4509L7.19578 23.1215L8.66901 21.4389L2.83878 14.7683L1.3551 16.4509Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_11_203">
                              <rect
                                width="25.0762"
                                height="28.6395"
                                fill="white"
                                transform="translate(0.926697 0.448608)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>Kamar 3x3</span>
                      </div>

                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="30"
                          viewBox="0 0 26 30"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_11_203)">
                            <path
                              d="M19.7339 8.80177L18.2607 7.1192L11.6364 14.6848L13.1096 16.3674L19.7339 8.80177ZM24.164 7.1192L13.1096 19.7444L8.74215 14.7683L7.26892 16.4509L13.1096 23.1215L25.6477 8.80177L24.164 7.1192ZM1.3551 16.4509L7.19578 23.1215L8.66901 21.4389L2.83878 14.7683L1.3551 16.4509Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_11_203">
                              <rect
                                width="25.0762"
                                height="28.6395"
                                fill="white"
                                transform="translate(0.926697 0.448608)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>AC</span>
                      </div>

                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="30"
                          viewBox="0 0 26 30"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_11_203)">
                            <path
                              d="M19.7339 8.80177L18.2607 7.1192L11.6364 14.6848L13.1096 16.3674L19.7339 8.80177ZM24.164 7.1192L13.1096 19.7444L8.74215 14.7683L7.26892 16.4509L13.1096 23.1215L25.6477 8.80177L24.164 7.1192ZM1.3551 16.4509L7.19578 23.1215L8.66901 21.4389L2.83878 14.7683L1.3551 16.4509Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_11_203">
                              <rect
                                width="25.0762"
                                height="28.6395"
                                fill="white"
                                transform="translate(0.926697 0.448608)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>Lemari</span>
                      </div>

                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="30"
                          viewBox="0 0 26 30"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_11_203)">
                            <path
                              d="M19.7339 8.80177L18.2607 7.1192L11.6364 14.6848L13.1096 16.3674L19.7339 8.80177ZM24.164 7.1192L13.1096 19.7444L8.74215 14.7683L7.26892 16.4509L13.1096 23.1215L25.6477 8.80177L24.164 7.1192ZM1.3551 16.4509L7.19578 23.1215L8.66901 21.4389L2.83878 14.7683L1.3551 16.4509Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_11_203">
                              <rect
                                width="25.0762"
                                height="28.6395"
                                fill="white"
                                transform="translate(0.926697 0.448608)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>Meja Rias</span>
                      </div>

                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="30"
                          viewBox="0 0 26 30"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_11_203)">
                            <path
                              d="M19.7339 8.80177L18.2607 7.1192L11.6364 14.6848L13.1096 16.3674L19.7339 8.80177ZM24.164 7.1192L13.1096 19.7444L8.74215 14.7683L7.26892 16.4509L13.1096 23.1215L25.6477 8.80177L24.164 7.1192ZM1.3551 16.4509L7.19578 23.1215L8.66901 21.4389L2.83878 14.7683L1.3551 16.4509Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_11_203">
                              <rect
                                width="25.0762"
                                height="28.6395"
                                fill="white"
                                transform="translate(0.926697 0.448608)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>Meja Dinding Lipat</span>
                      </div>

                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="30"
                          viewBox="0 0 26 30"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_11_203)">
                            <path
                              d="M19.7339 8.80177L18.2607 7.1192L11.6364 14.6848L13.1096 16.3674L19.7339 8.80177ZM24.164 7.1192L13.1096 19.7444L8.74215 14.7683L7.26892 16.4509L13.1096 23.1215L25.6477 8.80177L24.164 7.1192ZM1.3551 16.4509L7.19578 23.1215L8.66901 21.4389L2.83878 14.7683L1.3551 16.4509Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_11_203">
                              <rect
                                width="25.0762"
                                height="28.6395"
                                fill="white"
                                transform="translate(0.926697 0.448608)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>Listrik (Pribadi)</span>
                      </div>

                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="30"
                          viewBox="0 0 26 30"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_11_203)">
                            <path
                              d="M19.7339 8.80177L18.2607 7.1192L11.6364 14.6848L13.1096 16.3674L19.7339 8.80177ZM24.164 7.1192L13.1096 19.7444L8.74215 14.7683L7.26892 16.4509L13.1096 23.1215L25.6477 8.80177L24.164 7.1192ZM1.3551 16.4509L7.19578 23.1215L8.66901 21.4389L2.83878 14.7683L1.3551 16.4509Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_11_203">
                              <rect
                                width="25.0762"
                                height="28.6395"
                                fill="white"
                                transform="translate(0.926697 0.448608)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>Ruang Dapur</span>
                      </div>

                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="30"
                          viewBox="0 0 26 30"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_11_203)">
                            <path
                              d="M19.7339 8.80177L18.2607 7.1192L11.6364 14.6848L13.1096 16.3674L19.7339 8.80177ZM24.164 7.1192L13.1096 19.7444L8.74215 14.7683L7.26892 16.4509L13.1096 23.1215L25.6477 8.80177L24.164 7.1192ZM1.3551 16.4509L7.19578 23.1215L8.66901 21.4389L2.83878 14.7683L1.3551 16.4509Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_11_203">
                              <rect
                                width="25.0762"
                                height="28.6395"
                                fill="white"
                                transform="translate(0.926697 0.448608)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>Kamar Mandi Dalam</span>
                      </div>
                    </div>

                    <div className="card-location d-flex mb-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="94"
                        height="90"
                        viewBox="0 0 34 30"
                        fill="none"
                      >
                        <path
                          d="M17.4637 2.50439C12.1305 2.50439 7.81708 6.35227 7.81708 11.1099C7.81708 17.564 17.4637 27.0915 17.4637 27.0915C17.4637 27.0915 27.1102 17.564 27.1102 11.1099C27.1102 6.35227 22.7968 2.50439 17.4637 2.50439ZM17.4637 14.1833C15.5619 14.1833 14.0184 12.8064 14.0184 11.1099C14.0184 9.41336 15.5619 8.03649 17.4637 8.03649C19.3654 8.03649 20.9089 9.41336 20.9089 11.1099C20.9089 12.8064 19.3654 14.1833 17.4637 14.1833Z"
                          fill="black"
                        />
                      </svg>
                      <span>
                        Jl. Lingkar Timur UNUD Jl. Merdeka No. 21, Jimbaran, Kuta
                        Selatan, Badung, Bali Badung, Bali 80361
                      </span>
                    </div>
                  </div>
              </div>
            </div>
            {/* Lantai Atas */}
            <div className="col-sm-6 lbawah">
              <div className="card">
                  <img className="card-img-top" src={image2} alt="lantaiAtas" />
                  
                  <div className="card-body py-4">
                    <h5 className="card-title pb-2">Kamar Lantai Atas</h5>
                    <div className="card-text">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="30"
                          viewBox="0 0 26 30"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_11_203)">
                            <path
                              d="M19.7339 8.80177L18.2607 7.1192L11.6364 14.6848L13.1096 16.3674L19.7339 8.80177ZM24.164 7.1192L13.1096 19.7444L8.74215 14.7683L7.26892 16.4509L13.1096 23.1215L25.6477 8.80177L24.164 7.1192ZM1.3551 16.4509L7.19578 23.1215L8.66901 21.4389L2.83878 14.7683L1.3551 16.4509Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_11_203">
                              <rect
                                width="25.0762"
                                height="28.6395"
                                fill="white"
                                transform="translate(0.926697 0.448608)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>Kamar 3x3</span>
                      </div>

                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="30"
                          viewBox="0 0 26 30"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_11_203)">
                            <path
                              d="M19.7339 8.80177L18.2607 7.1192L11.6364 14.6848L13.1096 16.3674L19.7339 8.80177ZM24.164 7.1192L13.1096 19.7444L8.74215 14.7683L7.26892 16.4509L13.1096 23.1215L25.6477 8.80177L24.164 7.1192ZM1.3551 16.4509L7.19578 23.1215L8.66901 21.4389L2.83878 14.7683L1.3551 16.4509Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_11_203">
                              <rect
                                width="25.0762"
                                height="28.6395"
                                fill="white"
                                transform="translate(0.926697 0.448608)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>AC</span>
                      </div>

                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="30"
                          viewBox="0 0 26 30"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_11_203)">
                            <path
                              d="M19.7339 8.80177L18.2607 7.1192L11.6364 14.6848L13.1096 16.3674L19.7339 8.80177ZM24.164 7.1192L13.1096 19.7444L8.74215 14.7683L7.26892 16.4509L13.1096 23.1215L25.6477 8.80177L24.164 7.1192ZM1.3551 16.4509L7.19578 23.1215L8.66901 21.4389L2.83878 14.7683L1.3551 16.4509Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_11_203">
                              <rect
                                width="25.0762"
                                height="28.6395"
                                fill="white"
                                transform="translate(0.926697 0.448608)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>Lemari</span>
                      </div>

                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="30"
                          viewBox="0 0 26 30"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_11_203)">
                            <path
                              d="M19.7339 8.80177L18.2607 7.1192L11.6364 14.6848L13.1096 16.3674L19.7339 8.80177ZM24.164 7.1192L13.1096 19.7444L8.74215 14.7683L7.26892 16.4509L13.1096 23.1215L25.6477 8.80177L24.164 7.1192ZM1.3551 16.4509L7.19578 23.1215L8.66901 21.4389L2.83878 14.7683L1.3551 16.4509Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_11_203">
                              <rect
                                width="25.0762"
                                height="28.6395"
                                fill="white"
                                transform="translate(0.926697 0.448608)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>Meja Rias</span>
                      </div>

                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="30"
                          viewBox="0 0 26 30"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_11_203)">
                            <path
                              d="M19.7339 8.80177L18.2607 7.1192L11.6364 14.6848L13.1096 16.3674L19.7339 8.80177ZM24.164 7.1192L13.1096 19.7444L8.74215 14.7683L7.26892 16.4509L13.1096 23.1215L25.6477 8.80177L24.164 7.1192ZM1.3551 16.4509L7.19578 23.1215L8.66901 21.4389L2.83878 14.7683L1.3551 16.4509Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_11_203">
                              <rect
                                width="25.0762"
                                height="28.6395"
                                fill="white"
                                transform="translate(0.926697 0.448608)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>Meja Dinding Lipat</span>
                      </div>

                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="30"
                          viewBox="0 0 26 30"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_11_203)">
                            <path
                              d="M19.7339 8.80177L18.2607 7.1192L11.6364 14.6848L13.1096 16.3674L19.7339 8.80177ZM24.164 7.1192L13.1096 19.7444L8.74215 14.7683L7.26892 16.4509L13.1096 23.1215L25.6477 8.80177L24.164 7.1192ZM1.3551 16.4509L7.19578 23.1215L8.66901 21.4389L2.83878 14.7683L1.3551 16.4509Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_11_203">
                              <rect
                                width="25.0762"
                                height="28.6395"
                                fill="white"
                                transform="translate(0.926697 0.448608)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>Listrik</span>
                      </div>

                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="30"
                          viewBox="0 0 26 30"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_11_203)">
                            <path
                              d="M19.7339 8.80177L18.2607 7.1192L11.6364 14.6848L13.1096 16.3674L19.7339 8.80177ZM24.164 7.1192L13.1096 19.7444L8.74215 14.7683L7.26892 16.4509L13.1096 23.1215L25.6477 8.80177L24.164 7.1192ZM1.3551 16.4509L7.19578 23.1215L8.66901 21.4389L2.83878 14.7683L1.3551 16.4509Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_11_203">
                              <rect
                                width="25.0762"
                                height="28.6395"
                                fill="white"
                                transform="translate(0.926697 0.448608)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>Kamar Mandi Dalam</span>
                      </div>
                    </div>

                  
                      <div className="card-location d-flex cardLocAtas">
                        <svg className="logoLoc"
                          xmlns="http://www.w3.org/2000/svg"
                          width="94"
                          height="90"
                          viewBox="0 0 34 30"
                          fill="none"
                        >
                          <path
                            d="M17.4637 2.50439C12.1305 2.50439 7.81708 6.35227 7.81708 11.1099C7.81708 17.564 17.4637 27.0915 17.4637 27.0915C17.4637 27.0915 27.1102 17.564 27.1102 11.1099C27.1102 6.35227 22.7968 2.50439 17.4637 2.50439ZM17.4637 14.1833C15.5619 14.1833 14.0184 12.8064 14.0184 11.1099C14.0184 9.41336 15.5619 8.03649 17.4637 8.03649C19.3654 8.03649 20.9089 9.41336 20.9089 11.1099C20.9089 12.8064 19.3654 14.1833 17.4637 14.1833Z"
                            fill="black"
                          />
                        </svg>
                        <span>
                          Jl. Lingkar Timur UNUD Jl. Merdeka No. 21, Jimbaran, Kuta
                          Selatan, Badung, Bali Badung, Bali 80361
                        </span>
                      </div>
                  
                    
                  </div>
              </div>
            </div>
          </div>
        
      </section>

      <section>
        <div className="bgWhite">
          <h1>FOTO KAMAR</h1>
        </div>
        <div className="slider">
            <SliderImage />
        </div>
      </section>

      <section>
        <div className="vidLoc">
          <h1>VIDEO AND LOKASI</h1>
          <div className=" vidLocContent">
            
            <iframe className="youtube" width="600" height="400" src="https://www.youtube.com/embed/21oqh7EaV18?si=xf3LzbITHU9RJsk0&amp;start=8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <iframe className="lokasi" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492.8571012504096!2d115.17876743847658!3d-8.799520412300073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd245bf678c7183%3A0xf7949a9a66772b7a!2sThe%20Kost%20Red%20Palm!5e0!3m2!1sid!2sid!4v1703211995351!5m2!1sid!2sid" width="600" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>

      <footer>
        <div id="down" className="contact container">
          <a href="https://wa.me/6281916053551">
            <h1>Hubungi WA</h1>

          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
