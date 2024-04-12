import { THEME_LAYOUT, THEME_MODE, THEME_PRESET } from "../Common/layoutConfig";
import Link from "next/link";
import React, { useState } from "react";
import { Col, Offcanvas, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import SimpleBar from "simplebar-react";

const RightCustomizer = ({
    themeMode,
    changeThemeMode,
    themePreset,
    changeThemePreset,
    themeLayout,
    changeThemeLayout
}: any) => {
    const dispatch = useDispatch<any>();
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleOffcanvasToggle = () => {
        setShowOffcanvas(!showOffcanvas);
    };
    return (
        <>
            <div className="pct-c-btn">
                <a href="#" onClick={handleOffcanvasToggle}>
                    <i className="ph-duotone ph-gear-six"></i>
                </a>
            </div>

            <Offcanvas show={showOffcanvas} onHide={handleOffcanvasToggle} placement="end" className="pct-offcanvas">
                <Offcanvas.Header>
                    <h5 className="offcanvas-title">Settings</h5>
                    <button type="button" className="btn btn-icon btn-link-danger" onClick={handleOffcanvasToggle}><i className="ti ti-x"></i></button>
                </Offcanvas.Header>
                <SimpleBar className="pct-body customizer-body">
                    <Offcanvas.Body className="py-0">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="pc-dark">
                                    <h6 className="mb-1">Theme Mode</h6>
                                    <p className="text-muted text-sm">Choose light or dark mode or Auto</p>
                                    <Row className="theme-color theme-layout">
                                        <div className="col-4">
                                            <div className="d-grid">
                                                <button
                                                    data-value="true"
                                                    className={`preset-btn btn ${themeMode === THEME_MODE.LIGHT ? 'active' : ''}`}
                                                    onClick={() => {
                                                        dispatch(changeThemeMode(THEME_MODE.LIGHT));
                                                    }}
                                                >
                                                    <span className="btn-label">Light</span>
                                                    <span className="pc-lay-icon"><span></span><span></span><span></span><span></span></span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="d-grid">
                                                <button
                                                    className={`preset-btn btn ${themeMode === THEME_MODE.DARK ? 'active' : ''}`}
                                                    data-value="false"
                                                    onClick={() => {
                                                        dispatch(changeThemeMode(THEME_MODE.DARK));
                                                    }}
                                                >
                                                    <span className="btn-label">Dark</span>
                                                    <span className="pc-lay-icon"><span></span><span></span><span></span><span></span></span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="d-grid">
                                                <button
                                                    className={`preset-btn btn ${themeMode === THEME_MODE.DEFAULT ? 'active' : ''}`}
                                                    data-bs-toggle="tooltip"
                                                    onClick={() => {
                                                        dispatch(changeThemeMode(THEME_MODE.DEFAULT));
                                                    }}
                                                    title="Automatically sets the theme based on user's operating system's color scheme.">
                                                    <span className="btn-label">Default</span>
                                                    <span className="pc-lay-icon d-flex align-items-center justify-content-center">
                                                        <i className="ph-duotone ph-cpu"></i>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <h6 className="mb-1">Accent color</h6>
                                <p className="text-muted text-sm">Choose your primary theme color</p>
                                <div className="theme-color preset-color">
                                    <Link
                                        onClick={() => {
                                            dispatch(changeThemePreset(THEME_PRESET.PRESET_1));
                                        }}
                                        className={themePreset === THEME_PRESET.PRESET_1 ? 'active' : ''}
                                        href="#!" data-value="preset-1"><i className="ti ti-check"></i></Link>
                                    <Link
                                        onClick={() => {
                                            dispatch(changeThemePreset(THEME_PRESET.PRESET_2));
                                        }}
                                        className={themePreset === THEME_PRESET.PRESET_2 ? 'active' : ''}
                                        href="#!" data-value="preset-2"><i className="ti ti-check"></i></Link>
                                    <Link
                                        onClick={() => {
                                            dispatch(changeThemePreset(THEME_PRESET.PRESET_3));
                                        }}
                                        className={themePreset === THEME_PRESET.PRESET_3 ? 'active' : ''}
                                        href="#!" data-value="preset-3"><i className="ti ti-check"></i></Link>
                                    <Link
                                        onClick={() => {
                                            dispatch(changeThemePreset(THEME_PRESET.PRESET_4));
                                        }}
                                        className={themePreset === THEME_PRESET.PRESET_4 ? 'active' : ''}
                                        href="#!" data-value="preset-4"><i className="ti ti-check"></i></Link>
                                    <Link
                                        onClick={() => {
                                            dispatch(changeThemePreset(THEME_PRESET.PRESET_5));
                                        }}
                                        className={themePreset === THEME_PRESET.PRESET_5 ? 'active' : ''}
                                        href="#!" data-value="preset-5"><i className="ti ti-check"></i></Link>
                                    <Link
                                        onClick={() => {
                                            dispatch(changeThemePreset(THEME_PRESET.PRESET_6));
                                        }}
                                        className={themePreset === THEME_PRESET.PRESET_6 ? 'active' : ''}
                                        href="#!" data-value="preset-6"><i className="ti ti-check"></i></Link>
                                    <Link
                                        onClick={() => {
                                            dispatch(changeThemePreset(THEME_PRESET.PRESET_7));
                                        }}
                                        className={themePreset === THEME_PRESET.PRESET_7 ? 'active' : ''}
                                        href="#!" data-value="preset-7"><i className="ti ti-check"></i></Link>
                                    <Link
                                        onClick={() => {
                                            dispatch(changeThemePreset(THEME_PRESET.PRESET_8));
                                        }}
                                        className={themePreset === THEME_PRESET.PRESET_8 ? 'active' : ''}
                                        href="#!" data-value="preset-8"><i className="ti ti-check"></i></Link>
                                    <Link
                                        onClick={() => {
                                            dispatch(changeThemePreset(THEME_PRESET.PRESET_9));
                                        }}
                                        className={themePreset === THEME_PRESET.PRESET_9 ? 'active' : ''}
                                        href="#!" data-value="preset-9"><i className="ti ti-check"></i></Link>
                                    <Link
                                        onClick={() => {
                                            dispatch(changeThemePreset(THEME_PRESET.PRESET_10));
                                        }}
                                        className={themePreset === THEME_PRESET.PRESET_10 ? 'active' : ''}
                                        href="#!" data-value="preset-10"><i className="ti ti-check"></i></Link>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="pc-rtl">
                                    <h6 className="mb-1">Theme Layout</h6>
                                    <p className="text-muted text-sm">LTR/RTL</p>
                                    <Row className="theme-color theme-direction">
                                        <Col xs={6}>
                                            <div className="d-grid">
                                                <button
                                                    onClick={() => {
                                                        dispatch(changeThemeLayout(THEME_LAYOUT.LTR));
                                                    }}
                                                    className={`preset-btn btn ${themeLayout === THEME_LAYOUT.LTR ? 'active' : ''}`}
                                                    data-value="false">
                                                    <span className="btn-label">LTR</span>
                                                    <span className="pc-lay-icon"><span></span><span></span><span></span><span></span></span>
                                                </button>
                                            </div>
                                        </Col>
                                        <Col xs={6}>
                                            <div className="d-grid">
                                                <button
                                                    onClick={() => {
                                                        dispatch(changeThemeLayout(THEME_LAYOUT.RTL));
                                                    }}
                                                    className={`preset-btn btn ${themeLayout === THEME_LAYOUT.RTL ? 'active' : ''}`}
                                                    data-value="true">
                                                    <span className="btn-label">RTL</span>
                                                    <span className="pc-lay-icon"><span></span><span></span><span></span><span></span></span>
                                                </button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </li>
                        </ul>
                    </Offcanvas.Body>
                </SimpleBar>
            </Offcanvas>
        </>
    )
}

export default RightCustomizer;