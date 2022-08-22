import { ChangeEvent, useState } from "react";

export const useForm = <T>(initialData: T) => {
  const [formData, setFormData] = useState<T>(initialData);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((data) => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  };

  const resetForm = () => {
    setFormData(initialData);
  };

  const isValidEmail = (email: string): boolean => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const isEmpty = (cadena: string): boolean => {
    return cadena.trim().length <= 0;
  };

  const isValidLength = (cadena: string, length: number): boolean => {
    return cadena.trim().length >= length;
  }; 

  const areEqual = (cadena1: string, cadena2: string): boolean => {
    return cadena1 === cadena2;
  }

  return {
    formData,
    ...formData,
    onChange,
    resetForm,
    isValidEmail,
    isEmpty,
    isValidLength,
    areEqual
  };
};
