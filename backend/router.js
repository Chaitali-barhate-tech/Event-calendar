import express from 'express';
import users from './controllers/users/users.controller';
import authUser from './controllers/login/authenticate.controller';
import newUser from './controllers/users/new-user.controller';
import getUser from './controllers/users/get-user.controller';
import editUser from './controllers/users/edit-user.controller';
import userFormValidation from './validations/user-form.validations';
import CompanyTypeList from './controllers/companies/company-type.controller';
import AddNewCompany from './controllers/companies/add-new-company.controller';
import usersCount from './controllers/users/users-count.controller';
import companiesList from './controllers/companies/companies-list.controller';
import getFile from './controllers/get-file.controller';
import companyNamesList from './controllers/companies/company-names-list.controller';
import CreateNewEvent from './controllers/events/add-new-event.controller';
import getEvents from './controllers/events/get-events-list.controller';
import getEventTypes from './controllers/events/get-event-types.controller';
import getEventsbyCompany from './controllers/events/get-events-by-company.controller';
import getEventById from './controllers/events/get-event-by-id.controller';
import companyDetails from './controllers/companies/company-details.controller';
import searchSuggestions from './controllers/events/search-suggestions.controller';

const multipart = require('connect-multiparty');

const router = express.Router();

// For file upload
const multipartMiddleware = multipart({
  uploadDir: '../backend/uploads'
});

// Users
router.route('/users').get(users);
router.route('/users-count').get(usersCount);
router.route('/users/add').post(userFormValidation, newUser);
router.route('/users/:id').get(getUser);
router.route('/users/edit/:id').post(editUser);

// Get file
router.get('/file/:filename', getFile);

//Company
router.route('/company').get(companiesList);
router.route('/company/type').get(CompanyTypeList);
router.route('/company/add').post(multipartMiddleware, AddNewCompany);
router.route('/company/names').get(companyNamesList);
router.route('/company/events').get(getEventsbyCompany);
router.route('/company/:id').get(companyDetails);

// Login
router.route('/auth').post(authUser);

// Events
router.route('/event/add').post(multipartMiddleware, CreateNewEvent);
router.route('/event').get(getEvents);
router.route('/event/types').get(getEventTypes);
router.route('/event/suggestion').get(searchSuggestions);
router.route('/event/:id').get(getEventById);

module.exports = router;