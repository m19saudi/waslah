export default function handler(req, res) {
  // Firebase Web configuration is intentionally public.
  // Never put Firebase Admin/private credentials here.

  const projectId = process.env.FIRE_ID;
  const apiKey = process.env.FIRE_KEY;
  const appId = process.env.FIRE_APP;

  if (!projectId || !apiKey || !appId) {
    return res.status(500).json({
      error: "Missing FIRE_ID, FIRE_KEY or FIRE_APP environment variables."
    });
  }

  res.status(200).json({
    apiKey,
    projectId,
    appId,

    // Required because we are using Firebase Realtime Database
    databaseURL:
      process.env.FIRE_DB ||
      `https://${projectId}-default-rtdb.firebaseio.com`,

    // Required for Firebase Authentication
    authDomain:
      process.env.FIRE_AUTH ||
      `${projectId}.firebaseapp.com`
  });
}
