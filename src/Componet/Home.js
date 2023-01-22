import React, { useEffect, useState } from 'react';
import './Home.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Table from './Table';
import ReactPaginate from 'react-paginate';


const Home = () => {
    const [itemOffset, setItemOffset] = useState(0);

    const [items, setData] = useState([])
    // const 
    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            });
    }, [])

    const itemsPerPage = 3

    const endOffset = itemOffset + itemsPerPage;

    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div>
            <div className="table-area">
                <div className="container">
                    <div className="table-bg">
                        {
                            currentItems.map(singleData => <Table tabledata={singleData} key={singleData._id}></Table>)
                        }
                        <div>
                            <div className="pagination">


                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel=">"
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={5}
                                    pageCount={pageCount}
                                    previousLabel="<"
                                    renderOnZeroPageCount={null}
                                    containerClassName='pagination-menu'
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;