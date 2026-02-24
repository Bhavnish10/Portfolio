# MongoDB Setup for Portfolio

## Option 1: MongoDB Atlas (Cloud – Recommended)

1. **Create account:** Go to [mongodb.com/atlas](https://www.mongodb.com/atlas) and sign up (free).

2. **Create cluster:** Click "Build a Database" → choose **M0 Free** → pick a region → Create.

3. **Create user:** Under "Database Access" → Add New User → set username & password → Add User.

4. **Allow network access:** Under "Network Access" → Add IP Address → choose "Allow Access from Anywhere" (0.0.0.0/0) for development → Confirm.

5. **Get connection string:** Under "Database" → Connect → "Connect your application" → copy the URI. It looks like:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

6. **Update `.env`:** Open `server/.env` and replace `MONGODB_URI` with your URI, and add the database name:
   ```
   MONGODB_URI=mongodb+srv://YOUR_USER:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/bhavnish-portfolio?retryWrites=true&w=majority
   ```
   Replace `YOUR_USER`, `YOUR_PASSWORD`, and the cluster host with your values.

7. **Seed the database:**
   ```powershell
   cd d:\portfolio\server
   node seed.js
   ```

8. **Start the backend:**
   ```powershell
   npm run dev
   ```

---

## Option 2: Local MongoDB

If MongoDB is installed locally, the default `server/.env` already uses:
```
MONGODB_URI=mongodb://localhost:27017/bhavnish-portfolio
```

1. Install MongoDB Community: [mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
2. Run the MongoDB service.
3. Run `node seed.js` in the `server` folder.
4. Start the backend with `npm run dev`.
