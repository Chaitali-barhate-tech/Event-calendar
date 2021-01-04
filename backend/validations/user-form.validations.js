import { check } from 'express-validator';

let userFormValidation = [
    check('email')
        .not().isEmpty().withMessage('Email should not be empty'),
    check('email')
        .isEmail().withMessage('Please enter valid email address'),
    check('password')
        .not().isEmpty().withMessage('Password should not be empty')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/).withMessage('Please enter valid password'),
    check('firstname')
        .not().isEmpty().withMessage('Firstname should not be empty'),
    check('lastname')
        .not().isEmpty().withMessage('Lastname should not be empty'),
    check('usertype')
        .not().isEmpty().withMessage('Please select usertype')
]
    // email: 'required|email',
    // password: 'required',
    // firstname: 'required',
    // lastname: 'required',
    // usertype: 'required'
//});

export default userFormValidation;