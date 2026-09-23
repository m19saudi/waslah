export default function handler(req, res) {
  // Firebase Web configuration is intentionally public.
  // Keep privileged Firebase Admin credentials OUT of this file.
  const projectId = process.env.FIRE_ID;

  if (!projectId || !process.env.FIRE_KEY || !process.env.FIRE_APP) {
    return res.status(500).json({
      error: "Missing FIRE_ID, FIRE_KEY or FIRE_APP environment variables."
    });
  }

  res.status(200).json({
    apiKey: process.env.FIRE_KEY,
    databaseURL: process.env.FIRE_DB || `https://${projectId}-default-rtdb.firebaseio.com`,
    projectId,
    appId: process.env.FIRE_APP,
    authDomain: process.env.FIRE_AUTH || `${projectId}.firebaseapp.com`,
    storageBucket: process.env.FIRE_STORAGE || `${projectId}.firebasestorage.app`
  });
}
