export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,

  datasources: {
    mysql: {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: '',
      password: '',
      database: '',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    },
    mongodb: {
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      username: '',
      password: '',
      authSource: '',
      database: '',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    },
  },

  openAIKey: '',
});
