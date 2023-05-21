import { BiCopyright } from "react-icons/bi";

const FooterCustom = () => {
  return (
    <div className="d-flex footer align-items-center">
      <p className="ps-4 d-flex flex-column flex-md-row footer align-items-center">
        <BiCopyright />
        <span>
          &nbsp; Copyright 2023 &nbsp; Prestitoilluminato.it &nbsp; IT14068211003
        </span>
        <span>
          <strong>            
            &nbsp;&nbsp; | &nbsp;&nbsp; <span className="footerLink">Trasparenza</span> &nbsp;&nbsp; | &nbsp;&nbsp;
            <span className="footerLink">Privacy</span> &nbsp;&nbsp; | &nbsp;&nbsp; <span className="footerLink">Cookies</span>
          </strong>
        </span>
      </p>
    </div>
  );
};

export default FooterCustom;
