import React, { useState } from "react";
import Link from "next/link";
import { Card, Form, ListGroup, Offcanvas } from "react-bootstrap";
import { useRouter } from "next/router";
import { useMobileSidebar } from "./MobileSidebar";
import SimpleBar from "simplebar-react";

const Sidebar = () => {
    const router = useRouter();

    // JSON data for the component links
    const componentLinks = [
        {
            title: "Basic Components",
            links: [
                { text: "All", href: "/" },
                { text: "Alert", href: "/elements/bc_alert" },
                { text: "Button", href: "/elements/bc_button" },
                { text: "Badges", href: "/elements/bc_badges" },
                { text: "Breadcrumb", href: "/elements/bc_breadcrumb" },
                { text: "Cards", href: "/elements/bc_card" },
                { text: "Color", href: "/elements/bc_color" },
                { text: "Collapse", href: "/elements/bc_collapse" },
                { text: "Carousel", href: "/elements/bc_carousel" },
                { text: "Dropdowns", href: "/elements/bc_dropdowns" },
                { text: "Offcanvas", href: "/elements/bc_offcanvas" },
                { text: "Pagination", href: "/elements/bc_pagination" },
                { text: "Progress", href: "/elements/bc_progress" },
                { text: "List group", href: "/elements/bc_list-group" },
                { text: "Modal", href: "/elements/bc_modal" },
                { text: "Spinner", href: "/elements/bc_spinner" },
                { text: "Tabs & pills", href: "/elements/bc_tabs" },
                { text: "Tooltip", href: "/elements/bc_tooltip-popover" },
                { text: "Toasts", href: "/elements/bc_toasts" },
                { text: "Typography", href: "/elements/bc_typography" },
                { text: "Other", href: "/elements/bc_extra" },
                // Add more basic component links here
            ],
        },
        {
            title: "Advance Components",
            links: [
                { text: "Datepicker", href: "/elements/ac_datepicker" },
                { text: "Lightbox", href: "/elements/ac_lightbox" },
                { text: "Modal", href: "/elements/ac_modal" },
                { text: "Notification", href: "/elements/ac_notification" },
                { text: "Rangeslider", href: "/elements/ac_rangeslider" },
                { text: "Slider", href: "/elements/ac_slider" },
                { text: "Tour", href: "/elements/ac_tour" },
                { text: "Tree View", href: "/elements/ac_treeview" },
                // Add more advanced component links here
            ],
        },
    ];

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredLinks, setFilteredLinks] = useState(componentLinks);

    const handleSearch = (query: any) => {
        setSearchQuery(query);

        // Filter the component links based on the search query
        const filtered = componentLinks.map((category) => ({
            ...category,
            links: category.links.filter((link) =>
                link.text.toLowerCase().includes(query.toLowerCase())
            ),
        }));

        setFilteredLinks(filtered);
    };
    const { open, toggleOpen } = useMobileSidebar();
    return (
        <>
            {typeof document !== 'undefined' && document.documentElement.clientHeight > 1200 ?
                <Offcanvas show={open} onHide={toggleOpen} className="offcanvas-xl offcanvas-start component-offcanvas" id="offcanvas_component">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvas_component" aria-label="Close"></button>
                    </div>
                    <Offcanvas.Body className="offcanvas-body p-0">
                        <Card className="component-list-card position-xl-fixed">
                            <div className="card-header">
                                <Form className="form-search">
                                    <i className="ph-duotone ph-magnifying-glass icon-search"></i>
                                    <Form.Control
                                        type="search"
                                        placeholder="ex. alert, textbox..."
                                        id="compo-menu-search"
                                        value={searchQuery}
                                        onChange={(e) => handleSearch(e.target.value)}

                                    />
                                </Form>
                            </div>
                            <Card.Body className="p-0">
                                <ListGroup as="ul" variant="flush">
                                    {filteredLinks.map((group: any, index) => (
                                        <React.Fragment key={index}>
                                            <ListGroup.Item as="li" key={index}>
                                                <h5 className="mt-3">{group.title}</h5>
                                            </ListGroup.Item>

                                            {group.links.map((link: any, linkIndex: number) => (
                                                <li key={linkIndex}>
                                                    <Link
                                                        className={
                                                            router.pathname === link.href
                                                                ? "list-group-item list-group-item-action active"
                                                                : "list-group-item list-group-item-action"
                                                        }
                                                        href={link.href}>
                                                        {link.text}
                                                    </Link>
                                                </li>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Offcanvas.Body>
                </Offcanvas>
                :
                <div className="offcanvas-xl offcanvas-start component-offcanvas" id="offcanvas_component">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvas_component" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body p-0">
                        <Card className="component-list-card position-xl-fixed">
                            <div className="card-header">
                                <Form className="form-search">
                                    <i className="ph-duotone ph-magnifying-glass icon-search"></i>
                                    <Form.Control
                                        type="search"
                                        placeholder="ex. alert, textbox..."
                                        id="compo-menu-search"
                                        value={searchQuery}
                                        onChange={(e) => handleSearch(e.target.value)}

                                    />
                                </Form>
                            </div>
                            <Card.Body className="card-body p-0">
                                <SimpleBar className="h-100">
                                    <ListGroup as="ul" variant="flush">
                                        {filteredLinks.map((group: any, index) => (
                                            <React.Fragment key={index}>
                                                <ListGroup.Item as="li" key={index}>
                                                    <h5 className="mt-3">{group.title}</h5>
                                                </ListGroup.Item>

                                                {group.links.map((link: any, linkIndex: number) => (
                                                    <li key={linkIndex}>
                                                        <Link
                                                            className={
                                                                router.pathname === link.href
                                                                    ? "list-group-item list-group-item-action active"
                                                                    : "list-group-item list-group-item-action"
                                                            }
                                                            href={link.href}>
                                                            {link.text}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </React.Fragment>
                                        ))}
                                    </ListGroup>
                                </SimpleBar>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

            }
        </>
    );
};

export default Sidebar;
