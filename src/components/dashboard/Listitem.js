import React from 'react';
import {EditIcon} from '@chakra-ui/icons';
import {NavLink} from "react-router-dom";

function Listitem() {
    return (
        <div>
<ul className="list pl0 mt0 measure center">
  <li
    className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <img className="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" />
      <div className="pl3 flex-auto">
        <span className="f6 db black-70">Jaiesh</span>
        <span className="f6 db black-70">Medium Hexagon, LLC</span>
      </div>
      <div>
        <a href="tel:" className="f6 link blue hover-dark-gray">+91 (999) 555-5555</a>
        <NavLink to="/edit/:id">
        <EditIcon ml="5"/>
        </NavLink>
      </div>
  </li>
  <li
    className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <img className="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-jxnblk.jpg" />
      <div className="pl3 flex-auto">
        <span className="f6 db black-70">Jatin</span>
        <span className="f6 db black-70">Large Circle, Inc</span>
      </div>
      <div>
        <a href="tel:" className="f6 link blue hover-dark-gray">+91 (786) 555-5555</a>
        <NavLink to="/edit/:id">
        <EditIcon ml="5"/>
        </NavLink>
      </div>
  </li>
</ul>
        </div>
    )
}

export default Listitem
