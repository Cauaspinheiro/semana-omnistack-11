import knex from 'knex'
import knexConfig from '../../knexfile'

const config = process.env.NODE_ENV === 'test' ? 
knexConfig.test : knexConfig.development; 

const connection = knex(config)

export default connection
