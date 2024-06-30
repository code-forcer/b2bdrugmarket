import React from 'react'
import SideBar from '../components/Sidebar'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Link from "next/link"
export default function ordertest() {
  return (
  
    <div class="main-panel">
    <NavBar/>
    <SideBar/>
    <div class="container">
      <div class="page-inner">
        
        <h3 class="fw-bold mb-3">Order Management Board</h3>
        <div class="row">
          <div class="col-sm-6 col-md-3">
            <div class="card card-stats card-primary card-round">
              <div class="card-body">
                <div class="row">
                  <div class="col-5">
                    <div class="icon-big text-center">
                      <i class="fas fa-users"></i>
                    </div>
                  </div>
                  <div class="col-7 col-stats">
                    <div class="numbers">
                      <p class="card-category">Visitors</p>
                      <h4 class="card-title">1,294</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="card card-stats card-info card-round">
              <div class="card-body">
                <div class="row">
                  <div class="col-5">
                    <div class="icon-big text-center">
                      <i class="fas fa-user-check"></i>
                    </div>
                  </div>
                  <div class="col-7 col-stats">
                    <div class="numbers">
                      <p class="card-category">Subscribers</p>
                      <h4 class="card-title">1303</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="card card-stats card-success card-round">
              <div class="card-body">
                <div class="row">
                  <div class="col-5">
                    <div class="icon-big text-center">
                      <i class="fas fa-chart-pie"></i>
                    </div>
                  </div>
                  <div class="col-7 col-stats">
                    <div class="numbers">
                      <p class="card-category">Sales</p>
                      <h4 class="card-title">$ 1,345</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="card card-stats card-secondary card-round">
              <div class="card-body">
                <div class="row">
                  <div class="col-5">
                    <div class="icon-big text-center">
                      <i class="far fa-check-circle"></i>
                    </div>
                  </div>
                  <div class="col-7 col-stats">
                    <div class="numbers">
                      <p class="card-category">Order</p>
                      <h4 class="card-title">576</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        
       

        
        <div class="row">
          <div class="col-sm-6 col-lg-3">
            <div class="card p-3">
              <div class="d-flex align-items-center">
                <span class="stamp stamp-md bg-secondary me-3">
                  <i class="fa fa-dollar-sign"></i>
                </span>
                <div>
                  <h5 class="mb-1">
                    <b
                      ><Link href="#">132 <small>Sales</small></Link></b
                    >
                  </h5>
                  <small class="text-muted">12 waiting payments</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="card p-3">
              <div class="d-flex align-items-center">
                <span class="stamp stamp-md bg-success me-3">
                  <i class="fa fa-shopping-cart"></i>
                </span>
                <div>
                  <h5 class="mb-1">
                    <b
                      ><Link href="#">78 <small>Orders</small></Link></b
                    >
                  </h5>
                  <small class="text-muted">32 shipped</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="card p-3">
              <div class="d-flex align-items-center">
                <span class="stamp stamp-md bg-danger me-3">
                  <i class="fa fa-users"></i>
                </span>
                <div>
                  <h5 class="mb-1">
                    <b
                      ><Link href="#">1,352 <small>Members</small></Link></b
                    >
                  </h5>
                  <small class="text-muted">163 registered today</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="card p-3">
              <div class="d-flex align-items-center">
                <span class="stamp stamp-md bg-warning me-3">
                  <i class="fa fa-comment-alt"></i>
                </span>
                <div>
                  <h5 class="mb-1">
                    <b
                      ><Link href="#">132 <small>Comments</small></Link></b
                    >
                  </h5>
                  <small class="text-muted">16 waiting</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 class="fw-bold mb-3">Notifications</h3>
        <div class="row">
          <div class="col-md-12">
            <ul class="timeline">
              <li>
                <div class="timeline-badge">
                  <i class="far fa-paper-plane"></i>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Mussum ipsum cacilds</h4>
                    <p>
                      <small class="text-muted"
                        ><i class="far fa-paper-plane"></i> 11 hours ago via
                        Twitter</small
                      >
                    </p>
                  </div>
                  <div class="timeline-body">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the
                      blind texts.
                    </p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-badge warning">
                  <i class="far fa-bell"></i>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Mussum ipsum cacilds</h4>
                  </div>
                  <div class="timeline-body">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the
                      blind texts.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="timeline-badge danger">
                  <i class="icon-close"></i>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Mussum ipsum cacilds</h4>
                  </div>
                  <div class="timeline-body">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the
                      blind texts.
                    </p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Mussum ipsum cacilds</h4>
                  </div>
                  <div class="timeline-body">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the
                      blind texts.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="timeline-badge info">
                  <i class="icon-tag"></i>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Mussum ipsum cacilds</h4>
                  </div>
                  <div class="timeline-body">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the
                      blind texts.
                    </p>
                    <hr />
                    <div class="btn-group dropdown">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <span class="btn-label">
                          <i class="fa fa-cog"></i>
                        </span>
                      </button>
                      <ul class="dropdown-menu" role="menu">
                        <li>
                          <Link class="dropdown-item" href="#">Action</Link>
                          <Link class="dropdown-item" href="#"
                            >Another action</Link>
                          <div class="dropdown-divider"></div>
                          <Link class="dropdown-item" href="#"
                            >Something else here</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Mussum ipsum cacilds</h4>
                  </div>
                  <div class="timeline-body">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the
                      blind texts.
                    </p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-badge success">
                  <i class="icon-credit-card"></i>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Mussum ipsum cacilds</h4>
                  </div>
                  <div class="timeline-body">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the
                      blind texts.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        
       
        <h3 class="fw-bold mb-3">Chats Messages</h3>
        <div class="row">
          <div class="col-md-4">
          
            <div class="card card-round">
              <div class="card-body">
                <div class="card-title fw-mediumbold">Suggested People</div>
                <div class="card-list">
                  <div class="item-list">
                    <div class="avatar">
                      <img
                        src="assets/img/jm_denis.jpg"
                        alt="..."
                        class="avatar-img rounded-circle"
                      />
                    </div>
                    <div class="info-user ms-3">
                      <div class="username">Jimmy Denis</div>
                      <div class="status">Graphic Designer</div>
                    </div>
                    <button
                      class="btn btn-icon btn-primary btn-round btn-xs"
                    >
                      <i class="fa fa-plus"></i>
                    </button>
                  </div>
                  <div class="item-list">
                    <div class="avatar">
                      <img
                        src="assets/img/chadengle.jpg"
                        alt="..."
                        class="avatar-img rounded-circle"
                      />
                    </div>
                    <div class="info-user ms-3">
                      <div class="username">Chad</div>
                      <div class="status">CEO Zeleaf</div>
                    </div>
                    <button
                      class="btn btn-icon btn-primary btn-round btn-xs"
                    >
                      <i class="fa fa-plus"></i>
                    </button>
                  </div>
                  <div class="item-list">
                    <div class="avatar">
                      <img
                        src="assets/img/talha.jpg"
                        alt="..."
                        class="avatar-img rounded-circle"
                      />
                    </div>
                    <div class="info-user ms-3">
                      <div class="username">Talha</div>
                      <div class="status">Front End Designer</div>
                    </div>
                    <button
                      class="btn btn-icon btn-primary btn-round btn-xs"
                    >
                      <i class="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
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
