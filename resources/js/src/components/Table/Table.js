const Table = ({
    TableHeaders = ["Sno", "Username", "PhoneNumber", "action"],
    TablRows = [
        {
            sno: 1,
            username: "saravana",
            phonenumber: "7708454539",
            action: "<button>delete</button>",
        },
        {
            sno: 2,
            username: "saravana sai",
            phonenumber: "7708454539",
            action: "<button>delete</button>",
        },
    ]
}) => {
    return (
        <div id="table-default">
            <table className="table">
                <thead>
                    <tr>
                        {TableHeaders.map((headerItem) => {
                            return <th>{headerItem}</th>;
                        })}
                    </tr>
                </thead>
                <tbody className="table-tbody">
                    {TablRows.map((Item) => {
                        let arr = Object.keys(Item);
                        return (
                            <tr>
                                {arr.map((data) => {
                                    return <td>{eval(`Item.${data}`)}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
