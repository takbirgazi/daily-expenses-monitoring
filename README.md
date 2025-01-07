# Daily Expenses Monitoring

## Overview
Daily Expenses Monitoring is a web application that helps users input, manage, and track their daily expenses across various categories. With features like categorized summaries, spending limits, and detailed expense tracking, it provides a streamlined solution for financial management.

---

## Features

### Expense Input
- **Categorized Expenses**: Users can add expenses under predefined categories:
  - Groceries
  - Transportation
  - Healthcare
  - Utility
  - Charity
  - Miscellaneous
- **Purpose Specification**: Each expense entry requires a purpose (e.g., "Weekly groceries").
- **Automatic Timestamps**: The application records the date and time automatically when an expense is added.

### Expense Management
- **Multiple Entries**: Users can add multiple expenses per day.
- **Secure Storage**: Expenses are stored securely in a MongoDB database.

### Summary Page
- **Daily Summaries**: Displays categorized summaries of expenses for each day.
- **Total Calculations**: Shows total daily expenses under each date.
- **Detailed Tooltips**: Hover over expense fields to view additional information about the purpose of the expense.

### Spending Limit
- **Monthly Limit**: Users set a monthly spending limit upon starting the application.
- **Category Limits**: Set individual spending limits for each category (e.g., Groceries: $200, Transportation: $50).
- **Limit Alerts**: Prevents adding expenses that exceed set limits and alerts users when limits are reached.

---

## Technologies Used

### Frontend
- **Next.js**: Frontend Framework
- **Redux Toolkit**: State Management
- **Raw CSS**: Styled without CSS libraries
- **React Icon**: For awesome icons
- **Next Auth**: For Authentication

### Backend
- **Express.js**
- **MongoDB**: Database

---

## Installation and Setup

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB database set up and running.

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/takbirgazi/daily-expenses-monitoring.git
   cd daily-expenses-monitoring
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   - Create a `.env` file.
   - Add the following environment variables:
     ```env
     PORT=3000
     MONGO_URI=
     GOOGLE_CLIENT_ID=
     GOOGLE_CLIENT_SECRET=
     NEXTAUTH_SECRET=
     ```

4. **Run the Application**:
   - Run the command 
     ```bash
     npm run dev
     ```

5. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000`.

---

## API Endpoints

### Base URL: `http://localhost:3000/api`

#### Expense Management

| Method | Endpoint         | Description                 |
|--------|------------------|-----------------------------|
| POST   | `/tasks`         | Add a new expense.          |
| GET    | `/tasks`         | Retrieve all expenses.      |
| PUT    | `/tasks/:email`     | Update an existing expense. |
| DELETE | `/tasks/:email`     | Delete an expense.          |
 
---

## Contributing
We welcome contributions to improve this project. Please follow the steps below:
1. Fork the repository.
2. Create a new branch (`feature/your-feature-name`).
3. Commit your changes.
4. Push your branch and create a pull request.

---

## Contact
For any questions or support, feel free to reach out to the project maintainer:
- **Name**: Md. Takbir Gazi
- **Email**: takbirgazibd@gmail.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/takbirgazi)