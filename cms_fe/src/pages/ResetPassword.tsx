function ResetPassword() {
  return (
    <main>
      <h1>Reset password</h1>
      <p>
        Use this form when the reset token is valid and was issued within the
        last 24 hours.
      </p>
      <form>
        <label>
          New password
          <input type="password" name="new-password" />
        </label>
        <label>
          Confirm new password
          <input type="password" name="confirm-password" />
        </label>
        <button type="button">Reset password</button>
      </form>
    </main>
  )
}

export default ResetPassword
