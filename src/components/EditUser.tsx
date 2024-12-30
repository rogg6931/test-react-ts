import React, { useState, ChangeEvent } from "react";
import User from "./Users";

interface EditUserProps {
    user: User;
    saveEdit: (editUser: User) => void; // Hàm được gọi khi lưu thay đổi
    cancelEdit: () => void; // Hàm được gọi khi hủy chỉnh sửa
}

const EditUser = ({ user, saveEdit, cancelEdit }: EditUserProps) => {
    const [edit, setEdit] = useState<User>({ ...user }); // copy user để edit

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => { //khi input thay đổi
        setEdit({ ...edit, [event.target.name]: event.target.value });
    };

    const handleSaveClick = () => { // click lưu, lưu value mới
        saveEdit(edit);
    };

    return (
        <React.Fragment>
            <td className="text-center">{user.id}</td>
            <td>
                <input
                    type="text"
                    name="name"
                    value={edit.name}
                    onChange={handleChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="phone"
                    value={edit.phone}
                    onChange={handleChange}
                />
            </td>
            <td>
                <input
                    type="email"
                    name="email"
                    value={edit.email}
                    onChange={handleChange}
                />
            </td>
            <td className="flex justify-evenly text-white border-t-0 border-l-0">
                <button onClick={handleSaveClick} className="bg-teal-700 hover:bg-teal-600">Lưu</button>
                <button onClick={cancelEdit} className="hover:bg-gray-800">Hủy</button>
            </td>
        </React.Fragment>
    );
};

export default EditUser;
