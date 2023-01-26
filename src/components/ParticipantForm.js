
import { useFormik } from "formik";
import * as Yup from "yup";

function ParticipantForm({ postData }) {

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, "First Name must be 15 characters or less").required("Required"),
      lastName: Yup.string().max(15, "Last Name must be 15 characters or less").required("Required"),
      email: Yup.string().email('Invalid email').required('Required'),
    }),
    onSubmit: (values) => {
      postData(values);
      formik.resetForm();
    },
  });

  return (
    <>
      <h1>Add participant</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          className="rounded-3 w-100 "
          {...formik.getFieldProps("firstName")}
        ></input>
        {formik.errors.firstName && formik.touched.firstName && (
          <div className="bg-light text-danger p-1 rounded-2">{formik.errors.firstName}</div>
        )}
        <br /><br />
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          className="rounded-3 w-100"
          {...formik.getFieldProps("lastName")}
        ></input>
        {formik.errors.lastName && formik.touched.lastName && (
          <div className="bg-light text-danger p-1 rounded-2">{formik.errors.lastName}</div>
        )}
        <br /><br/>
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          className="rounded-3 w-100"
          {...formik.getFieldProps("email")}
        ></input>
        {formik.errors.email && formik.touched.email && (
          <div className="bg-light text-danger p-1 rounded-2">{formik.errors.email}</div>
        )}
        <br /><br/>
        <button type="submit" className="rounded-3">
          Submit
        </button>
      </form>
    </>
  );
}
export default ParticipantForm;
