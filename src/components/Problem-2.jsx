import React from 'react';
import "./problem2.css"
import { useEffect } from 'react';
import ModalInfo from './ModalInfo';
const ModalA = ({ onClose, onOpenModalB, contacts }) => (
    <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Modal A</h5>
                    <button type="button" className="close" onClick={onClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {
                        contacts?.map(data => <ModalInfo key={data.id} contact={data}></ModalInfo>)
                    }
                    {/* <ModalInfo contact={contacts}></ModalInfo> */}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-1" onClick={onClose}>
                        Close
                    </button>
                    <button type="button" className="btn btn-2" onClick={onOpenModalB}>
                        Open Modal B
                    </button>

                </div>
            </div>
        </div>
    </div>
);
const ModalB = ({ onClose, onOpenModalA, contacts }) => (
    <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Modal B</h5>
                    <button type="button" className="close" onClick={onClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {
                        contacts?.map(data => <ModalInfo key={data.id} contact={data}></ModalInfo>)
                    }
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-1" onClick={onClose}>
                        Close
                    </button>
                    <button type="button " className="btn btn-1" onClick={onOpenModalA}>
                        Open Modal A
                    </button>
                </div>
            </div>
        </div>
    </div>
);

const Problem2 = () => {

    const [showModalA, setShowModalA] = useState(false);
    const [showModalB, setShowModalB] = useState(false);
    const [allData, setAllData] = useState([])

    useEffect(() => {
        fetch("https://contact.mediusware.com/api/contacts/")
            .then(res => res.json())
            .then(data => setAllData(data?.results))
    }, [])
    // console.log(allData?.results);
    // const allContact = allData?.results
    const usContact = allData?.filter(data => data?.country?.name === "United States")

    const openModalA = () => {
        setShowModalA(true);
        setShowModalB(false);
    }
    const openModalB = () => {
        setShowModalA(false);
        setShowModalB(true);
    };

    const closeModalA = () => setShowModalA(false);
    const closeModalB = () => setShowModalB(false);



    return (

        <div>
            <button className="btn btn-1" onClick={openModalA}>
                Modal A
            </button>
            <button className="btn btn-2" onClick={openModalB}>
                Modal B
            </button>

            {showModalA && <ModalA onClose={closeModalA} onOpenModalB={openModalB} contacts={allData} />}
            {showModalB && <ModalB onClose={closeModalB} onOpenModalA={openModalA} contacts={usContact} />}

        </div>
    );
};

export default Problem2;