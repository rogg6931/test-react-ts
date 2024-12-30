import { useEffect, useState } from "react";
import User from "./Users";
import "./style.css";
import AddUsers from "./AddUsers";
import EditUser from "./EditUser";

function ListUsers() {
    const [users, setUsers] = useState<User[]>([]);
    const [editRow, setEditRow] = useState<number | null>(null);

    const callBackFunction = () => {
        // Lấy dữ liệu từ API
        const fetchUsers = async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const data = await response.json();
            setUsers(data);
        };
        fetchUsers();
    };
    useEffect(callBackFunction, []); // Chỉ chạy một lần khi component được mount

    const addListUser = (newUser: User) => {
        setUsers([...users, newUser]); // update users
    };

    const removeListUser = (index: number) => {
        setUsers((prevUsers) => {
            const updateUser = prevUsers.filter((user) => user.id !== index); // filter user có id khác id đc chọn
            return updateUser.map((user, index) => ({ // update id user
                ...user,
                id: index + 1,
            }));
        });
    };

    const handleEdit = (user: User) => {
        setEditRow(user.id); // Gán id hàng đc chọn vào editRow
    };

    const handleSave = (editUser: User) => {
        setUsers(users.map((u) => (u.id === editUser.id ? editUser : u))); // update users sau khi edit
        setEditRow(null); // lưu chỉnh sửa khi click lưu
    };

    const handleCancelEdit = () => {
        setEditRow(null); // hủy chỉnh sửa khi click hủy
    };

    return (
        <div className="bg bg-gray-300 text-slate-700 p-8 rounded-lg shadow-lg">
            <h1 className="text-center mb-8">Quản lý danh bạ</h1>
            <AddUsers addUser={addListUser} userLength={users.length} />
            <table className="w-full table-fixed">
                <thead className="bg-gray-400">
                    <tr>
                        <th className="w-16">STT</th>
                        <th>Họ và tên</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th className="w-52">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length === 0 ? ( //if length = 0 thì render không có dữ liệu
                        <tr>
                            <td colSpan={5} className="text-center">
                                Không có dữ liệu
                            </td>
                        </tr>
                    ) : ( users.map((user) => ( //else (length > 0)
                                <tr key={user.id}>
                                    {editRow === user.id ? ( // if edit
                                        <EditUser // thì render component EditUser
                                            user={user}
                                            saveEdit={handleSave}
                                            cancelEdit={handleCancelEdit}
                                        />
                                    ) : ( // else render dữ liệu bình thường
                                        <>
                                            <td className="text-center">{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.email}</td>
                                            <td className="flex justify-evenly border-t-0 border-l-0">
                                                <button
                                                    className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold rounded focus:outline-none focus:shadow-outline"
                                                    onClick={() =>
                                                        handleEdit(user)
                                                    }>
                                                    Sửa
                                                </button>
                                                <button
                                                    className="bg-red-800 hover:bg-red-600 text-white font-bold rounded focus:outline-none focus:shadow-outline"
                                                    onClick={() =>
                                                        removeListUser(user.id)
                                                    }>
                                                    Xóa
                                                </button>
                                            </td>
                                        </>
                                    )}
                                </tr>
                            )
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ListUsers;
