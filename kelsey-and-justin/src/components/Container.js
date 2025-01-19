import React, { useEffect, useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Travel from './pages/Travel';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';
import ToDo from './pages/ToDo';
import RSVP from './pages/RSVP';

export default function Container() {
  const [currentPage, setCurrentPage] = useState('Home');
  useEffect(() => {
    if(document.location.hash){
      setCurrentPage(document.location.hash[1].toUpperCase() + document.location.hash.substring(2))
    }
  },[])

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Schedule') {
      return <Schedule />;
    }
    if (currentPage === 'Travel') {
      return <Travel />;
    }
    if (currentPage === 'Gallery'){
      return <Gallery />
    }
    if (currentPage === 'FAQ'){
      return <FAQ />
    }
    if (currentPage === 'ToDo'){
      return <ToDo />
    }
    return <RSVP />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='container'>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
