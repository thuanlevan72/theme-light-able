import React, { ReactElement, useState } from "react";
import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import { contactSearchData } from "@common/JsonData";
import Image from "next/image";

interface ContactItem {
    color: any;
    img: any;
    name: string;
}

const ContactSearch = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [filteredResults, setFilteredResults] = useState<ContactItem[]>(contactSearchData);
  
    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value;
      setSearchQuery(query);
      filterResults(query);
    };
  
    const filterResults = (query: string) => {
      const filtered = contactSearchData.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(filtered);
    };
  
    return (
        <>
            <BreadcrumbItem mainTitle="Ui kit" subTitle="Contact Search" />
            <div className="row">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="ti ti-search"></i></span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search a Keyword"
                                            onChange={handleSearchInputChange}
                                            value={searchQuery}
                                            />
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-primary" type="button">Search</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row align-items-center justify-content-between gy-2">
                                <div className="col-sm-auto">
                                    <h5 className="mb-0">Recently Searched Contact</h5>
                                </div>
                                <div className="col-sm-auto">
                                    <select className="form-select">
                                        <option>Filter </option>
                                        <option>Hits: High To Low</option>
                                        <option>Hits: Low To High</option>
                                        <option>Popularity</option>
                                        <option>Fresh Arrivals</option>
                                    </select>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="row">
                                {(filteredResults  || []).map((item : ContactItem, key : number) => (
                                <div className="col-md-6 col-xxl-4" key={key}>
                                    <div className="card border shadow-none">
                                        <div className="card-body">
                                            <div className="text-center">
                                                <div className="chat-avtar d-inline-flex">
                                                    <Image
                                                        className="rounded-circle img-thumbnail img-fluid wid-80" 
                                                        src={item.img} alt="User image" />
                                                        <i className={`chat-badge bg-${item.color} mb-2 me-2`}></i>
                                                </div>
                                                <div className="my-3">
                                                    <h5 className="mb-0">{item.name}</h5>
                                                    <p className="mb-0">DM on <a href="#" className="link-primary">@williambond</a>😍</p>
                                                </div>
                                            </div>
                                            <div className="row g-2">
                                                <div className="col-6"><div className="d-grid"><button className="btn btn-primary">Accept</button></div></div>
                                                <div className="col-6"><div className="d-grid"><button className="btn btn-outline-secondary">Decline</button></div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

ContactSearch.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default ContactSearch;