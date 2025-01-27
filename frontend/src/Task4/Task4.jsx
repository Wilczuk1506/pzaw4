import { useForm } from '@tanstack/react-form';
import axios from 'axios';

function Task4(){

    const form = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            school: 'sci',
        },
        onSubmit: async ({value}) => {
            try {
                const response = await axios.post(
                    'http://localhost:8000/task04/users/register',
                    value,
                );
                console.log('Form submitted successfully:', response.data);
            } catch (error) {
                console.error('Err:', error.response?.data?.message || error.message);
            }
        }
    });

    const nameValidators = {
        onChange: ({ value }) => {
            if (!value) return 'Name is required';
            if (value.length <= 3) return 'Name must be at least 3 characters long';
            if (value.length > 20) return 'Name must be shorter than 20 characters';
            return undefined;
        }
    }

    const emailValidators = {
        onChange: ({ value }) => {
            if (!value) return 'Email is required';
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email address';
            return undefined;
        }
    }

    const passwordValidators = {
        onChange: ({ value }) => {
            if (!value) return 'Password is required';
            if (value.length < 8) return 'Password must be at least 8 characters long';
            if (!/[A-Z]/.test(value)) return 'Password must contain at least one uppercase letter';
            if (!/[a-z]/.test(value)) return 'Password must contain at least one lowercase letter';
            if (!/[0-9]/.test(value)) return 'Password must contain at least one number';
            return undefined;
        }
    }

    const schoolValidators = {
        onchange: ({ value }) => {
            return undefined;
        }
    }

    return (
        <div>  
            <form onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
            }}
                className='m-5 border rounded p-3 w-50 mx-auto'
            >
                <form.Field 
                    name='name'
                    validators={nameValidators}
                    children={(field) => {
                        return (
                            <>
                                <label htmlFor={field.name} className='from-label'>Name</label>
                                <input 
                                    type='text'
                                    name={field.name}
                                    id={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    className='form-control w-50'
                                />
                                {field.state.meta.errors ? (
                                    <em role='alert'>{field.state.meta.errors.join(', ')}</em>
                                ) : <br />}
                            </>
                        );
                    }}
                />
                <br />
                <form.Field
                    name='email'
                    validators={emailValidators}
                    children={(field) => {
                        return (
                            <>
                                <label htmlFor={field.name} className='form-label'>Email</label>
                                <input 
                                    type='email'
                                    name={field.name}
                                    id={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    className='form-control w-50'
                                />
                                {field.state.meta.errors ? (
                                    <em role='alert'>{field.state.meta.errors.join(', ')}</em>
                                ) : <br />}
                            </>
                        );
                    }}
                />
                <br />
                <form.Field
                    name='password'
                    validators={passwordValidators}
                    children={(field) => {
                        return (
                            <>
                                <label htmlFor={field.name} className='form-label'>Password</label>
                                <input 
                                    type='password'
                                    name={field.name}
                                    id={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    className='form-control w-50'
                                />
                                {field.state.meta.errors ? (
                                    <em role='alert'>{field.state.meta.errors.join(', ')}</em>
                                ) : <br />}
                            </>
                        );
                    }}
                />
                <br />
                <form.Field
                    name='school'
                    validators={schoolValidators}
                    children={(field) => {
                        return (
                            <>
                                <label htmlFor={field.name} className='form-label'>School</label>
                                <select 
                                    type='select'
                                    name={field.name}
                                    id={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    className='form-select w-50'
                                >
                                    {
                                        [
                                            {name: 'sci', shownName: 'Szczecińskie Collegium Informatyczne'},
                                            {name: 'zut', shownName: 'Zachodniopomorski Uniwersytet Technologiczny'},
                                            {name: 'am', shownName: 'Akademia Morska'},
                                            {name: 'us', shownName: 'Uniwersytet Szczeciński'}
                                        ].map((element, index) => {
                                            return(
                                                <option value={element.name} key={index}>{element.shownName}</option>
                                            );
                                        })
                                    }
                                </select>
                            </>
                        );
                    }}
                />
                <br />
                <form.Subscribe 
                    selector={(state) => [state.canSubmit, state.isSubmitting]}
                    children={([canSubmit, isSubmitting]) => {
                        return (
                            <>
                                <button type='submit' disabled={!canSubmit} className={`btn btn-primary ${!canSubmit ? 'disabled' : ''}`}>
                                    {isSubmitting ? '...' : 'Submit'}
                                </button>
                            </>
                        );
                    }}
                />
            </form>
        </div>
    );
}

export default Task4;