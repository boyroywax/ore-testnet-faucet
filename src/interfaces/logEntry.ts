

export interface LogEntryInterface {
    action: string
    amount: number
    dateCreated: Date
    status: string
}

export interface mongoClient {
    uri: String
    createLogEntry( entry: LogEntryInterface ): Promise<void>
}