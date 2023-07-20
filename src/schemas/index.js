import * as Yup from "yup";

export const SignUpSchema = Yup.object({
    name: Yup.string()
        .min(2)
        .required("Please enter name."),
    email: Yup.string().email("Please enter vaild email").required("Please enter email"),
    subject: Yup.string().required("Please enter subject."),
    message: Yup.mixed().required("Please enter message.")
});