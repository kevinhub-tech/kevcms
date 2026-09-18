function ForgetPassword() {
  return (
    <main>
      <h1>Forgot password</h1>
      <p>Enter the email for your account to request a password reset.</p>
      <form>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <button type="button">Send reset email</button>
      </form>
    </main>
  )
}

export default ForgetPassword
