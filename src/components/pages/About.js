import React from 'react';
// import image from '../../assets/images/view-green-913w.webp';

export default function About() {

  const teamProfile = [
    {
      id: 1,
      name: 'Joe',
      profession: 'CEO',
      profileDescription: 'Joe founded Classic City Green Solutions in 2023 with a passion and desire to provide green energy solutions to his customers.',
      profilePic: require('../../assets/images/solar-panel-vector.png')
    },
    {
      id: 2,
      name: 'Eliza',
      profession: 'COO',
      profileDescription: '',
      profilePic: require('../../assets/images/solar-panel-vector.png')
    },
    {
      id: 3,
      name: 'Alex',
      profession: 'Marketing',
      profileDescription: '',
      profilePic: require('../../assets/images/solar-panel-vector.png')
    },
  ]

  return (
    <div className='about-page'>
      <h1>Meet the Team</h1>
        <div className='team-profile-list'>
          {teamProfile.map((data) => 
          
          <div key={data.id} className='team-profile'>
            <div className='team-profile-content'>
              <ul>
                <li>
                  <img
                    src={data.profilePic}
                    alt="About Thumbnail"
                    className="team-profile-thumbnail"
                  />
                </li>
                <li className='name'><b>{data.name}</b></li>
                <li className='profession'>{data.profession}</li>
                {/* <li className='profileDescription'>{data.profileDescription}</li> */}
              </ul>
            </div>
          </div>

          )}
        </div>
    </div>
  );
}
