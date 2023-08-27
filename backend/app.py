from flask import Flask, request, jsonify
from flask_cors import CORS
import firebase_admin
from firebase_admin import credentials, auth

# Initialize Firebase Admin SDK
cred = credentials.Certificate("sunischitappdemo-firebase-adminsdk-hguxo-7e31acb058.json")
firebase_admin.initialize_app(cred)

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

# API endpoint to delete a user
@app.route('/api/delete-user', methods=['POST'])
def delete_user():
    user_id = request.json['userId']  # Assuming you pass the user ID in the request body
    try:
        # Delete the user from Firebase Authentication
        auth.delete_user(user_id)
        
        # Additional logic for deleting user from Firestore or other databases if needed
        
        return jsonify({'message': 'User deleted successfully'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run()