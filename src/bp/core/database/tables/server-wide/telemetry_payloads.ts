import { Table } from 'core/database/interfaces'

export class TelemetryPayloadTable extends Table {
  name: string = 'telemetry_table'

  async bootstrap() {
    let created = false

    await this.knex.createTableIfNotExists(this.name, table => {
      table.uuid('uuid').notNullable()
      table.text('url').notNullable()
      table.json('payload').notNullable()
      table.boolean('available').notNullable()
      table.timestamp('lastChanged').notNullable()
      created = true
    })
    return created
  }
}