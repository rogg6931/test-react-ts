import { useState } from "react";
import User from "./Users";

interface AddUsersProps {
    addUser: (newUser: User) => void;
    userLength: number;
}

const AddUsers = ({ addUser, userLength }: AddUsersProps) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        const newUser: User = {
            id: userLength + 1,
            name,
            phone,
            email,
        };
        addUser(newUser);
        setName("");
        setPhone("");
        setEmail("");
    };

    return (
        <div className="grid grid-cols-4 place-items-end mb-4">
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-bold">
                    Họ tên:
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className=" appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div>
                <label
                    htmlFor="phone"
                    className="block text-sm font-bold">
                    Số điện thoại:
                </label>
                <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-bold">
                    Email:
                </label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline w-52">
                Thêm liên hệ
            </button>
        </div>
    );
};

export default AddUsers;
