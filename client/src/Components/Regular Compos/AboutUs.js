import React from 'react';
import Nav from '../Reusable Compos/Nav';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Aayush Kandel",
      image: 'https://assets.spaceappschallenge.org/media/images/Aayush_TrACXml.2e16d0ba.fill-64x64.jpg', 
      description: "Backend developer."
    },
    {
      name: "Mayank Bhusal",
      image: "https://assets.spaceappschallenge.org/media/images/IMG_20231219_185159.2e16d0ba.fill-64x64.jpg", 
      description: "Frontend developer"
    },
    {
      name: "Nishant Gyawali",
      image: "https://assets.spaceappschallenge.org/media/images/NA.2e16d0ba.fill-64x64.jpg", 
      description: "Media and multimedia handeling"
    },
    {
      name: "Anuska Pantha",
      image: "https://assets.spaceappschallenge.org/media/images/anuska_photo_DAtfbbl.2e16d0ba.fill-64x64.jpg", 
      description: "Media and presentation handeling"
    },
    {
      name: "Bishes Jung Karki",
      image: "https://assets.spaceappschallenge.org/media/images/ppu.2e16d0ba.fill-64x64.jpg", 
      description: "Presentation development and handeling."
    }
  ];

  return (
    <>
    
    <div className="about-us-section ">
   <div className="nav-center">   {/*check the dc */}
     <div className="nav-sec default-margin"><Nav/></div>
     </div>
       <br />
      
      <h1 className="text-center text-white display-4 mb-5 mt-5">Meet Our Team | PLASMON </h1>
      <div className="team-list">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} className="member-photo" />
            <div className="member-info">
              <h3 className="text-white">{member.name}</h3>
              <p className="text-white">{member.description}</p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/aayush-kandel-449579260/" className="text-white" target='_blank'>LinkedIn</a>
                <a href="https://github.com/Axn-Playz" className="text-white" target='_blank'>GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default AboutUs;
