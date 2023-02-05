import React from "react";
import '../styles/signup.css';
import Navu from './Navu';

function SignUp() {
return (
<>
    <div id="nav1"><Navu/></div>
    <div class="container" id="dome21">
        <div class="container" id="resdesc21">
            <h2><br/>User Signup</h2>
        </div>
        <div id="loginfrms21">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleInputUsername1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="text" class="form-control" id="exampleInputUsername1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <br/>
                <button type="submit" class="btn btn-primary">Sign Up</button>
            </form>

        </div>
    </div>
    <br/>
    <br/>
</>
)
}
;
export default SignUp;