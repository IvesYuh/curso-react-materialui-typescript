import { TextField, TextFieldProps } from '@mui/material';
import { useField } from '@unform/core';
import { useEffect, useRef, useState } from 'react';

type TVTextFieldProps = TextFieldProps & {
  name: string;
};

export const VTextField: React.FC<TVTextFieldProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField, defaultValue, error, clearError } = useField(name);

  const [value, setValue] = useState(defaultValue || '');

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: ref => ref.value,
      setValue: (ref, newValue) => {
        setValue(newValue);
        ref.value = newValue;
      },
      clearValue: ref => {
        setValue('');
        ref.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <TextField
      {...rest}
      onChange={e => {
        setValue(e.target.value);
        if (error) clearError();
      }}

      error={!!error}
      helperText={error}
      defaultValue ={defaultValue}
      
      inputRef={inputRef}
      value={value}
      onKeyDown={() => error ? clearError() : undefined}
    />
  );
};