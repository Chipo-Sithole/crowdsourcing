# DataCrowd - Data Annotation Crowdsourcing Platform
This project is a React + TypeScript implementation of a data crowdsourcing platform where people can find data annotation jobs or list annotation jobs.
## Features
- Clean, modern UI with responsive design
- Authentication flow with multiple sign-in options
- Role-based dashboards for annotators and requesters
- Project browsing and management
- Workspace system for requesters
## Authentication & Onboarding Flow
The platform uses a streamlined authentication and onboarding process:
1. **Authentication**: Users can sign in using:
   - Google OAuth
   - GitHub OAuth
   - Email magic link (simulated in this demo)
2. **Post-Signup Survey**: New users are required to complete a survey to:
   - Select their role (Annotator or Requester)
   - Provide professional information
   - Set preferences for annotation types
3. **Role-Based Dashboard**: After authentication and survey completion, users are directed to a role-specific dashboard:
   - Annotators see available tasks, their earnings, and favorites
   - Requesters can manage workspaces, projects, and teams
## Assumptions
- **OAuth Providers**: The implementation assumes the backend would handle OAuth authentication with Google and GitHub. The current demo simulates this process.
- **Email Authentication**: The demo simulates email magic link authentication without actually sending emails.
- **Mock Data**: All data in the application is mocked and would need to be replaced with real API calls in a production environment.
## Project Structure