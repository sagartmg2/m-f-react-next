
function Profile() {

    let logged_status = true;

    return <>
        <h1>Profile page</h1>
        <hr />
        {
            logged_status
                ?
                <>
                    <h1>Name:RAM</h1>
                    <p>n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is availabl</p>
                </>
                :
                <p>user not logged in</p>
        }
    </>
}

export default Profile