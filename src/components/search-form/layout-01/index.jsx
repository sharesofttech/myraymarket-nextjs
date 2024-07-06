const SearchForm = () => (
    <form className="search-form-wrapper" action="#">
         <div className="search-icon">
            <button type="button">
                <i className="feather-search" />
            </button>
        </div>
        <input type="search" placeholder="Search For Work" aria-label="Search" />
       
    </form>
    // <form className="de-flex-col position-relative" style={{width:"100%"}}>
    //     <input id="quick_search" type="text" placeholder="Search for works" required="required" aria-required="true" className="style-2 form-control"/>
    // <i className="feather-search"></i>
    // </form>
);

export default SearchForm;
