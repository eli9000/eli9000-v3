const query = {
  dev: 'SELECT * FROM development',
  design: 'SELECT * FROM design',
  aws: 'SELECT * FROM aws',
  contact: 'SELECT * FROM contact_info',
};

export default {
    Query: {
        skills: async (_, args, { db }) => {
            const { rows } = await db.query(query.aws);
            return rows;
        },
        contact: async (_, args, { db }) => {
            const { rows } = await db.query(query.contact);
            return rows;
        }
    }
}
