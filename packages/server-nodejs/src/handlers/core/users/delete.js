import { db } from 'utils/database/jsondb';
import { response } from 'utils/http';

export default function del(req, res) {
  const { id } = req.params;
  const userDeleted = db.users.remove(id);
  return response.ok(res, userDeleted);
}
