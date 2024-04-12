import React from 'react'
import { Container } from 'react-bootstrap'

import bs from "@assets/images/landing/techcard-bs.svg"
import react from "@assets/images/landing/techcard-react.svg"
import figma from "@assets/images/landing/techcard-figma.svg"
import vue from "@assets/images/landing/techcard-vue.svg"
import laravel from "@assets/images/landing/techcard-laravel.svg"
import node from "@assets/images/landing/techcard-node.svg"
import django from "@assets/images/landing/techcard-django.svg"
import net from "@assets/images/landing/techcard-net.svg"
import cakephp from "@assets/images/landing/techcard-cakephp.svg"
import mvc5 from "@assets/images/landing/techcard-mvc5.svg"
import Image from 'next/image'
import Link from 'next/link'

const PlateForm = () => {
  return (
    <React.Fragment>
        <section className="bg-white">
      <Container>
        <div className="row justify-content-center text-center">
          <div className="col-md-8 col-xl-6">
            <h2 className="wow animate__fadeInUp section-title" data-wow-delay="0.2s">Technology</h2>
            <p className="mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.4s">Light Able is a dynamic admin dashboard template packed with modern technologies like Bootstrap 5, React JS, Angular, Vue 3, and more.</p>
          </div>
        </div>
        <div className="row g-3">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card technology-card wow animate__fadeInRight section-title" data-wow-delay="0.2s">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <Image src={bs} alt="images" className="tech-img" />
                  </div>
                  <div className="flex-grow-1 mx-2">
                    <h5 className="mb-0">Bootstrap</h5>
                  </div>
                  <div className="flex-shrink-0">
                    <Link href="#" className="text-sm link-secondary d-flex align-items-center">Preview <i className="ti ti-chevrons-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card technology-card wow animate__fadeInRight section-title" data-wow-delay="0.3s">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <Image src={react} alt="images" className="tech-img" />
                  </div>
                  <div className="flex-grow-1 mx-2">
                    <h5 className="mb-0">React Next</h5>
                  </div>
                  <div className="flex-shrink-0">
                    <Link href="#" className="text-sm link-secondary d-flex align-items-center">Preview <i className="ti ti-chevrons-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card technology-card wow animate__fadeInRight section-title" data-wow-delay="0.4s">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <Image src={vue} alt="images" className="tech-img" />
                  </div>
                  <div className="flex-grow-1 mx-2">
                    <h5 className="mb-0">Vue.js</h5>
                  </div>
                  <div className="flex-shrink-0">
                    <Link href="#" className="text-sm link-secondary d-flex align-items-center">Preview <i className="ti ti-chevrons-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card technology-card wow animate__fadeInRight section-title" data-wow-delay="0.5s">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <Image src={laravel} alt="images" className="tech-img" />
                  </div>
                  <div className="flex-grow-1 mx-2">
                    <h5 className="mb-0">Laravel</h5>
                  </div>
                  <div className="flex-shrink-0">
                    <Link href="#" className="text-sm link-secondary d-flex align-items-center">Preview <i className="ti ti-chevrons-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card technology-card wow animate__fadeInRight section-title" data-wow-delay="0.6s">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <Image src={node} alt="images" className="tech-img" />
                  </div>
                  <div className="flex-grow-1 mx-2">
                    <h5 className="mb-0">Node.js</h5>
                  </div>
                  <div className="flex-shrink-0">
                    <Link href="#" className="text-sm link-secondary d-flex align-items-center">Preview <i className="ti ti-chevrons-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card technology-card wow animate__fadeInRight section-title" data-wow-delay="0.7s">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <Image src={django} alt="images" className="tech-img" />
                  </div>
                  <div className="flex-grow-1 mx-2">
                    <h5 className="mb-0">Django</h5>
                  </div>
                  <div className="flex-shrink-0">
                    <Link href="#" className="text-sm link-secondary d-flex align-items-center">Preview <i className="ti ti-chevrons-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card technology-card wow animate__fadeInRight section-title" data-wow-delay="0.8s">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <Image src={net} alt="images" className="tech-img" />
                  </div>
                  <div className="flex-grow-1 mx-2">
                    <h5 className="mb-0">ASP</h5>
                  </div>
                  <div className="flex-shrink-0">
                    <Link href="#" className="text-sm link-secondary d-flex align-items-center">Preview <i className="ti ti-chevrons-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card technology-card wow animate__fadeInRight section-title" data-wow-delay="0.9s">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <Image src={cakephp} alt="images" className="tech-img" />
                  </div>
                  <div className="flex-grow-1 mx-2">
                    <h5 className="mb-0">CakePHP</h5>
                  </div>
                  <div className="flex-shrink-0">
                    <Link href="#" className="text-sm link-secondary d-flex align-items-center">Preview <i className="ti ti-chevrons-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card technology-card wow animate__fadeInRight section-title" data-wow-delay="0.9s">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <Image src={mvc5} alt="images" className="tech-img" />
                  </div>
                  <div className="flex-grow-1 mx-2">
                    <h5 className="mb-0">MVC5</h5>
                  </div>
                  <div className="flex-shrink-0">
                    <Link href="#" className="text-sm link-secondary d-flex align-items-center">Preview <i className="ti ti-chevrons-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card technology-card wow animate__fadeInRight section-title" data-wow-delay="0.9s">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <Image src={figma} alt="images" className="tech-img" />
                  </div>
                  <div className="flex-grow-1 mx-2">
                    <h5 className="mb-0">Figma</h5>
                  </div>
                  <div className="flex-shrink-0">
                    <Link href="#" className="text-sm link-secondary d-flex align-items-center">Preview <i className="ti ti-chevrons-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
        </div>
      </Container>
    </section>
    </React.Fragment>
  )
}

export default PlateForm