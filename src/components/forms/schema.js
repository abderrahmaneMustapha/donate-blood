import * as Yup from "yup";
export const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .max(100, "Too Long!")
        .required("Required"),
        
    prenom: Yup.string()
        .min(2, "Too Short!")
        .max(100, "Too Long!")
        .required("Required"),

    email: Yup.string()
        .email("Please Enter a valide email adress")
        .required("Required"),

    password1: Yup.string()
        .min(8, "Too Short!")
        .max(100, "Too Long!")
        .required("Required"),

    password2: Yup.string()
        .min(8, "Too Short!")
        .max(100, "Too Long!")
        .required("Required"),

    groupage: Yup.string()
    .min(1, "Too Short!")
        .max(3, "Too Long!")
        .required("Required"),

    phone: Yup.string()
    .min(1, "Too Short!")
        .max(100, "Too Long!")
        .required("Required"),

    gender: Yup.string()
    .min(1, "Too Short!")
        .max(1, "Too Long please choose F or M!")
        .required("Required"),

    city: Yup.string()
        .min(2, "Too Short!")
        .max(100, "Too Long!")
        .required("Required"),
});
