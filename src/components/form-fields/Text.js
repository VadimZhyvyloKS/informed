import React from 'react';
import asField from '../../HOC/asField';

const Text = ({ fieldApi, fieldState, ...props }) => {
  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const {
    onChange,
    onBlur,
    field,
    initialValue,
    forwardedRef,
    ...rest
  } = props;
  return (
    <input
      {...rest}
      name={field}
      ref={forwardedRef}
      value={!value && value !== 0 ? '' : value}
      onChange={e => {
        console.log('SETTING VALUE', e.target.value);
        setValue(e.target.value);
        if (onChange) {
          onChange(e);
        }
      }}
      onBlur={e => {
        setTouched();
        if (onBlur) {
          onBlur(e);
        }
      }}
    />
  );
};

export { Text as BasicText };

export default asField(Text);
