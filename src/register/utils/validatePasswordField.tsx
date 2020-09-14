import { IFormPasswordField, IFormField } from "../../utils/types";

export function validatePasswordField(password: IFormPasswordField, confirmation: IFormField){
  confirmation.isValid = password.value === confirmation.value;
  if(!confirmation.isValid) { confirmation.error = 'Please check: confirmation and password are not the same.'; }
  else { delete confirmation.error }

  password.hasLower = /[a-z]+/.test(password.value);
  password.hasUpper = /[A-Z]+/.test(password.value);
  password.hasNumber = /[0-9]+/.test(password.value);
  password.hasSymbol = /[^a-zA-Z0-9]+/.test(password.value);
  password.hasValidLength = /^.{8,20}$/.test(password.value);

  const { hasLower, hasUpper, hasSymbol, hasNumber, hasValidLength } = password;

  password.isValid = [hasLower, hasUpper, hasSymbol, hasNumber, hasValidLength].every(Boolean);
  if(!password.isValid) { password.error = 'Sorry! Password does not match all security requirements.'}
  else { delete password.error }

} 