
.signup-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
}

label {
  font-weight: 600;
  margin-bottom: 5px;
}

input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

input:focus {
  outline: none;
  border-color: #0066ff;
  box-shadow: 0 0 0 2px rgba(0,102,255,0.2);
}

button {
  background-color: #0066ff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #0052cc;
}

.users-list {
  display: grid;
  gap: 20px;
}

.user-card {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-info h1 {
  font-size: 18px;
  margin: 0 0 5px 0;
}

.user-info h2 {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.delete-icon {
  color: #ff3333;
  transition: color 0.2s;
}

.delete-icon:hover {
  color: #cc0000;
}

@media (max-width: 600px) {
  .signup-container {
    padding: 15px;
  }
  
  input {
    width: 100%;
  }
}