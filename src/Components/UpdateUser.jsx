import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateUser = () => {
  const userList = useLoaderData();
  const { _id, name, email, gender, status } = userList;

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const status = form.status.value;
    const updateduser = { name, email, gender, status };
    console.log(updateduser);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateduser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Update User connected to database ", data);

        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "User Updated SucessFully",
            icon: "success",
            confirmButtonText: "Update",
          });
        }
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center py-20 min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">Update User</h2>
          <form onSubmit={handleUpdateUser}>
            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Enter your name"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                defaultValue={email}
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            {/* Gender Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </label>
              <div className="flex items-center gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    defaultValue={gender}
                    value="male"
                    className="mr-2"
                  />
                  Male
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    defaultValue={gender}
                    className="mr-2"
                  />
                  Female
                </label>
              </div>
            </div>
            {/* Status Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <div className="flex items-center gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="active"
                    defaultValue={status}
                    className="mr-2"
                  />
                  Active
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="inactive"
                    defaultValue={status}
                    className="mr-2"
                  />
                  Inactive
                </label>
              </div>
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
