// Any setup scripts you might need go here

// Load .env files
import 'dotenv/config'

// Integration tests write data, so they never run against the .env database (shared Atlas cluster).
// Point TEST_DATABASE_URL at a disposable MongoDB; defaults to a local instance.
process.env.DATABASE_URL =
  process.env.TEST_DATABASE_URL || 'mongodb://127.0.0.1:27018/mesanube-web-test'
// Disable R2 so uploads go to local disk during tests.
delete process.env.R2_BUCKET
