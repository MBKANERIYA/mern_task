import axios from "axios"
import React, { useEffect, useState } from 'react'
import { AdminHeader } from "../components/headers/UserHeader"


const Dashboard = () => {
    let [user, setUser] = useState([])

    let getUser = async () => {
        let get = await axios.get("http://localhost:3001/v1/user/recive", {
            headers: {
                "auth": `Bearer ${localStorage.getItem("token")}`
            }
        })
        console.log(get.data.user);
        let users = get.data.user
        setUser(users)
    }

    let deleteUser = async (id) => {
        let remove = await axios.delete(`http://localhost:3001/v1/user/delete/${id}`)
        console.log(remove);
    }

    useEffect(() => {
        getUser()
    }, [])
    return (

        <div className="app">
            <AdminHeader />
            <table border={"2px"} cellPadding={"10px"} cellSpacing={"10px"}>
                <thead>
                    <tr>
                        <th>INDEX</th>
                        <th>EMAIL</th>
                        <th>PASSWORD</th>
                        <th>REMOVE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((val, index) => (
                            <tr key={val._id} style={{ textAlign: "center" }}>
                                <td>{index + 1}</td>
                                <td key={index}>{val.email}</td>
                                <td >{val.password}</td>
                                <td><button onClick={() => deleteUser(val._id)}>Delete User</button></td>
                            </tr>
                        ))

                    }
                    <tr >Total User :- {user.length}</tr>
                </tbody>

            </table>
        </div>
    )
}

export default Dashboard