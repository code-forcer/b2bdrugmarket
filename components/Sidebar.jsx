import React from "react"
import Link from "next/link"
export default function SideBar(){
  
   return (
      
    <div class="sidebar sidebar-style-2" data-background-color="dark">
      <div class="sidebar-logo">
    
        <div class="logo-header" data-background-color="dark">
          <Link href="/dashboard" class="logo">
            {/* <img
              src="assets/img/kaiadmin/logo_light.svg"
              alt="navbar brand"
              class="navbar-brand"
              height="20"
            /> */}
            <h3 style={{color:'#fff'}}>B2BDrugStore</h3>
          </Link>
          <div class="nav-toggle">
            <button class="btn btn-toggle toggle-sidebar">
              <i class="gg-menu-right"></i>
            </button>
            <button class="btn btn-toggle sidenav-toggler">
              <i class="gg-menu-left"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="sidebar-wrapper scrollbar scrollbar-inner">
        <div class="sidebar-content">
          <ul class="nav nav-secondary">
            <li class="nav-item">
              <Link
                data-bs-toggle="collapse"
                href="#dashboard"
                class="collapsed"
                aria-expanded="false"
              >
              <i class="fas fa-home"></i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li class="nav-section">
            <span class="sidebar-mini-icon">
              <i class="fa fa-ellipsis-h"></i>
            </span>
            <h4 class="text-section">Role::</h4>
          </li>
          <li class="nav-item">
            <Link data-bs-toggle="collapse" href="#base">
              <i class="fas fa-layer-group"></i>
              <p>Orders</p>
              <span class="badge badge-primary">4</span>
              <span class="caret"></span>
            </Link>
            <div class="collapse" id="base">
              <ul class="nav nav-collapse">
                <li>
                  <Link href="/ordertest">
                    <span class="sub-item">Tracking</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ordertest">
                    <span class="sub-item">Notifications</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ordertest">
                    <span class="sub-item">Chats</span>
                  </Link>
                </li>
               
              </ul>
            </div>
          </li>
            <li class="nav-item active submenu">
              <Link data-bs-toggle="collapse" href="#sidebarLayouts">
                <i class="fas fa-th-list"></i>
                <p>Settings</p>
                <span class="caret"></span>
              </Link>
              <div class="collapse show" id="sidebarLayouts">
                <ul class="nav nav-collapse">
                  <li class="active">
                    <Link href="/settings">
                      <span class="sub-item">Profile update</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/settings">
                      <span class="sub-item">Kyc</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <Link data-bs-toggle="collapse" href="#forms">
                <i class="fas fa-pen-square"></i>
                <p>Market</p>
                <span class="caret"></span>
              </Link>
              <div class="collapse" id="forms">
                <ul class="nav nav-collapse">
                  <li>
                    <Link href="/market">
                      <span class="sub-item">Finance</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/market">
                      <span class="sub-item">Products</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <Link data-bs-toggle="collapse" href="#tables">
                <i class="fas fa-table"></i>
                <p>Commission</p>
                <span class="caret"></span>
              </Link>
              <div class="collapse" id="tables">
                <ul class="nav nav-collapse">
                  <li>
                    <Link href="/commission">
                      <span class="sub-item">Basic Table</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/commission">
                      <span class="sub-item">Datatables</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <Link data-bs-toggle="collapse" href="#maps">
                <i class="fas fa-map-marker-alt"></i>
                <p>Pharmacy List</p>
                <span class="caret"></span>
              </Link>
              <div class="collapse" id="maps">
                <ul class="nav nav-collapse">
                  <li>
                    <Link href="/list">
                      <span class="sub-item">Google Maps</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="maps/jsvectormap.html">
                      <span class="sub-item">Jsvectormap</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <Link data-bs-toggle="collapse" href="#charts">
                <i class="far fa-chart-bar"></i>
                <p>Reviews</p>
                <span class="caret"></span>
              </Link>
              <div class="collapse" id="charts">
                <ul class="nav nav-collapse">
                  <li>
                    <Link href="/reviews">
                      <span class="sub-item">Chart Js</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/review">
                      <span class="sub-item">Sparkline</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <Link data-bs-toggle="collapse" href="#submenu">
                <i class="fas fa-key"></i>
                <p>Logout</p>
                {/* onclick={handleLogout()} */}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
  }