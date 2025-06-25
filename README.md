# AutoCare - Car Washing Services

[![Live URL](https://img.shields.io/badge/Live%20URL-Visit-green)](https://autocare-client.vercel.app/)

## Overview

**AutoCare - Car Washing Services** is a user-friendly web application designed to simplify the process of booking car wash services. The platform allows users to browse available services, view details, select time slots, and securely book appointments online. Administrators are provided with a powerful dashboard to manage services, slots, and users effectively. The platform offers a seamless experience for both regular users and administrators with an intuitive, modern design.

## Table of Contents

- [Overview](#overview)
- [Public Pages](#public-pages)
- [User Dashboard](#user-dashboard)
- [Admin Pages](#admin-pages)
- [Additional Features](#additional-features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Local Setup](#local-setup)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Author](#author)

## Key Features

### Public Pages

- **Home Page**:
  - A hero section with strong branding, a clear call-to-action button, and featured services.
  - A visually appealing review section with user ratings and feedback.
  - Navigation to key pages such as Services, Booking, and Login.
- **Review System**:

  - Users can rate services with a 5-star rating system and provide written feedback.
  - Logged-in users can submit reviews, and average ratings are displayed dynamically.

- **User Authentication**:
  - **Sign Up** and **Login** pages with form validation and token-based authentication.
  - Users are assigned the default "USER" role, with one initial "ADMIN" role in the database.
- **Services Page**:

  - Browse a list of available services with filtering, sorting, and searching functionalities.
  - Detailed service descriptions, prices, and durations.

- **Service Details Page**:

  - Displays available time slots, with real-time updates on booked and available slots.
  - Allows users to select a date and time, and book services.

- **Booking Page**:

  - Displays the selected service details, and provides an easy-to-use form for user details and payment.
  - Integration with **AAMARPAY** for payment processing.

- **Custom Error Pages**:
  - A 404 error page is designed to guide users back to safe pages, such as the home or login page.

### Admin Pages

- **Admin Dashboard**:
  - A comprehensive dashboard to manage services, slots, and user roles.
  - Service Management: Add, update, or delete services with real-time updates.
  - Slot Management: Update slot availability with options to cancel or mark slots as booked.
  - User Management: View users, update roles, and manage bookings.

### User Dashboard

- **Booking History**:
  - Displays past and upcoming bookings in a clean, user-friendly layout.
  - Upcoming bookings feature a countdown timer for the next appointment.
- **Profile Management**:
  - Users can update their personal information and view their booking history.

### Additional Features

- **Responsive Design**:
  - The platform is fully responsive and optimized for both desktop and mobile devices.
- **Secure Authentication**:
  - Token-based authentication ensures secure user sessions and role-based access control.
- **Slot Countdown Timer**:
  - Users can see a countdown for their next service slot in both the dashboard and navbar.

## Technologies Used

- **Frontend**:

  - React, Redux Toolkit, TypeScript, Ant Design, Tailwind CSS
  - **Live Demo**: [AutoCare - Car Washing Services](https://autocare-client.vercel.app/)
  - **Client Repository**: [GitHub - AutoCare Client](https://github.com/mahamudulhasan-me/autocare-client.git)

- **Backend**:

  - Node.js, Express.js, MongoDB, JWT for Authentication
  - **Server Repository**: [GitHub - AutoCare Server](https://github.com/mahamudulhasan-me/car-washing-system.git)

- **Payment Gateway**:

  - AAMARPAY for secure payment processing.

- **State Management**:

  - Redux Toolkit, RTK Query for efficient API interaction.

- **Styling**:
  - Tailwind CSS and Ant Design for consistent, responsive, and modern design components.

## Setup Instructions

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB**: Either a local MongoDB instance or a cloud-based MongoDB Atlas.
- **AAMARPAY Account**: Required for payment integration.

### Local Setup

1. **Clone the Repositories**

   ```bash
   git clone https://github.com/mahamudulhasan-me/autocare-client.git
   git clone https://github.com/mahamudulhasan-me/car-washing-system.git
   ```

2. **Install Dependencies**

   For the client:

   ```bash
   cd autocare-client
   npm install
   ```

   For the server:

   ```bash
   cd ../car-washing-system
   npm install
   ```

3. **Environment Variables**

   Create a `.env` file in the root directory of both the client and server with the following:

   For the server:

   ```bash
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-secret-key
   AAMARPAY_KEY=your-aamarpay-key
   AAMARPAY_SECRET=your-aamarpay-secret
   ```

4. **Start the Development Servers**

   For the server:

   ```bash
   npm run dev
   ```

   For the client:

   ```bash
   cd ../autocare-client
   npm start
   ```

5. **Admin Credentials**

   By default, the admin credentials are:

   ```bash
   Email: mahamudulhasan.org@gmail.com
   Password: Mdun@626456
   ```

6. **Build for Production**

   When ready to deploy the client:

   ```bash
   npm run build
   ```

## Deployment

Both the frontend and backend of this project are deployed on **Vercel**. Ensure that environment variables are correctly configured in the Vercel dashboard for both deployments to run smoothly.



