import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

function Pages() {
  return (
    <main>
      <h1>Pages</h1>
      <div className="flex justify-between py-4">
        <label className="input border">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
        <button className="btn btn-soft btn-primary">Create New Page</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Description</th>
              <th>Meta Title</th>
              <th>Meta Description</th>
              <th>Slug</th>
              <th>Activity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover:bg-base-300">
              <th>1</th>
              <td>Home</td>
              <td>Landing Page of Kevin Portfolio</td>
              <td>Welcome to Kevin Portfolio</td>
              <td>Kevin Portfolio - A website that displays all of Kevin's work</td>
              <td>/</td>
              <td>
                <ul>
                  <li>Updated by Kevin at 12:25 pm on 23 September</li>
                  <li>Created by Kevin at 12:00 pm on 21 September</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li><button className="btn btn-outline btn-warning"><MdModeEdit/></button></li>
                  <li><button className="btn btn-outline btn-error"><RiDeleteBin6Line/></button></li>
                </ul>
              </td>
            </tr>
            {/* row 2 */}
            <tr className="hover:bg-base-300">
              <th>2</th>
              <td>Home</td>
              <td>Landing Page of Kevin Portfolio</td>
              <td>Welcome to Kevin Portfolio</td>
              <td>Kevin Portfolio - A website that displays all of Kevin's work</td>
              <td>/</td>
              <td>
                <ul>
                  <li>Updated by Kevin at 12:25 pm on 23 September</li>
                  <li>Created by Kevin at 12:00 pm on 21 September</li>
                </ul>
              </td>
              <td>
              <ul>
                  <li><button className="btn btn-outline btn-warning"><MdModeEdit/></button></li>
                  <li><button className="btn btn-outline btn-error"><RiDeleteBin6Line/></button></li>
                </ul>
              </td>
            </tr>
            {/* row 3 */}
            <tr className="hover:bg-base-300">
              <th>3</th>
              <td>Home</td>
              <td>Landing Page of Kevin Portfolio</td>
              <td>Welcome to Kevin Portfolio</td>
              <td>Kevin Portfolio - A website that displays all of Kevin's work</td>
              <td>/</td>
              <td>
                <ul>
                  <li>Updated by Kevin at 12:25 pm on 23 September</li>
                  <li>Created by Kevin at 12:00 pm on 21 September</li>
                </ul>
              </td>
              <td>
              <ul>
                  <li><button className="btn btn-outline btn-warning"><MdModeEdit/></button></li>
                  <li><button className="btn btn-outline btn-error"><RiDeleteBin6Line/></button></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Pages
