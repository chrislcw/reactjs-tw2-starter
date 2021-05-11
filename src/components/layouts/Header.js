import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { Brand, Button } from "./../atoms";
import { logout } from "../../redux/actions";
// import { Trans } from "@lingui/macro";
import navigationlinks from "../../utils/navigationLinks";
import { Brand } from "./../atoms";

const RenderMenu = (props) => {
  const currentRoute = props.location.pathname;

  if (props.token === null) {
    return "";
  }

  let nav;

  nav = props.role !== null ? navigationlinks[props.role] : undefined;

  return nav === undefined ? (
    <div></div>
  ) : (
    <div className="h-full flex flex-col lg:flex-row items-center">
      {nav.map((menu, index) => (
        <div
          className={`nav-link font-semibold text-sm uppercase cursor-pointer hover:opacity-50 my-4 lg:my-0 lg:ml-16
          ${currentRoute === menu.url && "opacity-50"}
          `}
          key={index}
          onClick={() => {
            props.closeMobileMenu();
            props.history.push(menu.url);
          }}
          url={menu.url}
        >
          {menu.name}
        </div>
      ))}
    </div>
  );
};

const Header = (props) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <div>
      {props.token === null && (
        <header>
          <div className="py-10 flex justify-center">
            <Brand />
          </div>
        </header>
      )}
      {props.token !== null && (
        <header className="relative">
          <div className="mobile-menu-toggle cursor-pointer hover:opacity-50 lg:hidden">
            <span
              className="font-semibold"
              onClick={() => {
                setOpenMobileMenu(!openMobileMenu);
              }}
            >
              MENU
            </span>
          </div>
          <div
            className={`pt-8 mobile-menu ${
              !openMobileMenu && "hidden"
            } lg:hidden`}
          >
            <nav>
              <RenderMenu
                {...props}
                closeMobileMenu={() => {
                  setOpenMobileMenu(false);
                }}
              />
              {/* MOBILE */}
              <div className="text-center pt-10" onClick={() => props.logout()}>
                <span className="cursor-pointer hover:opacity-50 text-sm font-semibold uppercase">
                  Log out
                </span>
              </div>
            </nav>
          </div>
          <div className="py-5 lg:py-10 flex justify-center lg:justify-between">
            <Brand />
            <nav className="hidden lg:block">
              <RenderMenu
                {...props}
                closeMobileMenu={() => {
                  setOpenMobileMenu(false);
                }}
              />
            </nav>
          </div>
          {/* DESKTOP */}
          <div className="flex absolute top-4 right-0">
            <div className="cursor-pointer hover:opacity-50 text-sm font-semibold uppercase mr-8">
              Logged in as: {props.role}
            </div>
            <div
              className="cursor-pointer hover:opacity-50 text-sm font-semibold uppercase"
              onClick={() => props.logout()}
            >
              Log out
            </div>
          </div>
        </header>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    router: state.router,
    role: state.Auth.role,
    token: state.Auth.access_token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
