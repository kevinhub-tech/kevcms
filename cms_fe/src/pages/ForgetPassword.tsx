function ForgetPassword() {
  return (
    <main className="flex align-center justify-center ">
      <div className="w-full max-w-xs pt-8">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-2xl m-0 mb-4">Forgot password</h1>
          <p className="text-sm">Enter the email for your account to request a password reset.</p>
          <div className="mb-4 mt-4">
            <label className="input validator">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">Enter valid email address</div>
          </div>
          <div className="flex justify-center"><button className="btn btn-soft btn-primary">Send Email</button></div>
        </form>
      </div>
    </main>
  )
}

export default ForgetPassword
