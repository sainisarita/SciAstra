import React from 'react';
import Header from './components/Header/Header';
import MainBanner from './components/MainBanner/MainBanner';
import Mentor from './components/Mentor/Mentor';
import MentorAndAdvisor from './components/MentorAndAdvisor/MentorAndAdvisor';
import University from './components/University/University';
import { MentorList,MentorsData,UniversityList } from './components/Data/data';

export default function App() {
    return(
        <>
<Header/>
<MainBanner/>
<University UniversityList={UniversityList}/>
<Mentor MentorList={MentorList}/>
<MentorAndAdvisor MentorsData={MentorsData}/>

</>
    );

}


