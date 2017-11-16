const formikExample = `class Example extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{
          userName: "",
          email: "",
          password: ""
        }}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          alert(JSON.stringify(values, 4, null));
        }}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input name="userName" type="text" value={values.userName} onChange={handleChange} onBlur={handleBlur} />
            {errors.userName && touched.userName && <div>{errors.userName}</div>}
            <label>E-mail</label>
            <input name="email" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <label>Password</label>
            <input name="password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
            {errors.password && touched.password && <div>{errors.password}</div>}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      />
    );
  }
}

render(<Example />);`.trim();

export { formikExample };
