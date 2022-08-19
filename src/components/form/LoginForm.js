function LoginForm() {

    return (
        <>
            <div className="login">
                <label>ID : </label>
                <input type="text" name="id" /> &nbsp;&nbsp;&nbsp;
                <label>PASSWORD : </label>
                <input type="password" name="password" />
                <button >로그인</button>
            </div>
        </>
    );

}

export default LoginForm;