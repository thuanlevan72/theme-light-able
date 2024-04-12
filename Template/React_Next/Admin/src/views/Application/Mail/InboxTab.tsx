import { emailInbox } from "@common/JsonData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Card, Form, Nav, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import SimpleBar from "simplebar-react";
import { getUserEmail } from "src/toolkit/Email/reducer";

const InboxTab = ({
  miniMailList,
  displayCategorys,
  displayTypes,
  displayLables
}: any) => {
  const dispatch = useDispatch<any>();
  const [eventKey, setEventKey] = useState<string>("Primary");

  const profiledropdownData = createSelector(
    (state: any) => state.Email,
    (state) => state.userEmail
  );
  const userEmail = useSelector(profiledropdownData);

  useEffect(() => {
    dispatch(getUserEmail(emailInbox));
  }, [dispatch]);

  const toggleTab = (ncategory: any) => {
    if (eventKey !== ncategory) {
      setEventKey(ncategory);
    }
    // if (labelTab !== nlabel) {
    //     setLabelTab(nlabel);
    // }
    // setCategorys(ncategory);
  };

  return (
    <React.Fragment>
      <Card className="table-card">
        <Card.Body className="py-0 px-2">
          <Nav
            as="ul"
            variant="tabs"
            className="profile-tabs"
            id="myTab"
            role="tablist"
          >
            <Nav.Item as="li">
              <Nav.Link
                id="profile-tab-1"
                className={eventKey === "Primary" ? "active" : ""}
                role="tab"
                onClick={() => toggleTab("Primary")}
              >
                <i className="ti ti-user me-2"></i>Primary
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                id="profile-tab-2"
                className={eventKey === "Promotions" ? "active" : ""}
                onClick={() => toggleTab("Promotions")}
              >
                <i className="ti ti-file-text me-2"></i>Promotions
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                id="profile-tab-3"
                className={eventKey === "Social" ? "active" : ""}
                onClick={() => toggleTab("Social")}
              >
                <i className="ti ti-id me-2"></i>Social
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                id="profile-tab-4"
                className={eventKey === "Updates" ? "active" : ""}
                onClick={() => toggleTab("Updates")}
              >
                <i className="ti ti-lock me-2"></i>Updates
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                id="profile-tab-5"
                className={eventKey === "Announcement" ? "active" : ""}
                onClick={() => toggleTab("Announcement")}
              >
                <i className="ti ti-users me-2"></i>Announcement
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Body>
        <SimpleBar className="card-body scroll-block">
          <div id="profile-1" role="tabpanel" aria-labelledby="profile-tab-1">
            <table className="table table-borderless mb-0 mail-table">
              <tbody>
                {(userEmail || [])?.map((item: any, index: number) => {
                    //     .filter(({ type, categorys, labeltype }: any) =>
                    //   (type === displayTypes || displayTypes === "all")
                    //   && (categorys === "inbox" ? "all" : categorys === displayCategorys || displayCategorys === "all")
                    //   && (labeltype === displayLables || displayLables === "all"))?
                  return (
                    <tr className="unread" key={index}>
                      <td>
                        <div className="d-flex align-items-center">
                          <Form.Check className="form-check-inline m-0 pc-icon-checkbox">
                            <Form.Check.Input type="checkbox" />
                            <i className="material-icons-two-tone pc-icon-uncheck">
                              check_box_outline_blank
                            </i>
                            <i className="material-icons-two-tone text-primary pc-icon-check">
                              check_box
                            </i>
                          </Form.Check>
                          <Form.Check className="form-check-inline my-0 ms-3 me-0 pc-icon-checkbox">
                            <Form.Check.Input type="checkbox" />
                            <i className="material-icons-two-tone pc-icon-uncheck">
                              star_outline
                            </i>
                            <i className="material-icons-two-tone text-warning pc-icon-check">
                              star
                            </i>
                          </Form.Check>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          {item.user.imageSrc ? (
                            <Image
                              src={item.user.imageSrc}
                              alt="user-image"
                              width={miniMailList ? 30 : 40}
                              height={miniMailList ? 30 : 40}
                              className="img-user rounded-circle"
                            />
                          ) : (
                            <div
                              className={
                                "avtar avtar-s img-user rounded-circle " +
                                item.user.avatar.background
                              }
                            >
                              {item.user.avatar.icon ? (
                                <i
                                  className={
                                    item.user.avatar.color +
                                    " f-20 ph-duotone " +
                                    item.user.avatar.icon
                                  }
                                ></i>
                              ) : (
                                <b className={"f-16 " + item.user.avatar.color}>
                                  {item.user.avatar.name}
                                </b>
                              )}
                            </div>
                          )}
                          <div className="d-flex align-items-center mail-username">
                            <div className="flex-grow-1 position-relative">
                              <h6 className="mb-0 ms-2 text-truncate">
                                {item.user.name}
                              </h6>
                            </div>
                            {item.user.badges && (
                              <div className="mail-content-badge">
                                {item.user.badges?.map(
                                  (badge: any, ind: number) => (
                                    <Link
                                      href="#"
                                      key={ind}
                                      className={`${badge.background} badge rounded-pill py-1 px-2`}
                                    >
                                      {badge.text}
                                    </Link>
                                  )
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex w-100 align-items-center">
                          <div className="flex-grow-1 position-relative">
                            <p className="mb-0 mail-text text-truncate">
                              {item.message}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        {item.attachment && (
                          <Link
                            href="#"
                            className="avtar avtar-s btn-link-secondary"
                          >
                            <i className="ti ti-paperclip f-18"></i>
                          </Link>
                        )}
                      </td>
                      <td className="mail-option">
                        {item.date}
                        <div className="mail-buttons">
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <Link
                                href="#"
                                className="avtar avtar-s btn-link-secondary"
                              >
                                <i className="ti ti-archive f-18"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                href="#"
                                className="avtar avtar-s btn-link-secondary"
                              >
                                <i className="ti ti-mail f-18"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                href="#"
                                className="avtar avtar-s btn-link-secondary"
                              >
                                <i className="ti ti-trash f-18"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                href="#"
                                className="avtar avtar-s btn-link-secondary"
                              >
                                <i className="ti ti-eye-off f-18"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </SimpleBar>
      </Card>
    </React.Fragment>
  );
};

export default InboxTab;
