import React from 'react';

const SearchForm = (props) => {
    return <nav className="navbar bg-dark p-3">
        <div className="container-fluid align-center justify-content-center col-lg-8">
            <form className="d-flex w-100" role="search" onSubmit={props.onSubmit}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={props.onChange} autoFocus />
            </form>
        </div>
    </nav>
};

export default SearchForm;