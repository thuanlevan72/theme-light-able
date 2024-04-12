import NavBar from '@views/Landing/Navbar'
import HomeSection from '@views/LivePreview/HomeSection'
import React from 'react'
// import Animate from 'animate.css-react'

// css
import "@assets/scss/landing.scss";
// import "@assets/scss/style.scss";
// import 'animate.css/animate.css'

import PlateForm from '@views/LivePreview/PlateForm';
import LayoutsDemo from '@views/LivePreview/LayoutsDemo';
import PageVersions from '@views/LivePreview/PageVersions';
import AppsPage from '@views/LivePreview/AppsPage';
import ImportantPage from '@views/LivePreview/ImportantPage';
import KeyFeatures from '@views/LivePreview/KeyFeatures';
import Testimonial from '@views/LivePreview/Testimonial';
import WhyPage from '@views/LivePreview/WhyPage';
import Numbers from '@views/LivePreview/Numbers';
import Companies from '@views/LivePreview/Companies';
import Footerpage from '@views/LivePreview/Footerpage';

const LivePreview = () => {
    return (
        <React.Fragment>
            <header id="home">

                {/* navbar */}
                <NavBar />

                {/* Home */}
                <HomeSection />

            </header>

            {/* plateform */}
            <PlateForm />

            {/* layout demos */}
            <LayoutsDemo />


            {/* apps */}
            <AppsPage />

            {/* Important Pages */}
            <ImportantPage />
            
            {/* page versions */}
            <PageVersions />

            {/* Key Features */}
            <KeyFeatures />

            {/* Teatimonials */}
            <Testimonial />

            {/* Why */}
            <WhyPage />

            {/* numbers */}
            <Numbers />

            {/* companies */}
            <Companies />

            {/* footer */}
            <Footerpage />
        </React.Fragment>
    )
}

export default LivePreview