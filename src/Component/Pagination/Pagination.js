import React from 'react'
import './Pagination.css'
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ pageCount, handelPage }) => {
    const handlePageClick = (e) => {
       
        handelPage(e.selected + 1)
    }
    return (

        <div className=' mt-3 p-0 py-3  overflow-hidden '>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<FontAwesomeIcon icon={faAnglesRight} />}
                onPageChange={handlePageClick}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel={<FontAwesomeIcon icon={faAnglesLeft} />}
                containerClassName={"pagination justify-content-center flex-wrap p-0 m-0"}
                pageClassNam={"page-item"}
                pageLinkClassName={"page-link "}
                nextLinkClassName={"page-link nextLink "}
                previousLinkClassName={"page-link nextLink  "}
                nextClassName={"page-item text-center  "}
                previousClassName={"page-item text-center "}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeLinkClassName={"active a"}

            />
        </div>

    )
}

export default Pagination