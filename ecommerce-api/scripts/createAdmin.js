const bcrypt = require('bcryptjs');
const db = require('../db/connection');
const { UserRoles } = require('../models/userModel');

const createAdmin = async () => {
    const email = 'admin@example.com';
    const password = 'admin123';
    const fullName = 'System Admin';
    
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Insert the admin user
        const sql = "INSERT INTO users (email, fullName, password, role, verified) VALUES (?, ?, ?, ?, ?)";
        db.query(sql, [email, fullName, hashedPassword, UserRoles.SYSTEM_ADMIN, true], (error, result) => {
            if (error) {
                console.error('Error creating admin:', error);
                return;
            }
            console.log('Admin user created successfully!');
            console.log('Email:', email);
            console.log('Password:', password);
            process.exit();
        });
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

createAdmin();