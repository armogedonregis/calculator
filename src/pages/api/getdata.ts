import mysql from "mysql2/promise";

export default async function handler(req: any, res: any) {
    const dbconnection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'calciul'
    });
    try {

        const query = "SELECT ngr_1, ngr_2 FROM NGRs"
        const values: any[] = []
        const [data] = await dbconnection.execute(query, values);
        dbconnection.end();
        res.status(200).json({ results: data })

    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}