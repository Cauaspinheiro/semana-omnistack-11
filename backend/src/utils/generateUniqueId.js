import crypto from 'crypto';

export default function generateUniqueId() {
  return crypto.randomBytes(8).toString('hex');
}
