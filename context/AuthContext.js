"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
    const [Loading, setLoading] = useState(false); // for loading animation
    const router = useRouter();
    const [user, setuser] = useState(null)
    // link
    const host = "http://localhost:5000/";

    //   Check weather the user was logged in or not
    useEffect(() => {
        // fetch()
    }, []);

    // fetch from authtoken 
    const fetch = async () => {
        let auth = localStorage.getItem('authtoken')
        if (!auth) {
            alert('Please login')
            return false
        }
        axios
            .post(`${host}uni/fetch`, {}, {
                headers: {
                    'auth-token': auth
                },
            }
            )
            .then(res => {
                console.log('res', res.data);
                alert("login")
            })
            .catch(err => {
                console.log('error in request', err);
                alert(err)
            });
    };

    // university start


    const login = async ({ email, password,link }) => {
        axios
            .post(`${host}${link}/login`, {
                email, password
            }
            )
            .then(res => {
                console.log('res', res.data);
                alertN("done", 3)
                fetch()
                localStorage.setItem("authtoken", res.data.authtoken);
            })
            .catch(err => {
                console.log('error in request', err);
                alert(err)
            });

    };

    const signup = async ({ email, password, name,link }) => {
        setLoading(true)
        axios
            .post(`${host}${link}/create`, {
                email, password,name
            }
            )
            .then(res => {
                console.log('res', res.data);
                alertN("done", 3)
                fetch()
                localStorage.clear();
                localStorage.setItem("authtoken", res.data.authtoken);
                setLoading(false)
            })
            .catch(err => {
                console.log("error")
                console.log('error in request', err.response.data.error);
                setLoading(false)
                alertN(err.response.data.error,1)
                
            });

    };
    
    // const signup = async ({ email, password, name,link }) => {
    //     let credentials = {email, password,name};
    //     let response = await fetch(`${host}${link}/create`, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(credentials),
    //     });
    //     console.log("first")
    //     // let res = await response.json();
    //     // if (!res.success) {
    //     //   alert(res.error);
    //     // } else {
    //     //   alert("done");
    //     // }
    //     // return res
    //   };



    // university end


    // alert ======================================
    // alert content start
    const [showAlert, setshowAlert] = useState(false);
    const [textAlert, settextAlert] = useState("");
    const [warnAlert, setwarnAlert] = useState(1);
    const alertN = (text, warn) => {
        settextAlert(text);
        setwarnAlert(warn);
        setshowAlert(true);
    };
    // show, setShow, text,warn1
    // alert content end

    return (
        <AuthContext.Provider
            value={{
                // returning all the essential functions and variables
                //alert strart
                alertN,
                showAlert,
                setshowAlert,
                textAlert,
                warnAlert,
                //alert end

                // university start
                login,
                signup,
                fetch,
                //university end

                // loading start
                Loading,
                setLoading,
                //loading end
            }}
        >
            {/* till the user data is fetching we will not render the child */}
            {children}
        </AuthContext.Provider>
    );
};