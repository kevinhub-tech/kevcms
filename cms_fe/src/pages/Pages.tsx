function Pages() {
  return (
    <main>
      <h1>Pages</h1>
      <button type="button">Create page</button>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Slug</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Home</td>
            <td>/home</td>
            <td>
              <select name="status-home" defaultValue="published">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </td>
            <td>
              <a href="/edit-pages">Edit</a>
              <button type="button">Delete</button>
            </td>
          </tr>
          <tr>
            <td>About</td>
            <td>/about</td>
            <td>
              <select name="status-about" defaultValue="draft">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </td>
            <td>
              <a href="/edit-pages">Edit</a>
              <button type="button">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}

export default Pages
