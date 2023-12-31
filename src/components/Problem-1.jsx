import React, { useState } from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const [userName, setName] = useState(" ")
    const [userStatus, SetUserStatus] = useState(" ")
    const [userList, setUserList] = useState([])

    const handleClick = (val) => {
        setShow(val);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const status = e.target.Status.value
        setName(name),
            SetUserStatus(status)

        setUserList([...userList, { name, status }]);

        // Reset form and state
        e.target.reset();
        setName('');
        setUserStatus('');
        e.target.reset();
    }

    const filteredUsers = userList.filter(user => {
        if (show === 'all') {
            return true;
        } else {
            return user.status === show;
        }
    });
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" className="form-control"
                                name='name'
                                placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control"
                                name='status'
                                placeholder="Status" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;