import PageHeader from "../../../components/PageHeader/PageHeader";
import Table from "../../../components/Table/Table";

const Products = () => {
    return (
        <div className="page-wrapper">
            <div className="container-xl">
                <PageHeader PageTittle={'Products'} />
            </div>
            <div className="page-body">
                <div className="container-xl">
                    <div className="card">
                        <div className="card-body">
                            <Table />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
