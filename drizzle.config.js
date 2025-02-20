/** @type {import("drizzle-kit").Config } */
export default {
    schema: "./src/app/lib/schema/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
    url: 'postgresql://neondb_owner:npg_hAJx8y0FMEZU@ep-damp-sun-a9fbuylw-pooler.gwc.azure.neon.tech/neondb?sslmode=require',
    }
    };