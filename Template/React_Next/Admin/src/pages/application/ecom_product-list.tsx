import React, { ReactElement, useEffect, useState, useCallback, useMemo } from "react";
import BreadcrumbItem from "@common/BreadcrumbItem";
import DeleteModal from "@common/DeleteModal";
import { ecomList } from "@common/JsonData";
import TableContainer from "@common/TableContainer";
import Layout from "@layout/index";
import EcomDetails from "@views/Application/E-commerce/EcomDetails";
import Image from "next/image";
import Link from "next/link";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { DeleteList, GetList } from "src/toolkit/E-commerce/reducer";
import { createSelector } from "reselect";

const EcomProductList = () => {

    const dispatch = useDispatch<any>();

    const listecomData = createSelector(
        (state: any) => state.Ecom,
        (state) => state.listData
    );
    const listData = useSelector(listecomData);

    const [ecomLists, setEcomLists] = useState<any>();
    const [viewList, setViewList] = useState<any>("");
    const [delet, setDelet] = useState<boolean>(false);
    const [deleteId, setDeleteId] = useState<any>('');
    const [show, setShow] = useState<boolean>(false);
    const handleCloseModal = useCallback(() => setShow(!show), [show]);

    useEffect(() => {
        dispatch(GetList(ecomList as any));
    }, [dispatch]);

    useEffect(() => setEcomLists(listData), [listData]);
    // view
    const handleView = useCallback((item: any) => {
        handleCloseModal();
        setViewList({
            imageUrl: item.image.src,
        });
    }, [handleCloseModal])

    // delete
    const handleDelete = useCallback((id: any) => {
        setDelet(true);
        setDeleteId(id)
    }, [])
    const handleClose = () => setDelet(!delet);

    const handleDeleteId = () => {
        if (deleteId) {
            dispatch(DeleteList(deleteId))
        }
        handleClose();
    }

    const columns = useMemo(
        () => [
            {
                header: "#",
                accessorKey: "id",
                enableColumnFilter: false,
            },
            {
                header: "Product Detail",
                enableColumnFilter: false,
                accessorKey: "image",
                cell : (cellProps: any) => {
                    return (
                        <div className="row">
                            <div className="col-auto pe-0">
                                <Image src={cellProps.getValue()} alt="user-image" width={40} height={40} className="rounded" />
                            </div>
                            <div className="col">
                                <h6 className="mb-1">{cellProps.row.original.title}</h6>
                                <p className="text-muted f-12 mb-0">{cellProps.row.original.description}</p>
                            </div>
                        </div>
                    )
                },
            },
            {
                header: "Categories",
                accessorKey: "category",
                enableColumnFilter: false,
            },
            {
                header: "Price",
                accessorKey: "price",
                enableColumnFilter: false,
            },
            {
                header: "Qty",
                accessorKey: "quantity",
                enableColumnFilter: false,
            },
            {
                header: "Brand",
                enableColumnFilter: false,
                accessorKey: "status",
                cell : (cellProps: any) => {
                    return (
                        <i className={"ph-duotone ph-check-circle text-" + cellProps.row.original.status + " f-24"} data-bs-toggle="tooltip" data-bs-title="success">
                        </i>
                    )
                },
            },
            {
                header: "Status",
                enableColumnFilter: false,
                accessorKey : "brand",
                cell: (cellProps: any) => {
                    return (
                        <React.Fragment>
                            <Image src={cellProps.getValue()} alt="user-image" width={40} height={40} />
                            <div className="prod-action-links">
                                <ul className="list-inline me-auto mb-0">
                                    <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                        <Link
                                            href="#"
                                            className="avtar avtar-xs btn-link-secondary btn-pc-default" onClick={() => handleView(cellProps)}>
                                            <i className="ti ti-eye f-18"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                        <Link href="/application/ecom_product-add" className="avtar avtar-xs btn-link-success btn-pc-default">
                                            <i className="ti ti-edit-circle f-18"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                        <Link href="#!" className="avtar avtar-xs btn-link-danger btn-pc-default" onClick={() => handleDelete(cellProps.row.original.id)}>
                                            <i className="ti ti-trash f-18"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </React.Fragment>
                    )
                }
            },
        ], [handleView, handleDelete]
    )
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="E-commerce" subTitle="Products list" />
            <Row>
                <Col sm={12}>
                    <Card className="table-card">
                        <Card.Body>
                            <div className="text-end p-sm-4 pb-sm-2">
                                <Link href="/application/ecom_product-add" className="btn btn-primary"> <i className="ti ti-plus f-18"></i> Add Product </Link>
                            </div>
                            <TableContainer
                                columns={(columns || [])}
                                data={(ecomLists || [])}
                                isGlobalFilter={true}
                                isBordered={false}
                                customPageSize={5}
                                tableClass="table table-hover tbl-product datatable-table"
                                theadClass="table-light"
                                isPagination={true}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <EcomDetails show={show} handleClose={handleCloseModal} ecomDetails={viewList} />
            <DeleteModal show={delet} handleClose={handleClose} handleDeleteId={handleDeleteId} />
        </React.Fragment>
    );
}

EcomProductList.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default EcomProductList;