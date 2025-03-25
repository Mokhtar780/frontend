// App.tsx
import React from "react";
// import { Button } from 'react-bootstrap';
// استيراد ملفات CSS
import "./assets/vendor/fonts/boxicons.css";
import "./assets/vendor/fonts/fontawesome.css";
import "./assets/vendor/fonts/flag-icons.css";
import "./assets/css/css2.css";
import "./assets/vendor/css/rtl/core.css";
import "./assets/vendor/css/rtl/theme-default.css";
import "./assets/css/demo.css";
import "./assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "./assets/vendor/libs/typeahead-js/typeahead.css";
import "./assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css";
import "./assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css";
import "./assets/vendor/libs/datatables-buttons-bs5/buttons.bootstrap5.css";
import "./assets/vendor/libs/select2/select2.css";
import "./assets/vendor/libs/formvalidation/dist/css/formValidation.min.css";
import "./assets/vendor/libs/dropzone/dropzone.css";

// استيراد ملفات JS
import "./assets/vendor/js/helpers.js";
import "./assets/vendor/js/template-customizer.js";
import "./assets/js/config.js";
import "./assets/vendor/libs/jquery/jquery.js";
import "./assets/vendor/libs/popper/popper.js";
import "./assets/vendor/js/bootstrap.js";
import "./assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js";
import "./assets/vendor/libs/hammer/hammer.js";
import "./assets/vendor/libs/i18n/i18n.js";
import "./assets/vendor/libs/typeahead-js/typeahead.js";
import "./assets/vendor/libs/rateyo/rateyo.js";
import "./assets/js/extended-ui-star-ratings.js";
import "./assets/vendor/libs/sweetalert2/sweetalert2.js";
import "./assets/js/app-user-list.js";
import "./assets/js/extended-ui-sweetalert2.js";
import "./assets/vendor/libs/moment/moment.js";
import "./assets/vendor/libs/datatables/jquery.dataTables.js";
import "./assets/vendor/libs/datatables-bs5/datatables-bootstrap5.js";
import "./assets/vendor/libs/datatables-responsive/datatables.responsive.js";
import "./assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.js";
import "./assets/vendor/libs/datatables-buttons/datatables-buttons.js";
import "./assets/vendor/libs/datatables-buttons-bs5/buttons.bootstrap5.js";
import "./assets/vendor/libs/jszip/jszip.js";
import "./assets/vendor/libs/pdfmake/pdfmake.js";
import "./assets/vendor/libs/datatables-buttons/buttons.html5.js";
import "./assets/vendor/libs/datatables-buttons/buttons.print.js";
import "./assets/vendor/libs/select2/select2.js";
import "./assets/vendor/libs/formvalidation/dist/js/FormValidation.min.js";
import "./assets/vendor/libs/formvalidation/dist/js/plugins/Bootstrap5.min.js";
import "./assets/vendor/libs/formvalidation/dist/js/plugins/AutoFocus.min.js";
import "./assets/vendor/libs/cleavejs/cleave.js";
import "./assets/vendor/libs/cleavejs/cleave-phone.js";
import "./assets/vendor/js/menu.js";
import "./assets/vendor/libs/dropzone/dropzone.js";
import "./assets/js/forms-file-upload.js";
import "./assets/vendor/libs/animate-on-scroll/animate-on-scroll.js";
import "./assets/js/main.js";
import "./assets/js/extended-ui-timeline.js";
import "./assets/js/forms-extras.js";
import "./assets/js/ui-modals.js";
import "./assets/js/ui-navbar.js";
import "./assets/vendor/js/dropdown-hover.js";
import "./assets/vendor/js/mega-dropdown.js";
import "./assets/vendor/libs/flatpickr/flatpickr.js";
import "./assets/js/form-layouts.js";
import CustomNavbar from "./CustomNavbar.js";
import Sidebar from "./Sidebar.js";

const Layout: React.FC = () => {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container ">
     <Sidebar />
        <div className="layout-page">
          <CustomNavbar />
          <div className="content-wrapper"></div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
