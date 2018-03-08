import SKILLS from './select_from_aws.sql';
import CONTACT_INFO from './select_contact_info.sql';

export default {
    Query: {
        skills: async (_, args, { db }) => {
            const { rows } = await db.query(SKILLS);
            return rows;
        },
        contactInfo: async (_, args, { db }) => {
            // const { rows } = await db.query(CONTACT_INFO);
            // return rows;

            return {
                name: 'Eli Johnson',
                phone: '385-235-1939',
            };
        }
    }
}