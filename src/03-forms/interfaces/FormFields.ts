export interface FieldConfig {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  value: string;
  validations: Validation[];
  options?: Option[];
}

export interface Validation {
  type: string;
  value?: number;
}

export interface Option {
  id: number;
  label: string;
}
