import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadeduserList = useLoaderData();
  const [users, setUsers] = useState(loadeduserList);

  const handleUserDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to be able to Delete",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //delete fronm the databaase
        fetch(`https://user-management-server-blush.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your user data has been deleted.",
                icon: "success",
              });
              const remainingUser = users.filter((user) => user._id != id);
              setUsers(remainingUser);
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-3xl text-center">Users List:{users.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-gray-500 text-white">
              <th>ID</th>
              <th>Name</th>
              <th>@Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.status}</td>

                <td>
                  <Link to={`updateUser/${user._id}`}>
                    <button className="text-xl mr-5">
                      <CiEdit></CiEdit>
                    </button>
                  </Link>
                  <button
                    onClick={() => handleUserDelete(user._id)}
                    className="text-xl"
                  >
                    <MdDelete></MdDelete>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
