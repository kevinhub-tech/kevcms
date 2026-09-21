import { BiSolidErrorAlt } from "react-icons/bi";
import { MdAutorenew } from "react-icons/md";

function Api() {
  return (
    <main>
      <h1>API keys</h1>
      <div className="text-right py-4">
        <button className="btn btn-soft btn-primary">Create New API</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Api Key</th>
              <th>Created At</th>
              <th>Last Used At</th>
              <th>Revoked At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover:bg-base-300">
              <th>1</th>
              <td>**************</td>
              <td> 12:30pm at 21 september </td>
              <td> 12:40pm at 21 september </td>
              <td> - </td>
              <td>
                <ul>
                <li><button className="btn btn-outline btn-accent"><MdAutorenew/></button></li>
                  <li><button className="btn btn-outline btn-error"><BiSolidErrorAlt/></button></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
      }

export default Api;
