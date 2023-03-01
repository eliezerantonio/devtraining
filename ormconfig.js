module.exports = {
  type: 'postgres',
  hots: 'localhost',
  port: 5432,
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  entities: ['dist/**/*'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations/',
  },
};
