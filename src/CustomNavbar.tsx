// import React from 'react';
import React from 'react-bootstrap';
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import { RiMenu3Line } from 'react-icons/ri';
import { BsBell, BsGrid, BsPlusCircle, BsPerson, BsGear, BsCreditCard, BsEnvelopeOpen } from 'react-icons/bs';

const CustomNavbar = () => {
  return (
    <Navbar expand="xl" className="bg-navbar-theme" style={{ borderBottom: "1px solid #00cfdd;" }}>
      <div className="container-fluid">
        <Navbar.Toggle aria-controls="navbar-collapse" className="d-xl-none" />
        <Navbar.Brand href="javascript:void(0)">
          <RiMenu3Line style={{ color: "#00cfdd" }} />
        </Navbar.Brand>

        <Navbar.Collapse id="navbar-collapse">
          <Nav className="ms-auto flex-row align-items-center">
            {/* Language Dropdown */}
            <NavDropdown title={<i className="flag-icon flag-icon-us flag-icon-squared fs-3 rounded-circle me-1"></i>} id="language-dropdown" className="me-2 me-xl-0">
              <NavDropdown.Item href="javascript:void(0);" data-language="en">
                <i className="flag-icon flag-icon-ye flag-icon-squared fs-4 rounded-circle me-1"></i>
                Arabic & اللغة العربية
              </NavDropdown.Item>
              <NavDropdown.Item href="javascript:void(0);" data-language="en">
                <i className="flag-icon flag-icon-us flag-icon-squared fs-4 rounded-circle me-1"></i>
                English & الانجليزي
              </NavDropdown.Item>
            </NavDropdown>

            {/* Style Switcher */}
            <Nav.Item className="me-2 me-xl-0">
              <Nav.Link href="javascript:void(0);">
                <BsPlusCircle style={{ color: "#00cfdd" }} />
              </Nav.Link>
            </Nav.Item>

            {/* Quick Links Dropdown */}
            <NavDropdown title={<BsGrid style={{ color: "#00cfdd" }} />} id="quick-links-dropdown" className="me-2 me-xl-0">
              <div className="dropdown-menu-header border-bottom">
                <div className="dropdown-header d-flex align-items-center py-3">
                  <h5 className="text-body me-auto mb-0">أختصارات</h5>
                  <Nav.Link href="javascript:void(0)" title="Add shortcuts">
                    <BsPlusCircle style={{ color: "#00cfdd" }} />
                  </Nav.Link>
                </div>
              </div>
              <div className="dropdown-shortcuts-list scrollable-container">
                {/* Add your shortcuts here */}
                <NavDropdown.Item href="app-calendar.html">التقويم</NavDropdown.Item>
                <NavDropdown.Item href="pages-help-center-landing.html">مساعدة</NavDropdown.Item>
              </div>
            </NavDropdown>

            {/* Notifications Dropdown */}
            <NavDropdown title={<><BsBell style={{ color: "#00cfdd" }} /><span className="badge rounded-pill badge-notifications bg-danger">1</span></>} id="notifications-dropdown" className="me-3 me-xl-2">
              <div className="dropdown-menu-header border-bottom">
                <div className="dropdown-header d-flex align-items-center py-3">
                  <h5 className="text-body me-auto mb-0">الرسائل</h5>
                  <Nav.Link href="javascript:void(0)">
                    <BsEnvelopeOpen style={{ color: "#00cfdd" }} />
                  </Nav.Link>
                </div>
              </div>
              <NavDropdown.Item>
                <div className="d-flex">
                  <img src="public/images/img/My-image.jpg" alt="" className="w-px-40 h-auto rounded-circle me-3" />
                  <div>
                    <h6 className="mb-1">هاشم الريمي</h6>
                    <p className="mb-0">كيفك ياشيخ مختار</p>
                    <small className="text-muted">صديق الجامعة</small>
                  </div>
                </div>
              </NavDropdown.Item>
            </NavDropdown>

            {/* User Dropdown */}
            <NavDropdown title={<img src="./src/assets/img/avatars/my4.jpg" alt="" className="rounded-circle" />} id="user-dropdown">
              <NavDropdown.Item href="pages-account-settings-account.html">
                <div className="d-flex">
                  <img src="./src/assets/img/avatars/hashem.jpg" alt="" className="rounded-circle me-3" />
                  <div>
                    <span className="lh-1 d-block fw-semibold">مختار حميد</span>
                    <small>مشرف</small>
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="3"><BsPerson className="me-2" />من أنا</NavDropdown.Item>
              <NavDropdown.Item href="pages-account-settings-account.html"><BsGear className="me-2" />الضبط</NavDropdown.Item>
              <NavDropdown.Item href="pages-help-center-landing.html"><BsEnvelopeOpen className="me-2" />مساعدة</NavDropdown.Item>
              <NavDropdown.Item href="auth-login-cover.html"><i className="bx bx-power-off me-2"></i>المغادرة</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;