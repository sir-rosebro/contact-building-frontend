"use client"

import React from 'react';
import { useForm } from 'react-hook-form';

const ContactFormV2 = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields },
        reset,
        trigger
    } = useForm({ mode: 'onBlur' });

    const onSubmit = (data) => {
        console.log("Submitted Data:", data);
        alert("Thanks for your message!");
        reset();
    };

    const getValidationClass = (fieldName) => {
        if (!touchedFields[fieldName]) return '';
        return errors[fieldName] ? 'is-invalid' : 'is-valid';
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="row">
                    <div className="form-box">
                        <label className="form-label" style={{ color: '#414141' }}>First Name</label>
                        <input
                            type="text"
                            className={`form-control ${getValidationClass('firstName')}`}
                            placeholder="John"
                            autoComplete='off'
                            {...register("firstName", { required: "First name is required" })}
                        />
                        {errors.firstName && <div className="invalid-feedback mt-1">{errors.firstName.message}</div>}
                    </div>
                    <div className="form-box">
                        <label className="form-label" style={{ color: '#414141' }}>Last Name</label>
                        <input
                            type="text"
                            className={`form-control ${getValidationClass('lastName')}`}
                            placeholder="Done"
                            autoComplete='off'
                            {...register("lastName", { required: "Last name is required" })}
                        />
                        {errors.lastName && <div className="invalid-feedback mt-1">{errors.lastName.message}</div>}
                    </div>
                    <div className="form-box">
                        <label className="form-label" style={{ color: '#414141' }}>Email Address</label>
                        <input
                            type="email"
                            className={`form-control ${getValidationClass('email')}`}
                            placeholder="Email Address"
                            autoComplete='off'
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email address"
                                }
                            })}
                        />
                        {errors.email && <div className="invalid-feedback mt-1">{errors.email.message}</div>}
                    </div>
                    <div className="form-box">
                        <label className="form-label" style={{ color: '#414141' }}>Comment</label>
                        <textarea
                            className={`form-control ${getValidationClass('message')}`}
                            rows="5"
                            placeholder="Comment"
                            autoComplete='off'
                            {...register("message", { required: "Comment is required" })}
                        ></textarea>
                        {errors.message && <div className="invalid-feedback mt-1">{errors.message.message}</div>}
                    </div>
                <div className="col-lg-12 col-md-12">
                    <div className="form-box-button inner">
                        <button type="submit" className="btn btn-primary px-4 py-2">Send Message</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactFormV2;