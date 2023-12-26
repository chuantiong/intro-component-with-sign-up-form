import { useState } from 'react';
import errorIcon from '../assets/icon-error.svg';

const FreeTrial = () => {
    const [formData, setFormData] = useState(
            {
                firstName: '', 
                lastName: '',
                email: '',
                password: '',
            }
        );

    const [submitted, setSubmitted] = useState(false);

    console.log(formData)

    const handleChange = (e) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(prevState => !prevState)
    };

    const inputClass = (fieldValue) => {
        return submitted && fieldValue.trim() === '' ? 'input__input-field error' : 'input__input-field';
    };
    
    const showItem = (fieldValue) => {
        return submitted && fieldValue.trim() === '' ? 'block' : 'none';
    };

    return (
        <section className="free-trial">
            <div className="pricing">
                <h4 className="pricing__text">
                <span className="bold">
                    Try it free 7 days
                </span> then $20/mo. thereafter
                </h4>
            </div>
            <div className="claim">
                <form 
                    className="claim__form"
                    onSubmit={handleSubmit}
                >
                <div className="input">
                    <div className="input__input-wrapper">
                        <input
                            className={inputClass(formData.firstName)}
                            type="name"
                            placeholder="first Name"
                            onChange={handleChange}
                            name="firstName"
                            value={formData.firstName}
                        />
                        <img 
                            className="input__error-icon" 
                            src={errorIcon} 
                            alt="Error icon"
                            style={{
                                display: showItem(formData.firstName)
                            }}
                        />
                    </div>
                    <span 
                        className="input__error"
                        style={{
                            display: showItem(formData.firstName)
                        }}
                    >
                        First name cannot be empty
                    </span>
                </div>
                <div className="input">
                    <div className="input__input-wrapper">
                        <input
                            className={inputClass(formData.lastName)}
                            type="name"
                            placeholder="last Name"
                            onChange={handleChange}
                            name="lastName"
                            value={formData.lastName}
                        />
                        <img 
                            className="input__error-icon" 
                            src={errorIcon} 
                            alt="Error icon"
                            style={{
                                display: showItem(formData.lastName)
                            }}
                        />
                    </div>
                    <span 
                        className="input__error"
                        style={{
                            display: showItem(formData.lastName)
                        }}
                    >
                        Last name cannot be empty
                    </span>
                </div>
                <div className="input">
                    <div className="input__input-wrapper">
                        <input
                            className={inputClass(formData.email)}
                            type="email"
                            placeholder="email address"
                            onChange={handleChange}
                            name="email"
                            value={formData.email}
                        />
                        <img 
                            className="input__error-icon" 
                            src={errorIcon} 
                            alt="Error icon"
                            style={{
                                display: showItem(formData.email)
                            }}
                        />
                    </div>
                    <span 
                        className="input__error"
                        style={{
                            display: showItem(formData.email)
                        }}
                    >
                        Looks like this is not an email
                    </span>
                </div>
                <div className="input">
                    <div className="input__input-wrapper">
                        <input
                            className={inputClass(formData.password)}
                            type="password"
                            placeholder="password"
                            onChange={handleChange}
                            name="password"
                            value={formData.password}
                        />
                        <img 
                            className="input__error-icon" 
                            src={errorIcon} 
                            alt="Error icon"
                            style={{
                                display: showItem(formData.password)
                            }}
                        />
                    </div>
                    <span 
                        className="input__error"
                        style={{
                            display: showItem(formData.password)
                        }}
                    >
                        Password cannot be empty
                    </span>
                </div>
                <button className="claim__button" type='submit'>claim your free trial</button>
                </form>
                <h5 className="claim__agreeing-text">By clicking the button, you are agreeing to our <span className="claim__terms">Terms and Services</span></h5>
            </div>
        </section>
    )
};

export default FreeTrial;
