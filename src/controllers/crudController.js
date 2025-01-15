const { sequelize } = require('../db/connection');
class CrudController {

    async schedule(req, res) {
        const id = req.params.id;
        try {
            let query;
            let replacements = {};

            query = 'SELECT * FROM telesmart.vStore WHERE StoreNumber = :id';
            replacements = { id };


            const result = await sequelize.query(query, {
                replacements,
                type: sequelize.QueryTypes.SELECT
            });

            res.json(result);
        } catch (error) {
            console.error('Error executing query:', error);
            res.status(500).send('Error executing schedule query');
        }
    }

    async Transcom(req, res) {
        const id = req.params.id;
        try {
            let query;
            let replacements = {};

            query = 'SELECT * FROM telephone_system.vStoreGoContacts WHERE StoreNumber = :id';
            replacements = { id };
            const result = await sequelize.query(query, {
                replacements,
                type: sequelize.QueryTypes.SELECT
            });

            res.json(result);
        } catch (error) {
            console.error('Error executing query:', error);
            res.status(500).send('Error executing Transcom query');
        }
    };

    async query(req, res) {
        const { query, replacements } = req.body;
        try {
            //console.log('query:', query , 'replacements:', replacements);

            const result = await sequelize.query(query, {
                replacements,
                type: sequelize.QueryTypes.SELECT
            });
            if (result.length === 0) {
                res.status(404).send('No records found');
            } else {
                res.json(result);
            }
        } catch (error) {
            console.error('Error executing query:', error);
            res.status(500).send('Error executing query');
        }
    };
    async store(req, res) {
        const id = req.params.id;
        try {
            let query;
            let replacements = {};

            if (id === '99') {
                query = 'SELECT TOP 5 * FROM telephone_system.vStore';
            } else {
                query = 'SELECT * FROM telephone_system.vStore WHERE StoreNumber = :id';
                replacements = { id };
            }

            const result = await sequelize.query(query, {
                replacements,
                type: sequelize.QueryTypes.SELECT
            });

            res.json(result);
        } catch (error) {
            console.error('Error executing query:', error);
            res.status(500).send('Error executing query');
        }
    }

}
module.exports = CrudController;