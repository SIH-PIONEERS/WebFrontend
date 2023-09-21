const login = [
    {
        type: "email",
        label: "Email id",
        name: "email",
        required: true,
    },
    {
        type: "password",
        label: "Password",
        name: "password",
        required: true,
    },

]

const signup = [

    {
        type: "text",
        label: "Name",
        name: "name",
        required: true,
    },

    {
        type: "email",
        label: "Email id",
        name: "email",
        required: true,
    },
    {
        type: "password",
        label: "Password",
        name: "password",
        required: true,
    },
    {
        type: "password",
        label: "Confirm Password",
        name: "Cpassword",
        required: true,
    },
]

export { login, signup }