import React, { useState } from 'react';
const ModalC = ({ onClose, country, phone }) => (
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
                    <h1> Number: {phone}</h1>
                    <h2>Country: {country}</h2>
                    {/* <ModalInfo contact={contacts}></ModalInfo> */}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-1" onClick={onClose}>
                        Close
                    </button>


                </div>
            </div>
        </div>
    </div>
);

const ModalInfo = ({ contact }) => {
    const [showModalC, setShowModalC] = useState(false);
    const openModalC = () => {
        setShowModalC(true);
    }
    const closeModalC = () => {
        setShowModalC(false);
        console.log("closing modal 3 ");
    }

    return (
        <div onClick={openModalC} className='border my-2 p-2 '>
            <h1> Number: {contact?.phone}</h1>
            <h2>Country: {contact?.country.name}</h2>
            {showModalC && <ModalC onClose={closeModalC} country={contact?.country?.name} phone={contact?.phone} />}

        </div>
    );
};

export default ModalInfo;