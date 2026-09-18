function EditPages() {
  return (
    <main>
      <h1>Edit content</h1>
      <p>Choose how you want to edit this page.</p>

      <section>
        <h2>CMS editor</h2>
        <p>Readable layout for editing without working in JSON.</p>
        <label>
          Title
          <input type="text" name="cms-title" defaultValue="Home" />
        </label>
        <label>
          Body
          <textarea name="cms-body" rows={8} defaultValue="Welcome to the site." />
        </label>
        <button type="button">Save</button>
      </section>

      <section>
        <h2>JSON editor</h2>
        <p>For developers who want to edit the content as JSON.</p>
        <label>
          Page JSON
          <textarea
            name="json-body"
            rows={12}
            defaultValue={`{
  "title": "Home",
  "slug": "/home",
  "body": "Welcome to the site."
}`}
          />
        </label>
        <button type="button">Save JSON</button>
      </section>
    </main>
  )
}

export default EditPages
