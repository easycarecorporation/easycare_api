'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

// auth
Route.post('auth', 'UserController.auth')

//users
Route.resource('users', 'UserController').validator(new Map([
    [['users.store'], ['User/StoreUser']],
    [['users.update'], ['User/UpdateUser']],
    [['users.destroy'], ['User/DestroyUser']]
]))

//caregivers
Route.resource('caregivers', 'CaregiverController').validator(new Map([
    [['caregivers.store'], ['Caregiver/StoreCaregiver']],
    [['caregivers.update'], ['Caregiver/UpdateCaregiver']],
])).middleware('auth')

//bracelets
Route.resource('bracelets', 'BraceletController').validator(new Map([
    [['bracelets.store'], ['Bracelet/StoreBracelet']],
    [['bracelets.update'], ['Bracelet/UpdateBracelet']],
])).middleware('auth')

//patients
Route.resource('patients', 'PatientController').validator(new Map([
    [['patients.store'], ['Patient/StorePatient']],
    [['patients.update'], ['Patient/UpdatePatient']],
])).middleware('auth')

//alergies
Route.resource('alergies', 'AllergyController').validator(new Map([
    [['alergies.store'], ['Allergy/StoreAllergy']],
    [['alergies.update'], ['Allergy/UpdateAllergy']],
])).middleware('auth')




