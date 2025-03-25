import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaHome, FaUsers, FaHospital, FaLaptop, FaBookOpen } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
      style={{
        borderLeft: "1px solid #00cfdd",
        borderRight: "1px solid #00cfdd",
      }}
    >
      <div className="app-brand demo" style={{ borderBottom: "1px solid #00cfdd", height: "62px" }}>
        <span className="app-brand-logo demo">
          <img src="./src/assets/svg/flags/yemen.svg" className="img" alt="Auth Cover Bg color" />
        </span>
        <span className="app-brand-text demo menu-text fw-bold ms-2">
          <small>القائمة</small>
        </span>
        <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto">
          <i className="bx menu-toggle-icon fs-4 d-none d-xl-block align-middle" style={{ color: "#00cfdd" }}></i>
          <i className="bx bx-x bx-sm d-xl-none d-block align-middle" style={{ color: "#00cfdd" }}></i>
        </a>
      </div>
      <div className="menu-divider mt-0"></div>
      <div className="menu-inner-shadow"></div>

      <Nav className="menu-inner py-1 fontstyle">
        {/* Dashboards */}
        <Nav.Item className="menu-item">
          <Nav.Link className="menu-link fontstyle">
            <FaHome className="menu-icon tf-icons text-info" style={{ color: "#00cfdd" }} />
            <div> قائمة رئيسية </div>
          </Nav.Link>
        </Nav.Item>

        {/* User Management */}
        <Nav.Item className="menu-item fontstyle">
          <Nav.Link href="javascript:void(0);" className="menu-link menu-toggle fontstyle">
            <FaUsers className="menu-icon tf-icons text-info" style={{ color: "#00cfdd" }} />
            <span> إدارة المستخدمين </span>
          </Nav.Link>
          <Nav className="menu-sub">
            <Nav.Item className="menu-item">
              <Nav.Link className="menu-link text-info"> إدارة المستخدمين </Nav.Link>
            </Nav.Item>
            <Nav.Item className="menu-item">
              <Nav.Link className="menu-link text-info"> العمليات من قبل المستخدمين </Nav.Link>
            </Nav.Item>
          </Nav>
        </Nav.Item>

        {/* Event Management */}
        <Nav.Item className="menu-item">
          <Nav.Link href="javascript:void(0);" className="menu-link menu-toggle fontstyle">
            <FaHospital className="menu-icon tf-icons text-info" />
            <div> إدارة الفعاليات </div>
          </Nav.Link>
          <Nav className="menu-sub">
            <Nav.Item className="menu-item">
              <Nav.Link className="menu-link text-info"> أنشاء فعالية </Nav.Link>
            </Nav.Item>
            <Nav.Item className="menu-item">
              <Nav.Link className="menu-link text-info"> الفرص الأستثمارية </Nav.Link>
            </Nav.Item>
            <Nav.Item className="menu-item">
              <Nav.Link className="menu-link text-info"> الفئة المستهدفة </Nav.Link>
            </Nav.Item>
            <Nav.Item className="menu-item">
              <Nav.Link className="menu-link text-info"> أعداد اللجة التحضيرية </Nav.Link>
            </Nav.Item>
            <Nav.Item className="menu-item">
              <Nav.Link className="menu-link text-info"> أعداد طاقم العمل </Nav.Link>
            </Nav.Item>
            <Nav.Item className="menu-item">
              <Nav.Link className="menu-link text-info"> أعداد الموازنة </Nav.Link>
            </Nav.Item>
          </Nav>
        </Nav.Item>

        {/* Site Content Management */}
        <Nav.Item className="menu-item">
          <Nav.Link href="javascript:void(0);" className="menu-link menu-toggle fontstyle">
            <FaLaptop className="menu-icon tf-icons text-info" />
            <div> إدارة محتوى الموقع </div>
          </Nav.Link>
          <Nav className="menu-sub">
            <Nav.Item className="menu-item">
              <Nav.Link className="menu-link text-info"> أضافة الفعالية الى الموقع </Nav.Link>
            </Nav.Item>
            <Nav.Item className="menu-item">
              <Nav.Link className="menu-link text-info"> أضافة الأخبار الى الموقع </Nav.Link>
            </Nav.Item>
            <Nav.Item className="menu-item">
              <Nav.Link className="menu-link text-info"> مراجعة التقييمات </Nav.Link>
            </Nav.Item>
          </Nav>
        </Nav.Item>

        {/* Reports */}
        <Nav.Item className="menu-item">
          <Nav.Link className="menu-link fontstyle">
            <FaBookOpen className="menu-icon tf-icons text-info" />
            <div> التقارير </div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </aside>
  );
};

export default Sidebar;