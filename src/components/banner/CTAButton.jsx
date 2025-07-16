"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const CTAButton = () => {
    const [showModal, setShowModal] = useState(false);
    const [previews, setPreviews] = useState([]);
    const [activeForm, setActiveForm] = useState('estimate');
    const [showThankYou, setShowThankYou] = useState(false);
  
    const {
      register: registerEstimate,
      handleSubmit: handleSubmitEstimate,
      formState: { errors: errorsEstimate },
      reset: resetEstimate,
      watch: watchEstimate,
    } = useForm();

    const {
      register: registerCallback,
      handleSubmit: handleSubmitCallback,
      formState: { errors: errorsCallback },
      reset: resetCallback,
    } = useForm();
  
    const files = watchEstimate('photos');
    useEffect(() => {
      if (files && files.length > 0) {
        const newPreviews = Array.from(files).map((file) =>
          URL.createObjectURL(file)
        );
        setPreviews(newPreviews);
  
        // Clean up URLs when component updates or unmounts
        return () => {
          newPreviews.forEach((url) => URL.revokeObjectURL(url));
        };
      } else {
        setPreviews([]);
      }
    }, [files]);
  
    const onSubmitEstimate = (data) => {
      console.log('Estimate Form Data:', data);
      setShowThankYou(true);
      setTimeout(() => {
        setShowModal(false);
        setShowThankYou(false);
        setPreviews([]);
        resetEstimate();
        setActiveForm('estimate');
      }, 2000); // Close after 2 seconds
    };
  
    const onSubmitCallback = (data) => {
      console.log('Callback Form Data:', data);
      setShowThankYou(true);
      setTimeout(() => {
        setShowModal(false);
        setShowThankYou(false);
        resetCallback();
        setActiveForm('estimate');
      }, 2000); // Close after 2 seconds
    };
  
    const handleShow = (e) => {
      e.preventDefault();
      setShowModal(true);
      setActiveForm('estimate'); // Open with estimate form
    };
  
    const handleClose = () => {
      setShowModal(false);
      setPreviews([]);
      resetEstimate();
      resetCallback();
      setActiveForm('estimate');
      setShowThankYou(false);
    };
  
    const handleSwitchToCallback = () => {
      setActiveForm('callback');
      resetEstimate(); // Reset estimate form when switching
    };
  
    const handleBackToEstimate = () => {
      setActiveForm('estimate');
      resetCallback(); // Reset callback form when switching
    };

    return (
      <>
        <div className="eulding-btn">
            <Link href="#" onClick={handleShow}>
            Request an Estimate{' '}
            <i className="bi bi-arrow-up-right-circle-fill"></i>
            </Link>
        </div>
        <div
          className={`modal fade ${showModal ? 'show d-block' : ''}`}
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content fancy-modal-content">
              {/* Thank You Popup */}
              {showThankYou ? (
                <div className="thank-you-popup">
                  <div className="thank-you-content">
                    <h5 className="thank-you-title">
                      Thank you for reaching out to us!
                    </h5>
                    <p className="thank-you-message">
                      We&apos;ll get back to you soon.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="modal-header border-0 pb-0">
                    <h5 className="modal-title w-100 text-center">
                      {activeForm === 'estimate'
                        ? 'Request an Estimate'
                        : 'Request a Call Back'}
                    </h5>
                    <button
                      type="button"
                      className="btn-close btn-close-white"
                      onClick={handleClose}
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    {/* Request an Estimate Form */}
                    {activeForm === 'estimate' && (
                      <form
                        onSubmit={handleSubmitEstimate(onSubmitEstimate)}
                        className="fancy-form"
                        style={{ textAlign: 'left' }}
                      >
                          {/* Request a Call Back Button */}
                          <div className="text-center mb-4">
                          <button
                            type="button"
                            className="callback-btn"
                            onClick={handleSwitchToCallback}
                          >
                            Prefer a Call Back? Click Here
                          </button>
                        </div>
                        {/* Name Field */}
                        <div className="mb-4 form-group">
                          <label htmlFor="formName" className="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            className={`form-control ${errorsEstimate.name ? 'is-invalid' : ''}`}
                            id="formName"
                            placeholder="Enter your name"
                            {...registerEstimate('name', {
                              required: 'Name is required',
                              minLength: {
                                value: 2,
                                message: 'Name must be at least 2 characters',
                              },
                            })}
                          />
                          {errorsEstimate.name && (
                            <div className="invalid-feedback">
                              {errorsEstimate.name.message}
                            </div>
                          )}
                        </div>
  
                        {/* Contact Number Field */}
                        <div className="mb-4 form-group">
                          <label htmlFor="formContact" className="form-label">
                            Contact Number
                          </label>
                          <input
                            type="tel"
                            className={`form-control ${errorsEstimate.contact ? 'is-invalid' : ''}`}
                            id="formContact"
                            placeholder="Enter your contact number"
                            {...registerEstimate('contact', {
                              required: 'Contact number is required',
                              pattern: {
                                value: /^[0-9]{10}$/,
                                message: 'Enter a valid 10-digit phone number',
                              },
                            })}
                          />
                          {errorsEstimate.contact && (
                            <div className="invalid-feedback">
                              {errorsEstimate.contact.message}
                            </div>
                          )}
                        </div>
  
                        {/* Services Required Checkboxes */}
                        <div className="mb-4 form-group">
                          <label className="form-label">Services Required</label>
                          <div className="d-flex flex-wrap gap-3">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="waterproofing"
                                {...registerEstimate('services', {
                                  validate: (value) =>
                                    value && value.length > 0
                                      ? true
                                      : 'At least one service must be selected',
                                })}
                                value="Waterproofing"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="waterproofing"
                              >
                                Waterproofing
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="generalFixes"
                                {...registerEstimate('services')}
                                value="General Fixes"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="generalFixes"
                              >
                                General Fixes
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="bathroomKitchen"
                                {...registerEstimate('services')}
                                value="Bathroom and Kitchen Renovation"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="bathroomKitchen"
                              >
                                Bathroom & Kitchen Renovation
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="painting"
                                {...registerEstimate('services')}
                                value="Painting"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="painting"
                              >
                                Painting
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="generalFixes"
                                {...registerEstimate('services')}
                                value="Tiling"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Tiling"
                              >
                               Tiling
                              </label>
                            </div>
                          </div>
                          {errorsEstimate.services && (
                            <div className="invalid-feedback d-block">
                              {errorsEstimate.services.message}
                            </div>
                          )}
                        </div>
  
                        {/* Services Description Field */}
                        <div className="mb-4 form-group">
                          <label
                            htmlFor="formServicesDescription"
                            className="form-label"
                          >
                            Services Description
                          </label>
                          <textarea
                            className={`form-control ${errorsEstimate.servicesDescription ? 'is-invalid' : ''}`}
                            id="formServicesDescription"
                            rows="3"
                            placeholder="Describe the services you need in detail..."
                            {...registerEstimate('servicesDescription', {
                              required: 'Please describe the services required',
                              minLength: {
                                value: 10,
                                message:
                                  'Description must be at least 10 characters',
                              },
                            })}
                          ></textarea>
                          {errorsEstimate.servicesDescription && (
                            <div className="invalid-feedback">
                              {errorsEstimate.servicesDescription.message}
                            </div>
                          )}
                        </div>
  
                        {/* Photo Preview Section */}
                        {previews.length > 0 && (
                          <div className="photo-preview mb-3">
                            <div className="d-flex flex-wrap gap-3 justify-content-center">
                              {previews.map((preview, index) => (
                                <div key={index} className="preview-card">
                                  <Image
                                    src={preview}
                                    alt={`Preview ${index + 1}`}
                                    className="preview-img"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
  
                        {/* Multiple Photo Upload Field */}
                        <div className="mb-4 form-group">
                          <label htmlFor="formPhotos" className="form-label">
                            Upload Photos (Optional)
                          </label>
                          <input
                            type="file"
                            multiple
                            className={`form-control ${errorsEstimate.photos ? 'is-invalid' : ''}`}
                            id="formPhotos"
                            accept="image/*"
                            {...registerEstimate('photos', {
                              validate: (files) => {
                                if (files.length > 0) {
                                  for (let i = 0; i < files.length; i++) {
                                    const file = files[i];
                                    const maxSize = 5 * 1024 * 1024; // 5MB
                                    if (file.size > maxSize) {
                                      return `File "${file.name}" must be less than 5MB`;
                                    }
                                  }
                                }
                                return true;
                              },
                            })}
                          />
                          {errorsEstimate.photos && (
                            <div className="invalid-feedback">
                              {errorsEstimate.photos.message}
                            </div>
                          )}
                        </div>
  
                        {/* Submit Button */}
                        <div className="text-center">
                          <button type="submit" className="btn submit-btn">
                            <span>Submit Request</span>
                          </button>
                        </div>
                      </form>
                    )}
  
                    {/* Request a Call Back Form */}
                    {activeForm === 'callback' && (
                      <form
                        onSubmit={handleSubmitCallback(onSubmitCallback)}
                        className="fancy-form"
                      >
                        <div className="text-center mb-4">
                          <button
                            className="back-btn"
                            onClick={handleBackToEstimate}
                            type="button"
                          >
                            <i className="bi bi-arrow-left"></i> Back to Estimate Form
                          </button>
                        </div>
  
                        {/* Contact Number Field */}
                        <div className="mb-4 form-group">
                          <label
                            htmlFor="formCallbackContact"
                            className="form-label"
                          >
                            Contact Number
                          </label>
                          <input
                            type="tel"
                            className={`form-control ${errorsCallback.contact ? 'is-invalid' : ''}`}
                            id="formCallbackContact"
                            placeholder="Enter your contact number"
                            {...registerCallback('contact', {
                              required: 'Contact number is required',
                              pattern: {
                                value: /^[0-9]{10}$/,
                                message: 'Enter a valid 10-digit phone number',
                              },
                            })}
                          />
                          {errorsCallback.contact && (
                            <div className="invalid-feedback">
                              {errorsCallback.contact.message}
                            </div>
                          )}
                        </div>
  
                        {/* Submit Button */}
                        <div className="text-center">
                          <button type="submit" className="btn submit-btn">
                            <span>Request Call Back</span>
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
  
        {/* Custom Styles */}
        <style jsx>{`
          .fancy-modal-content {
            background: linear-gradient(135deg, #fff, #f5f5f5);
            border-radius: 20px;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
            border: 3px solid #ff6600;
            animation: zoomIn 0.5s ease-in-out;
            position: relative;
            overflow: hidden;
          }
  
          @keyframes zoomIn {
            0% {
              transform: scale(0.8);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
  
          .modal-header {
            background: linear-gradient(90deg, #ff6600, #e65c00);
            color: #fff;
            border-top-left-radius: 17px;
            border-top-right-radius: 17px;
            padding: 20px;
            position: relative;
          }
  
          .modal-header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              45deg,
              rgba(255, 255, 255, 0.1),
              transparent
            );
            opacity: 0.5;
          }
  
          .modal-title {
            font-size: 1.8rem;
            font-weight: 800;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
            position: relative;
          }
  
          .btn-close-white {
            filter: invert(1);
            opacity: 0.8;
            transition: all 0.3s ease;
          }
  
          .btn-close-white:hover {
            opacity: 1;
            transform: rotate(90deg);
          }
  
          .thank-you-popup {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 200px;
            animation: fadeIn 0.5s ease-in-out;
          }
  
          .thank-you-content {
            text-align: center;
          }
  
          .thank-you-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #ff6600;
            margin-bottom: 10px;
          }
  
          .thank-you-message {
            font-size: 1rem;
            color: #333;
          }
  
          .callback-btn {
            background: none;
            border: 2px solid #ff6600;
            border-radius: 25px;
            padding: 8px 20px;
            font-size: 1rem;
            font-weight: 600;
            color: #ff6600;
            transition: all 0.3s ease;
          }
  
          .callback-btn:hover {
            background: #ff6600;
            color: #fff;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255, 102, 0, 0.3);
          }
  
          .back-btn {
            background: none;
            border: none;
            color: #ff6600;
            font-size: 1rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 5px;
            transition: all 0.3s ease;
          }
  
          .back-btn:hover {
            color: #e65c00;
            transform: translateX(-5px);
          }
  
          .back-btn i {
            font-size: 1.2rem;
          }
  
          .fancy-form {
            padding: 30px;
            position: relative;
          }
  
          .photo-preview {
            background: #f9f9f9;
            border-radius: 15px;
            padding: 15px;
            box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
            animation: fadeIn 0.5s ease-in-out;
          }
  
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
  
          .preview-card {
            position: relative;
            width: 100px;
            height: 100px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
          }
  
          .preview-card:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 20px rgba(255, 102, 0, 0.3);
          }
  
          .preview-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
  
          .form-group {
            position: relative;
            margin-bottom: 1.5rem;
            transition: all 0.3s ease;
          }
  
          .form-label {
            font-weight: 700;
            color: #333;
            font-size: 0.95rem;
            display: block;
            margin-bottom: 8px;
            transition: all 0.3s ease;
            position: relative;
            z-index: 1;
          }
  
          .form-label::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: #ff6600;
            transition: width 0.3s ease;
          }
  
          .form-group:hover .form-label::after {
            width: 50px;
          }
  
          .form-check {
            transition: all 0.3s ease;
          }
  
          .form-check-input {
            border: 2px solid #ff6600;
            transition: all 0.3s ease;
          }
  
          .form-check-input:checked {
            background-color: #ff6600;
            border-color: #ff6600;
          }
  
          .form-check-label {
            color: #444;
            font-weight: 500;
            transition: all 0.3s ease;
          }
  
          .form-check:hover .form-check-label {
            color: #ff6600;
          }
  
          .form-control {
            border: 2px solid #e0e0e0;
            border-radius: 12px;
            padding: 12px 15px;
            font-size: 1rem;
            background: #fff;
            transition: all 0.4s ease;
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
            position: relative;
          }
  
          .form-control:focus {
            border-color: #ff6600;
            box-shadow: 0 0 15px rgba(255, 102, 0, 0.4);
            transform: translateY(-3px);
            background: #fff9f2;
          }
  
          .form-control::placeholder {
            color: #bbb;
            font-style: italic;
            transition: all 0.3s ease;
          }
  
          .form-control:focus::placeholder {
            color: #ff6600;
            opacity: 0.5;
          }
  
          .form-control.is-invalid,
          .form-check-input.is-invalid {
            border-color: #dc3545;
            box-shadow: 0 0 10px rgba(220, 53, 69, 0.3);
          }
  
          .invalid-feedback {
            font-size: 0.85rem;
            color: #dc3545;
            margin-top: 5px;
            animation: shake 0.5s ease;
          }
  
          @keyframes shake {
            0%,
            100% {
              transform: translateX(0);
            }
            25%,
            75% {
              transform: translateX(-5px);
            }
            50% {
              transform: translateX(5px);
            }
          }
  
          .submit-btn {
            background: linear-gradient(90deg, #ff6600, #e65c00);
            border: none;
            padding: 12px 40px;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: 700;
            color: #fff;
            text-transform: uppercase;
            letter-spacing: 2px;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(255, 102, 0, 0.3);
          }
  
          .submit-btn:hover {
            background: linear-gradient(90deg, #e65c00, #cc5200);
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(255, 102, 0, 0.5);
          }
  
          .submit-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.3),
              transparent
            );
            transition: 0.6s;
          }
  
          .submit-btn:hover::before {
            left: 100%;
          }
  
          .submit-btn span {
            position: relative;
            z-index: 1;
          }
        `}</style>
      </>
    );
}

export default CTAButton
