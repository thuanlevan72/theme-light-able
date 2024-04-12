import React, { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TopBar from "./Topbar";
import { useDispatch, useSelector } from "react-redux";
import { changeThemeLayout, changeThemeMode, changeThemePreset } from "src/toolkit/thunk";
import RightCustomizer from "./RightCustomizer";
import { changeLayoutTheme, changeSidebarTheme, changeSidebarThemeCaptions } from "src/toolkit/themeLayouts/thunk";
import { createSelector } from "reselect";
import HorizontalLayout from "./HorizontalLayout";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  const toogleSidebarHide = () => {
    const sidebar = document.querySelector('.pc-sidebar .pc-menu-overlay');
    const sidebarHideId = document.getElementById("pc-sidebar-hide");

    if (sidebarHideId) {
      sidebarHideId.classList.toggle("pc-sidebar-hide");
    }
  };
  const toogleMobileSidebarHide = () => {
    const sidebarHideId = document.getElementById("pc-sidebar-hide") as HTMLDivElement | null;

    if (sidebarHideId) {
      sidebarHideId.classList.toggle("mob-sidebar-active");
    }

    // Create a new element
    const newElement = document.createElement('div');
    newElement.className = 'pc-menu-overlay'; // Set the desired class name

    // Insert the new element after the .navbar-wrapper
    const navbarWrapper = document.querySelector('.navbar-wrapper') as Element | null;
    if (navbarWrapper) {
      navbarWrapper.insertAdjacentElement('afterend', newElement);
    }

    // Add an event listener to remove the "mob-sidebar-active" class when the new element is clicked
    newElement.addEventListener('click', function () {
      if (sidebarHideId) {
        sidebarHideId.classList.remove("mob-sidebar-active");
        newElement.remove(); // Remove the new element when clicked
      }
    });
  };


  const dispatch = useDispatch<any>();

  const selectLayoutProperties = createSelector(
    (state: any) => state.Theme,
    (layout) => ({
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
  const getLayoutWidth = isLayoutWidth ? "container" : "";

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  // console.log(isLanding);

  const handleOffcanvasToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <>
      {layoutTheme === "vertical" ?
        <>
          <Header themeMode={themeMode} />
          <TopBar
            handleOffcanvasToggle={handleOffcanvasToggle}
            toogleSidebarHide={toogleSidebarHide}
            toogleMobileSidebarHide={toogleMobileSidebarHide}
            themeMode={themeMode}
            changeThemeMode={changeThemeMode}
          />
          <div className="pc-container">
            <div className={"pc-content " + getLayoutWidth}>
              {children}
            </div>
          </div>
          <Footer />
          <RightCustomizer
            showOffcanvas={showOffcanvas}
            handleOffcanvasToggle={handleOffcanvasToggle}
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
        </>
        :
        <HorizontalLayout
          children={children}
          toogleSidebarHide={toogleSidebarHide}
          toogleMobileSidebarHide={toogleMobileSidebarHide}
          themeMode={themeMode}
          changeThemeMode={changeThemeMode}
        />
      }
    </>
  );
};

export default Layout;
