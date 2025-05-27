# EIT Webseite

## How to run the project

1. Clone the repository

```bash
git clone https://github.com/RishabhBoop/EIT-Website.git
```

2. Change branch
   Ideally push changes to dev branch. For each feature, create a new branch from dev and merge it back to dev after the feature is complete.

3. Install dependencies
   Go to root directory of the project and run the following command to install all the dependencies.

```bash
npm install
```

4. Create a `.env` file
   Create a `.env` file in the root directory of the project and add the following environment variables:

```
DIRECTUS_URL: Needed to connect to the Directus instance.
JWT_SECRET: Needed to sign JWT tokens.
NEXTAUTH_URL= Needed for NextAuth.js to know the URL of the application (localhost for development).
```
The secret can be found in the FS Cloud.

5. Run the project

```bash
npm run dev
```
