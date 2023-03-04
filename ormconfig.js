module.exports = {
  type: 'postgres',
  hots: 'localhost',
  port: 5432,
  host: 'db',
  username: 'postgres',
  password: 'docker',
  database: 'trainingnestjs',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations/',
  },
};
