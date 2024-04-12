import React, { ReactNode } from 'react';
import Header from './Header';
import TopBar from '@layout/Topbar';

interface LayoutProps {
    children: ReactNode;
    themeMode: any;
    changeThemeMode: any;
    toogleSidebarHide: any;
    toogleMobileSidebarHide: any;
}

const HorizontalLayout = ({ children, themeMode, changeThemeMode, toogleSidebarHide, toogleMobileSidebarHide }: LayoutProps) => {
    return (
        <>
            <Header themeMode={themeMode} />
            <TopBar
                toogleSidebarHide={toogleSidebarHide}
                toogleMobileSidebarHide={toogleMobileSidebarHide}
                themeMode={themeMode}
                changeThemeMode={changeThemeMode}
            />
            <div className='pc-container'>
                <div className='pc-content'>
                    {children}
                </div>
            </div>
        </>
    );
};

export default HorizontalLayout;
