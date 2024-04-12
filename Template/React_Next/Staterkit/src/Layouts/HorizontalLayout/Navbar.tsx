import React from "react";
import { horizontalData } from "./HorizontalMenudata";
import FeatherIcon from "feather-icons-react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const isMenuActive = (menuItem: any) => {
    if (router.pathname === menuItem.link) {
      return true;
    }
    if ( menuItem.submenu && menuItem.submenu.some((subItem: any) => isMenuActive(subItem)) ) {
      return true;
    }
    return false;
  };

  const renderSubMenu = (subMenuItems: any) => {
    return (
      <ul className="pc-submenu">
        {subMenuItems.map((subItem: any, subKey: any) => (
          <li
            className={`pc-item ${isMenuActive(subItem) ? "active" : ""}`}
            key={subKey}
          >
            {subItem.submenu ? (
              <>
                <Link href="#!" className="pc-link">
                  {subItem.icon ? (
                    <span className="pc-micon">
                      <i className={subItem.icon}></i>
                    </span>
                  ) : (
                    ""
                  )}
                  <span className="pc-mtext">{subItem.label}</span>
                  <span className="pc-arrow">
                    <FeatherIcon icon="chevron-right" />
                  </span>
                </Link>
                {renderSubMenu(subItem.submenu)}
              </>
            ) : (
              <Link href={subItem.link} className="pc-link">
                {subItem.icon && (
                  <span className="pc-micon">
                    <i className={subItem.icon}></i>
                  </span>
                )}
                <span className="pc-mtext">{subItem.label}</span>
                {subItem.badge && (
                  <span className="pc-badge">{subItem.badge}</span>
                )}
              </Link>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="navbar-content pc-trigger">
      <ul className="pc-navbar" style={{ display: "block;" }}>
        {horizontalData.map((item, key) => (
          <li
            className={`pc-item pc-hasmenu ${
                isMenuActive(item) ? "active" : ""
            }`}
            key={key}
          >
            <Link href="#!" className="pc-link">
              {item.icon ? (
                <span className="pc-micon">
                  <i className={item.icon}></i>
                </span>
              ) : (
                ""
              )}
              <span className="pc-mtext">{item.label}</span>
              <span className="pc-arrow">
                <FeatherIcon icon="chevron-right" />
              </span>
            </Link>
            {item.submenu && renderSubMenu(item.submenu)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
