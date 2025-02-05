import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1 className='nav-header fancy fancy-names fancy-names-nav'>KELSEY & JUSTIN</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#timeline"
            onClick={() => handlePageChange('Timeline')}
            className={currentPage === 'Timeline' ? 'nav-link active' : 'nav-link'}
          >
            Timeline
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#travel"
            onClick={() => handlePageChange('Travel')}
            className={currentPage === 'Travel' ? 'nav-link active' : 'nav-link'}
          >
            Travel
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#gallery"
            onClick={() => handlePageChange('Gallery')}
            className={currentPage === 'Gallery' ? 'nav-link active' : 'nav-link'}
          >
            Gallery
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#faq"
            onClick={() => handlePageChange('FAQ')}
            className={currentPage === 'FAQ' ? 'nav-link active' : 'nav-link'}
          >
            FAQ
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#todo"
            onClick={() => handlePageChange('ToDo')}
            className={currentPage === 'ToDo' ? 'nav-link active' : 'nav-link'}
          >
            Things To Do
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#rsvp"
            onClick={() => handlePageChange('RSVP')}
            className={currentPage === 'RSVP' ? 'nav-link active' : 'nav-link'}
          >
            RSVP
          </a>
        </li>
      </ul>
    </header>
  );
}

export default NavTabs;
