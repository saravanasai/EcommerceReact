const PageHeader = ({PageTittle}) => {
    return (
        <div className="page-header d-print-none">
            <div className="row g-2 align-items-center">
                <div className="col">
                    <h2 className="page-title">{PageTittle ?? 'Page Tittle'}</h2>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;
