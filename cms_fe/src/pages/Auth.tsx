function Auth() {
  return (
    <main>
      <h1>Auth</h1>

      <section>
        <h2>Sign up</h2>
        <form>
          <label>
            Email
            <input type="email" name="signup-email" />
          </label>
          <label>
            Password
            <input type="password" name="signup-password" />
          </label>
          <label>
            Confirm password
            <input type="password" name="signup-confirm-password" />
          </label>
          <button type="button">Sign up</button>
          <button type="button">Sign up with Google</button>
        </form>
      </section>

      <section>
        <h2>Login</h2>
        <form>
          <label>
            Email
            <input type="email" name="login-email" />
          </label>
          <label>
            Password
            <input type="password" name="login-password" />
          </label>
          <button type="button">Log in</button>
          <button type="button">Log in with Google</button>
        </form>
        <a href="/forget-password">Forgot password?</a>
      </section>
    </main>
  )
}

export default Auth
