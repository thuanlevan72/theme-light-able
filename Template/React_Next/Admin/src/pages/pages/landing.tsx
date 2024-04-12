import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
// css
import "../../assets/scss/landing.scss";
//import images
import imgHeaderBg from "@assets/images/landing/img-header-bg.svg";
import NavBar from '@views/Landing/Navbar';
import FriendsWithLight from '@views/Landing/FriendsWithLight';
import HappyCustomer from '@views/Landing/HappyCustomer';
import UIBoard from '@views/Landing/UIBoard';
import Product from '@views/Landing/Product';
import Platform from '@views/Landing/Platform';
import Comminuties from '@views/Landing/Comminuties';
import Pricing from '@views/Landing/Pricing';
import Widgets from '@views/Landing/Widgets';
import KeyFeatures from '@views/Landing/KeyFeatures';
import Banner from '@views/Landing/Banner';
import CompaniesApps from '@views/Landing/CompaniesApps';
import Footer from '@views/Landing/Footer';
import WhyLightAble from '@views/Landing/WhyLightAble';
import RightCustomizer from '@layout/RightCustomizer';
import { changeThemeLayout, changeThemeMode, changeThemePreset } from 'src/toolkit/thunk';
import { changeLayoutTheme, changeSidebarTheme, changeSidebarThemeCaptions } from 'src/toolkit/themeLayouts/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const landing = () => {

  const dispatch = useDispatch<any>();

  const selectLayoutProperties = createSelector(
    (state: any) => state.Theme,
    (layout: any) => ({
      themeMode: layout.themeMode,
      layoutTheme: layout.layoutTheme,
      themePreset: layout.themePreset,
      themeLayout: layout.themeLayout,
      sidebarTheme: layout.sidebarTheme,
      sidebarThemeCaptions: layout.sidebarThemeCaptions,
    })
  );
  // Inside your component
  const {
    themeMode,
    themePreset,
    layoutTheme,
    themeLayout,
    sidebarTheme,
    sidebarThemeCaptions,
  } = useSelector(selectLayoutProperties);

  /*
    layout settings
    */
  useEffect(() => {
    if (
      themeMode ||
      layoutTheme ||
      themePreset ||
      themeLayout ||
      sidebarTheme ||
      sidebarThemeCaptions
    ) {
      dispatch(changeThemeMode(themeMode));
      dispatch(changeLayoutTheme(layoutTheme));
      dispatch(changeThemePreset(themePreset));
      dispatch(changeThemeLayout(themeLayout));
      dispatch(changeSidebarTheme(sidebarTheme));
      dispatch(changeSidebarThemeCaptions(sidebarThemeCaptions));
    }
  }, [
    themeMode,
    layoutTheme,
    themePreset,
    themeLayout,
    sidebarTheme,
    sidebarThemeCaptions,
    dispatch
  ]);

  const [isLayoutWidth, setLayoutWidth] = useState(false);

  const handleChangeLayoutWidth = (value: boolean) => {
    setLayoutWidth(value);
  };

  return (
    <React.Fragment>
      <header id="home">
        <NavBar />

        <Image src={imgHeaderBg} alt="img" className="img-fluid img-header-bg position-absolute" />

        <FriendsWithLight />
      </header>

      {/* <!-- [ Key features ] --> */}
      <HappyCustomer />

      {/*  <!-- [ UI Board ] --> */}
      <UIBoard />

      {/*  <!-- [ product ] --> */}
      <Product />

      {/* <!-- [ platform ] --> */}
      <Platform />

      {/*  <!-- [ comminuties ] --> */}
      <Comminuties />

      {/* <!-- [ why ] --> */}
      <WhyLightAble />

      {/*  <!-- [ Pricing ] --> */}
      <Pricing />

      {/*  <!-- [ widgets ] --> */}
      <Widgets />

      {/*  <!-- [ Key features ] --> */}
      <KeyFeatures />

      {/* <!-- [ Banner ] --> */}
      <Banner />

      {/*  <!-- [ companies apps ] --> */}
      <CompaniesApps />

      {/*  <!-- [ footer apps ]  --> */}
      <Footer />

      <RightCustomizer
        isLanding={true}
        themeMode={themeMode}
        changeThemeMode={changeThemeMode}
        themePreset={themePreset}
        changeThemePreset={changeThemePreset}
        themeLayout={themeLayout}
        changeThemeLayout={changeThemeLayout}
        isLayoutWidth={isLayoutWidth}
        handleChangeLayoutWidth={handleChangeLayoutWidth}
        sidebarTheme={sidebarTheme}
        changeSidebarTheme={changeSidebarTheme}
        sidebarThemeCaptions={sidebarThemeCaptions}
        changeSidebarThemeCaptions={changeSidebarThemeCaptions}
      />
    </React.Fragment>
  );
};

export default landing;