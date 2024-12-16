import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: Record<string, any>) => {
    console.log('Form Submitted:', data);
    alert('Form submitted successfully!');
  };

  const formFields = [
    { name: 'name', label: 'User Name*', type: 'text', validation: { required: 'Name is required' } },
    { name: 'email', label: 'Email Address*', type: 'text', validation: { required: 'Email address is required' } },
    { name: 'reason', label: 'Why do you want to delete your account?*', type: 'text', validation: { required: 'Reason is required' } },
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2>Delete Your Account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formFields.map((field, index) => (
          <div key={index} style={{ marginBottom: '15px' }}>
            {field.type === 'text' && (
              <div className="relative w-full">
                <input
                  type={field.type}
                  {...register(field.name, field.validation)}
                  id={field.name}
                  className={`block p-[15px] w-full text-base text-gray-900 bg-white border ${errors[field.name] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring-2`}
                />
                <label
                  htmlFor={field.name}
                  className={`absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-3 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4`}
                >
                  {field.label}
                </label>
                {errors[field.name] && <p style={{ color: 'red' }}>{String(errors[field.name]?.message)}</p>}
              </div>
            )}
          </div>
        ))}
        <button type="submit" style={{ padding: '10px 20px', background: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
