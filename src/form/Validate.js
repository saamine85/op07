
const Validate = (values) => {
  const errors = {};
  const regUser = /^[A-Za-zÀ-ÿ ,.'-]{6,20}$/;
  const regDepartement = /^[A-Za-zÀ-ÿ ,.'-]{6,20}$/;
  const regEmail = /^[a-zA-Z0-9.-_]+@{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
  //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
  const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/;
  if (!values.username) {
    errors.username = "Ajouter votre nom et prénom";
  } else if (!regUser.test(values.username)) {
    errors.username = "Ajouter un prénom valid";
  }
  if (!values.email) {
    errors.email = "Ajouter Votre mail ";
  } else if (!regEmail.test(values.email)) {
    errors.email = "Ajouter un mail valid";
  }
  if (!values.departement) {
    errors.departement = "Ajouter votre département";
  } else if (!regDepartement.test(values.departement)) {
    errors.departement = "Ajouter un prénom valid";
  }
  if (!values.password) {
    errors.password = "Ajouter votre mot de passe";
  } else if (!regPassword.test(values.password)) {
    errors.password = "Ajouter un mot de passe valid";
  }
  return errors;
};

export default Validate;
