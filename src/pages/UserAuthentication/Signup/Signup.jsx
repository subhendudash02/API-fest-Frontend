import login from "../assets/login.svg";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  FormContainer,
  InputGroup,
  StyledError,
} from "../Components/FormComponents";
import { Link } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required!"),
  password: Yup.string()
    .min(4, "Minimum 4 characters needed")
    .max(30, "Too long :(")
    .required("Required!"),
});

export const Signup = () => {
  const handleLogin = (values) => {
    const { name, email, password } = values;
    //dispatch login action here
    console.log({ name, email, password });
  };

  return (
    <div className="w-full h-screen">
      <div className="w-[80%] h-full mx-auto flex">
        <div className="w-1/2 h-full p-8">
          <img
            src={login}
            alt="login"
            style={{ height: "100%", width: "70%", margin: "0 auto" }}
          />
        </div>
        <div className="w-1/2 h-full flex justify-center items-center">
          <FormContainer>
            <h2 className="text-4xl font-bold">Sign Up</h2>
            <Formik
              initialValues={initialValues}
              onSubmit={handleLogin}
              validationSchema={validationSchema}
            >
              <Form>
                <InputGroup>
                  <label htmlFor="email">Name</label>
                  <Field type="text" id="name" name="name" autoComplete="off" />
                  <ErrorMessage name="name" component={StyledError} />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="off"
                  />
                  <ErrorMessage name="email" component={StyledError} />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="off"
                  />
                  <ErrorMessage name="password" component={StyledError} />
                </InputGroup>
                <InputGroup>
                  <button
                    type="submit"
                    className="rounded-sm px-6 py-2 bg-slate-900 text-gray-200 hover:bg-slate-800"
                  >
                    Sign Up
                  </button>
                </InputGroup>
              </Form>
            </Formik>
            <InputGroup>
              <p className="my-2 text-gray-800">
                Have account? <Link to="/login">Login</Link>
              </p>
            </InputGroup>
          </FormContainer>
        </div>
      </div>
    </div>
  );
};
