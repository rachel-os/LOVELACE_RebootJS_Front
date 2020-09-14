import { IFormField } from "../../utils/types";

export function validateNameField(field: IFormField){
  field.isValid = /^[a-z- ]{1,20}$/i.test(field.value);
  if(!field.isValid) { field.error = "Name must be between 1 and 20 caracters"; }
  else { delete field.error }
} 