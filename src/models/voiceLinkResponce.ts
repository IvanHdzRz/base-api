export default interface VoiceLinkResponce{
    error:ErrorData;
    results:ResultItems;
}

interface ErrorData{
    code: string;
    message:string;
}
interface ResultItems extends Array<string[]>{

}