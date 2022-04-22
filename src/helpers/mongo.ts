import { connect, disconnect } from 'mongoose'

import { LogEntryInterface, mongoClient } from '../interfaces/logEntry'
import { LogEntryModel } from '../models/LogModels'


const uri = process.env.REACT_APP_MONGO_URI || 'None'

export class MongoClient implements mongoClient {
    uri: string = uri || "No URI"

    public async createLogEntry(
        entry: LogEntryInterface
    ): Promise<void> {
        try { 
            let LogEntry = new LogEntryModel(entry)
            console.log(LogEntry)

            console.log(this.uri)
            // await connect(this.uri).then(async () => await LogEntryModel.create(LogEntry) )
            await connect(uri)

            await LogEntry.save()

            await disconnect()
        }
        catch (err) {
            console.error(err)
        }
    }
}