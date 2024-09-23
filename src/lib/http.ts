export class HttpError extends Error {
    status: number
    payload: any
    constructor(status: number, payload: any) {
        super()
        this.status = status
        this.payload = payload
    }
}