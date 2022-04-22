import mongoose, { model } from "mongoose"

import { LogEntryInterface } from "../interfaces/logEntry"


export const logEntrySchema = new mongoose.Schema<LogEntryInterface>({
    action: { type: String, required: true },
    amount: { type: Number, required: true },
    dateCreated: { type: Date, required: true },
    status: { type: String, required: true }
})

export const LogEntryModel = model<LogEntryInterface>('LogEntryInterface', logEntrySchema)

