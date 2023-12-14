import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { FiEdit3 } from 'react-icons/fi';
import "../index.css"


const TodoList = ({ items, deleteItem, setItems }) => {
    const [editId, setEditId] = useState(null);
    const [editedTexts, setEditedTexts] = useState({});
    const [checkedItems, setCheckedItems] = useState([]);

    const handleClear = () => {
        setItems([])
    }

    const handleDelete = (id) => {
        deleteItem(id);
    };

    const handleEdit = (id, value) => {
        setEditId(id);
        console.log(editId, { ...editedTexts });
        setEditedTexts({ ...editedTexts, [id]: value });
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setEditedTexts({ ...editedTexts, [id]: value });
    };

    const handleEditSave = (id) => {
        setEditId(null);
        console.log([id]);
    };

    const lastControl = (id) => {
        const lastCheckedItems = checkedItems.includes(id)
            ? checkedItems.filter((item) => item !== id)
            : [...checkedItems, id];
        setCheckedItems(lastCheckedItems);
    };

    return (
        <>
            {items.map((item) => (
                <div key={item.id}>
                    <li className={` m-2 text-capitalize rounded-5 d-flex justify-content-between list-group-item list-group-item-danger ${checkedItems.includes(item.id) ? ' checked' : ''}`}>
                        <span
                            onClick={() => lastControl(item.id)}
                            className='me-3'
                            style={{ cursor: 'pointer' }}
                        >
                            {checkedItems.includes(item.id) ? '✔️' : '☐'}
                        </span>

                        {editId === item.id ? (

                            <>
                                <input
                                    className='rounded-2 w-25'
                                    type='text'
                                    id={item.id}
                                    value={editedTexts[item.id] || item.value}
                                    onChange={handleInputChange}
                                />
                                <div className='me-2'>
                                    <button type='button' className='btn btn-info btn-xs me-2 py-0' onClick={() => handleEditSave(item.id)}>
                                        Save
                                    </button>
                                    <FaTrashAlt role='button' fill='red' onClick={() => handleDelete(item.id)} />
                                </div>
                            </>
                        ) : (

                            <>
                                <span className='text-decoration-none'>{editedTexts[item.id] || item.value}</span>
                                <div>
                                    <FiEdit3 role='button' fill='blue' onClick={() => handleEdit(item.id, item.value)} style={{ marginRight: '10px' }} />
                                    <FaTrashAlt role='button' fill='red' onClick={() => handleDelete(item.id)} />
                                </div>
                            </>
                        )}
                    </li>
                </div>
            ))}
            {items.length > 0 && <Button onClick={handleClear} className='btn btn-danger w-25 mx-auto mt-5'>Clear All</Button>}
        </>
    );
};

export default TodoList;
