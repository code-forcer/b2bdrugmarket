import React from 'react'
import SideBar from '../components/Sidebar'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Link from "next/link"
export default function market() {
  return (
    <div class="main-panel">
          <NavBar/>
          <SideBar/>

        <div class="container">
          <div class="page-inner">
           
            <h3 class="fw-bold mb-3">Markets</h3>
            <div class="row">
              <div class="col-md-4">
                <div class="card card-secondary">
                  <div class="card-body skew-shadow">
                    <h1>3,072</h1>
                    <h5 class="op-8">Total conversations</h5>
                    <div class="pull-right">
                      <h3 class="fw-bold op-8">88%</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card card-secondary bg-secondary-gradient">
                  <div class="card-body bubble-shadow">
                    <h1>188</h1>
                    <h5 class="op-8">Total Sales</h5>
                    <div class="pull-right">
                      <h3 class="fw-bold op-8">25%</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card card-secondary bg-secondary-gradient">
                  <div class="card-body curves-shadow">
                    <h1>12</h1>
                    <h5 class="op-8">New Users</h5>
                    <div class="pull-right">
                      <h3 class="fw-bold op-8">70%</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 class="fw-bold mb-3">Products from Store:</h3>
            <div class="row">
              <div class="col-md-4">
                <div class="card card-post card-round">
                  <img
                    class="card-img-top"
                    src="assets/img/blogpost.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <div class="d-flex">
                      <div class="avatar">
                        <img
                          src="assets/img/profile2.jpg"
                          alt="..."
                          class="avatar-img rounded-circle"
                        />
                      </div>
                      <div class="info-post ms-2">
                        <p class="username">Joko Subianto</p>
                        <p class="date text-muted">20 Jan 18</p>
                      </div>
                    </div>
                    <div class="separator-solid"></div>
                    <p class="card-category text-info mb-1">
                      <Link href="#">Design</Link>
                    </p>
                    <h3 class="card-title">
                      <Link href="#"> Best Design Resources This Week </Link>
                    </h3>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link href="#" class="btn btn-primary btn-rounded btn-sm"
                      >Read More</Link>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card card-post card-round">
                  <img
                    class="card-img-top"
                    src="assets/img/blogpost.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <div class="d-flex">
                      <div class="avatar">
                        <img
                          src="assets/img/profile2.jpg"
                          alt="..."
                          class="avatar-img rounded-circle"
                        />
                      </div>
                      <div class="info-post ms-2">
                        <p class="username">Joko Subianto</p>
                        <p class="date text-muted">20 Jan 18</p>
                      </div>
                    </div>
                    <div class="separator-solid"></div>
                    <p class="card-category text-info mb-1">
                      <Link href="#">Design</Link>
                    </p>
                    <h3 class="card-title">
                      <Link href="#"> Best Design Resources This Week </Link>
                    </h3>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link href="#" class="btn btn-primary btn-rounded btn-sm"
                      >Read More</Link>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card card-post card-round">
                  <img
                    class="card-img-top"
                    src="assets/img/blogpost.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <div class="d-flex">
                      <div class="avatar">
                        <img
                          src="assets/img/profile2.jpg"
                          alt="..."
                          class="avatar-img rounded-circle"
                        />
                      </div>
                      <div class="info-post ms-2">
                        <p class="username">Joko Subianto</p>
                        <p class="date text-muted">20 Jan 18</p>
                      </div>
                    </div>
                    <div class="separator-solid"></div>
                    <p class="card-category text-info mb-1">
                      <Link href="#">Design</Link>
                    </p>
                    <h3 class="card-title">
                      <Link href="#"> Best Design Resources This Week </Link>
                    </h3>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link href="#" class="btn btn-primary btn-rounded btn-sm"
                      >Read More</Link>
                  </div>
                </div>
              </div>
            </div>

            <h3 class="fw-bold mb-3">More From Store</h3>
            <div class="row">
              <div class="col-md-4">
                <div class="card card-post card-round">
                  <img
                    class="card-img-top"
                    src="assets/img/blogpost.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <div class="d-flex">
                      <div class="avatar">
                        <img
                          src="assets/img/profile2.jpg"
                          alt="..."
                          class="avatar-img rounded-circle"
                        />
                      </div>
                      <div class="info-post ms-2">
                        <p class="username">Joko Subianto</p>
                        <p class="date text-muted">20 Jan 18</p>
                      </div>
                    </div>
                    <div class="separator-solid"></div>
                    <p class="card-category text-info mb-1">
                      <Link href="#">Design</Link>
                    </p>
                    <h3 class="card-title">
                      <Link href="#"> Best Design Resources This Week </Link>
                    </h3>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link href="#" class="btn btn-primary btn-rounded btn-sm"
                      >Read More</Link>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card card-post card-round">
                  <img
                    class="card-img-top"
                    src="assets/img/blogpost.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <div class="d-flex">
                      <div class="avatar">
                        <img
                          src="assets/img/profile2.jpg"
                          alt="..."
                          class="avatar-img rounded-circle"
                        />
                      </div>
                      <div class="info-post ms-2">
                        <p class="username">Joko Subianto</p>
                        <p class="date text-muted">20 Jan 18</p>
                      </div>
                    </div>
                    <div class="separator-solid"></div>
                    <p class="card-category text-info mb-1">
                      <Link href="#">Design</Link>
                    </p>
                    <h3 class="card-title">
                      <Link href="#"> Best Design Resources This Week </Link>
                    </h3>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link href="#" class="btn btn-primary btn-rounded btn-sm"
                      >Read More</Link>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card card-post card-round">
                  <img
                    class="card-img-top"
                    src="assets/img/blogpost.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <div class="d-flex">
                      <div class="avatar">
                        <img
                          src="assets/img/profile2.jpg"
                          alt="..."
                          class="avatar-img rounded-circle"
                        />
                      </div>
                      <div class="info-post ms-2">
                        <p class="username">Joko Subianto</p>
                        <p class="date text-muted">20 Jan 18</p>
                      </div>
                    </div>
                    <div class="separator-solid"></div>
                    <p class="card-category text-info mb-1">
                      <Link href="#">Design</Link>
                    </p>
                    <h3 class="card-title">
                      <Link href="#"> Best Design Resources This Week </Link>
                    </h3>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link href="#" class="btn btn-primary btn-rounded btn-sm"
                      >Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
</div>
  )
}
