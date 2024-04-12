import React, { ReactNode, useEffect } from "react";
import Header from "./Header";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { changeThemeLayout, changeThemeMode, changeThemePreset } from "src/toolkit/thunk";
import { createSelector } from "reselect";
import RightCustomizer from "./RightCustomizer";
import Footer from "./Footer";
import { MobileSidebarProvider } from './MobileSidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {


  const dispatch = useDispatch<any>();

  const selectLayput = createSelector(
    (state: any) => state.Theme,
    (theme) => ({
      themeMode: theme.themeMode,
      themePreset: theme.themePreset,
      themeLayout: theme.themeLayout,
    })
  );
  const {
    themeMode,
    themePreset,
    themeLayout,
  } = useSelector(selectLayput);

  /*
    layout settings
    */
  useEffect(() => {
    if (

      themeMode ||
      themePreset ||
      themeLayout
    ) {
      dispatch(changeThemeMode(themeMode));
      dispatch(changeThemePreset(themePreset));
      dispatch(changeThemeLayout(themeLayout));
    }
  }, [themeMode,
    themePreset,
    themeLayout,
    dispatch]);

  return (
    <>
      <MobileSidebarProvider>
        <Header themeMode={themeMode} changeThemeMode={changeThemeMode} />
        <div className="component-block">
          <Container>
            <Row>
              <Col xl={3}>
                <Sidebar />
              </Col>
              <Col xl={9} >
                {children}
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </MobileSidebarProvider>

      {/* <RightCustomizer
        themeMode={themeMode}
        changeThemeMode={changeThemeMode}
        themePreset={themePreset}
        changeThemePreset={changeThemePreset}
        themeLayout={themeLayout}
        changeThemeLayout={changeThemeLayout}
      /> */}
    </>
  );
};

export default Layout;
