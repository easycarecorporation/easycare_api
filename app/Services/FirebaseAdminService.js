var admin = require("firebase-admin");

const Env = use('Env')

const serviceAccount = {
    "type": Env.get("TYPE"),
    "project_id": Env.get("PROJECT_ID"),
    "private_key_id": Env.get("PRIVATE_KEY_ID"),
    "private_key": Env.get("PRIVATE_KEY"),
    "client_email": Env.get("CLIENT_EMAIL"),
    "client_id": Env.get("CLIENT_ID"),
    "auth_uri": Env.get("AUTH_URI"),
    "token_uri": Env.get("TOKEN_URI"),
    "auth_provider_x509_cert_url": Env.get("AUTH_PROVIDER_X509_CERT_URL"),
    "client_x509_cert_url": Env.get("CLIENT_X509_CERT_URL"),
}

class FirebaseAdminService {
    constructor() {

        if(!admin.instanceId) {
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount)
            })
        }
    }
}

module.exports = FirebaseAdminService