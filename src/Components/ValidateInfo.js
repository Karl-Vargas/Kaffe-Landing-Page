export default function ValidateInfo(values) {
    let errors = {}
    // username
    if (!values.username.trim()) {
        errors.username = "Username required"
    }

    // Email
    if (!values.email) {
        errors.email = 'Email required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
      }
      // Password
    if (!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 6) {
        errors.password = "Password needs to be 6 characters or more"
    }
      // Password 2 - 
    if (!values.password2) {
        errors.password2 = "Confirm password is required";
    } else if (values.password2 !== values.password) {
        errors.password2 = "Password do not match. Check again"
    }
    return errors;
};
