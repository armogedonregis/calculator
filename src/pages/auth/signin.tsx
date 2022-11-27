import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";

const SignIn: NextPage = (props): JSX.Element => {

    const [userInfo, setUserInfo] = useState({login: '', password: ''})
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()

        const res = await signIn('credentials', {
            login: userInfo.login,
            password: userInfo.password,
            redirect: false,
        });
        console.log(res);
    };

    return (
        <div>
            <h1>SIHN IN</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    value={userInfo.login}
                    onChange={({ target }) => 
                        setUserInfo({ ...userInfo, login: target.value })
                    }
                    type="text" 
                    placeholder="text" />
                <input 
                    value={userInfo.password}
                    onChange={({ target }) => 
                        setUserInfo({ ...userInfo, password: target.value })
                    }
                    type="password" 
                    placeholder="password" />
                <input type="submit" value="login" />
            </form>
        </div>
    );
};

export default SignIn;