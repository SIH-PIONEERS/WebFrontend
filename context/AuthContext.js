"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
    const [Loading, setLoading] = useState(false); // for loading animation
    const router = useRouter();
    const [stStatus, setstStatus] = useState(null)
    const [list, setlist] = useState([])
    // link
    const host = "http://localhost:5000/";

    //   Check weather the user was logged in or not
    useEffect(() => {
        // fetch()
    }, []);

    // fetch from authtoken 
    const fetch = async () => {
        setLoading(true)
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
                setLoading(false)
                alert("login")
            })
            .catch(err => {
                console.log('error in request', err);
                setLoading(false)
                alertN(err.response.data.error, 1)
            });
    };

    // university start
    const login = async ({ email, password, link }) => {
        setLoading(true)
        axios
            .post(`${host}${link}/login`, {
                email, password
            }
            )
            .then(res => {
                console.log('res', res.data);
                alertN("done", 3)
                // fetch()
                localStorage.clear()
                localStorage.setItem("authtoken", res.data.authtoken);
                setLoading(false)
                listFetch()
                if (link == "uni") {
                    router.push("/university");
                } else if (link == "college") {
                    router.push("/college")
                } else if (link == "student") {
                    router.push("/student")
                }
            })
            .catch(err => {
                console.log('error in request', err);
                setLoading(false)
                alertN(err.response.data.error, 1)
            });

    };

    const listFetch = async () => {
        setLoading(true)
        let auth = localStorage.getItem('authtoken')
        if (!auth) {
            alert('Please login')
            router.push("/university/login")
        }
        axios
            .get(`http://localhost:5000/monitoring/college/list`, {
                headers: {
                    'auth-token': auth,
                },
            })
            .then(res => {
                console.log('res', res.data);
                setlist(res.data.addedColleges);
                setLoading(false)

            })
            .catch(err => {
                console.log('error in request', err);
                setLoading(false)
                // router.push("/university/login")
            });

    };

    const signup = async ({ email, password, name, link }) => {
        setLoading(true)
        axios
            .post(`${host}${link}/create`, {
                email, password, name
            }
            )
            .then(res => {
                console.log('res', res.data);
                alertN("done", 3)
                fetch()
                localStorage.clear();
                localStorage.setItem("authtoken", res.data.authtoken);
                setLoading(false)
                if (link == "college") {
                    router.push("/college")
                } else if (link == "student") {
                    router.push("/student")
                }
            })
            .catch(err => {
                console.log("error")
                console.log('error in request', err.response.data.error);
                setLoading(false)
                alertN(err.response.data.error, 1)

            });

    };

    const addSingle = async ({ name, email, link }) => {
        setLoading(true)
        let auth = localStorage.getItem('authtoken')
        if (!auth) {
            alert('Please login')
            router.push("/")
        }
        axios
            .post(`${host}${link}`, {
                name, email
            }, {
                headers: {
                    'auth-token': auth,
                    "enctype": "multipart/form-data"
                },
            })
            .then(res => {
                console.log('res', res.data);
                setLoading(false)
                alertN("done", 3)
                if (link == "university/addcollege") {
                    router.push("/university")
                }
                else if (link == "collegeworking/addmentor" || link == "collegeworking/addstudent") {
                    router.push("/college")
                }
            })
            .catch(err => {
                console.log('error in request', err);
                setLoading(false)
                alertN(err.response.data.error, 1)
            });

    };

    const addBulk = async ({ file, link }) => {
        setLoading(true)
        let auth = localStorage.getItem('authtoken')
        if (!auth) {
            alert('Please login')
            router.push("/")
        }
        const formData = new FormData()
        formData.append("csvFile", file)
        axios
            .post(`${host}${link}`,
                formData, {
                headers: {
                    'auth-token': auth,
                    "enctype": "multipart/form-data"
                },
            }
            )
            .then(res => {
                console.log(res)
                console.log('res', res.data);
                setLoading(false)
                alertN("done", 3)
                if (link == "university/addcollege/bulk") {
                    router.push("/university")
                }
                else if (link == "collegeworking/addmentor/bulk" || link == "collegeworking/addstudent/bulk") {
                    router.push("/college")
                }
            })
            .catch(err => {
                console.log('error in request', err);
                setLoading(false)
                alertN(err.response.data.error, 1)
            });

    };

    const studentStatus = async () => {
        setLoading(true)
        let auth = localStorage.getItem('authtoken')
        if (!auth) {
            alert('Please login')
            router.push("/")
        }
        axios
            .get(`${host}submission/upload/status`, {
                headers: {
                    'auth-token': auth,
                    "enctype": "multipart/form-data"
                },
            })
            .then(res => {
                console.log('res', res.data);
                setLoading(false)
                setstStatus(res.data);
            })
            .catch(err => {
                console.log('error in request', err);
                setstStatus(false);
                setLoading(false)
            });

    };

    const titleUpload = async ({ title }) => {
        setLoading(true)
        let auth = localStorage.getItem('authtoken')
        if (!auth) {
            alert('Please login')
            router.push("/")
        }
        axios
            .post(`${host}submission/upload/title`, {
                title
            }, {
                headers: {
                    'auth-token': auth,
                    "enctype": "multipart/form-data"
                },
            })
            .then(res => {
                console.log('res', res.data);
                setLoading(false)
                studentStatus()
                alertN("Done", 3)
                router.push("/student")
            })
            .catch(err => {
                console.log('error in request', err);
                setLoading(false)
                alertN(err.response.data.error, 1)
            });

    };

    const dissertationUpload = async ({ file }) => {
        setLoading(true)
        let auth = localStorage.getItem('authtoken')
        if (!auth) {
            alert('Please login')
            router.push("/")
        }
        const formData = new FormData()
        formData.append("dissertation", file)
        axios
            .post(`${host}submission/upload/dissertation`,
                formData, {
                headers: {
                    'auth-token': auth,
                    "enctype": "multipart/form-data"
                },
            }
            )
            .then(res => {
                console.log(res)
                console.log('res', res.data);
                setLoading(false)
                alertN("done", 3)
                router.push("/student")
            })
            .catch(err => {
                console.log('error in request', err);
                setLoading(false)
                alertN(err.response.data.error, 1)
            });

    };

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
                listFetch,
                list,
                addBulk,
                addSingle,
                //university end
                studentStatus,
                dissertationUpload,
                titleUpload,
                stStatus,
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