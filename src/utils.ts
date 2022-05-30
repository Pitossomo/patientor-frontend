export const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

export const validateRequiredValue = (value: string): string | undefined => {
  if (!value) return requiredErrorMessage;
};

export const validateRequiredDate = (value: string): string | undefined => {
  if (!value) return requiredErrorMessage;
  else return validateDateValue(value);
};

export const validateDateValue = (value: string): string | undefined => {
  if (!isDate(value)) return notDateErrorMessage;
};

const requiredErrorMessage = "Field is required";
const notDateErrorMessage = "Field must be a valid date in the format YYYY-MM-DD";
