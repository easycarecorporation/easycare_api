'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager')

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

// auth
Route.post('auth', 'UserController.auth')

//users
Route.group(() => {
    Route.resource('users', 'UserController').validator(new Map([
        [['users.store'], ['User/StoreUser']],
        [['users.update'], ['User/UpdateUser']],
        [['users.destroy'], ['User/DestroyUser']]
    ]))

    Route.get('users/validation/:username', 'UserController.alreadyExists')
});


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
Route.group(() => {
    Route.resource('patients', 'PatientController').validator(new Map([
        [['patients.store'], ['Patient/StorePatient']],
        [['patients.update'], ['Patient/UpdatePatient']],
    ])).middleware('auth')

    Route.delete('patients/:id/allergies/:allergy', 'PatientController.destroyAllergy')
    Route.delete('patients/:id/diseases/:disease', 'PatientController.destroyDisease')

    Route.post('patients/:id/allergies/', 'PatientController.addAllergy')
    Route.post('patients/:id/diseases/:disease', 'PatientController.addDisease')
})

//alergies
Route.resource('allergies', 'AllergyController').validator(new Map([
    [['alergies.store'], ['Allergy/StoreAllergy']],
    [['alergies.update'], ['Allergy/UpdateAllergy']],
])).middleware('auth')

//diseases
Route.resource('diseases', 'DiseaseController').validator(new Map([
    [['diseases.store'], ['Disease/StoreDisease']],
    [['diseases.update'], ['Disease/UpdateDisease']],
])).middleware('auth')




