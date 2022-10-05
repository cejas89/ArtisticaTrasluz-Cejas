import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";


export const Footer = () => {
  const facebook = `https://www.facebook.com/artisticatrasluz1`;
  const twitter = `https://twitter.com/`;
  const instagram = `https://www.instagram.com/artisticatrasluz/`;

  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top mt-10">
        <div className="col-md-4 d-flex align-items-center">
          <a className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"></a>
          <span className="mb-3 mb-md-0 text-muted">© 2022 Artistica Trasluz</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href={instagram} target="_blank">
              <BsInstagram/>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href={facebook} target="_blank">
              <BsFacebook />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href={twitter} target="_blank">
             <BsTwitter/>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
