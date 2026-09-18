function Api() {
  return (
    <main>
      <h1>API keys</h1>
      <button type="button">Create API key</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Key</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Production</td>
            <td>pk_live_xxxx</td>
            <td>
              <select name="status-prod" defaultValue="active">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </td>
            <td>
              <button type="button">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Development</td>
            <td>pk_test_xxxx</td>
            <td>
              <select name="status-dev" defaultValue="inactive">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </td>
            <td>
              <button type="button">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}

export default Api
