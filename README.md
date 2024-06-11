# GIZ ASP MIS v1

## Overview

GIZ ASP MIS v1 is a web application designed to manage and review project entries related to social protection programs. The application provides functionalities to create new categories, set up projects, input records, and review records. The application is built using Next.js and Supabase for database management.

## Project Objectives

- Create a web interface to manage social protection project entries.
- Provide an admin panel to set up categories and projects.
- Allow users to input records through a structured form.
- Enable users to review and search existing records.

## Directory Structure

GIZ_ASP_MIS_V1/
├── components/
│ ├── CheckSupabaseConnection.tsx
│ ├── ProjectEntryForm.tsx
│ ├── ProjectForm.tsx
│ ├── WorkStreamForm.tsx
├── node_modules/
├── public/
├── src/
│ ├── app/
│ │ ├── manage/
│ │ │ ├── page.tsx
│ │ ├── settings/
│ │ │ ├── create-category/
│ │ │ │ ├── page.tsx
│ │ │ ├── categories/
│ │ │ │ ├── page.tsx
│ │ │ ├── page.tsx
│ │ ├── input/
│ │ │ ├── page.tsx
│ │ ├── review/
│ │ │ ├── page.tsx
│ │ ├── page.tsx
│ ├── globals.css
│ ├── supabaseClient.ts
├── .env.local
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
├── tsconfig.json


## Steps Taken So Far

1. **Set Up Next.js Project**: Initialized the Next.js project and created the directory structure.
2. **Configured Supabase Client**: Set up Supabase client with environment variables.
3. **Created Basic Pages**:
   - **Home Page**: Includes navigation to other pages.
   - **Admin Page**: Contains forms to create categories and projects.
   - **Input Record Page**: Form to input project entries.
   - **Review Records Page**: Displays existing records.
   - **Settings Page**: Navigation for creating categories and viewing existing categories.
4. **Implemented Forms**:
   - **WorkStreamForm**: Form to create new work streams.
   - **ProjectForm**: Form to create new projects.
   - **ProjectEntryForm**: Form to create new project entries.
5. **Set Up Data Fetching**: Configured components to fetch data from Supabase and display it.

## Work Still Needed

1. **Ensure Data Submission**: Verify and debug the `ProjectEntryForm` to ensure it correctly submits data to the database.
2. **Error Handling**: Implement better error handling and user feedback for form submissions.
3. **Styling**: Improve the styling of forms and pages using CSS or a CSS framework like Tailwind CSS.
4. **User Authentication**: Set up user authentication to restrict access to the admin panel and other sensitive operations.
5. **Advanced Features**:
   - **Search and Filter**: Implement search and filter functionality for the review records page.
   - **Detailed Record View**: Create a detailed view for individual records.
6. **Testing and Deployment**:
   - **Unit and Integration Tests**: Write tests to ensure the application works as expected.
   - **Deployment**: Deploy the application using a service like Vercel.

## Getting Started

### Prerequisites

- Node.js and npm
- Supabase account

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/GIZ_ASP_MIS_V1.git
   cd GIZ_ASP_MIS_V1
