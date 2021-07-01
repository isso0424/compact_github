import React, { ChangeEvent, FC, FormEvent } from "react";

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  value: string;
  placeholder: string;
  submitText: string;
}

export const SecretForm: FC<Props> = ({
  onChange,
  onSubmit,
  value,
  placeholder,
  submitText,
}) => {
  return (
    <form className="w-full max-w-lg rounded bg-gray-50" onSubmit={onSubmit}>
      <div className="flex items-center py-2 border-b border-black">
        <input
          className="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
          value={value}
          type="password"
          onChange={onChange}
          placeholder={placeholder}
        />
        <button className="flex-shrink-0 px-2 py-1 mr-1 text-sm text-white bg-gray-500 border-4 border-gray-500 rounded hover:bg-gray-700">
          {submitText}
        </button>
      </div>
    </form>
  );
};
