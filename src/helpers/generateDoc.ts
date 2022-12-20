
import VoiceLinkRequest from "../models/voiceLinkRequest";
import VoiceLinkResponce from "../models/voiceLinkResponce";
import fs from 'fs'

const generateDoc=async(request:VoiceLinkRequest, responce:VoiceLinkResponce)=>{
    const log = `
        Time: ${new Date().toString()}
        ---------------------REQUEST-------------------------------------------
        ${JSON.stringify(request, null, 4)}
        ---------------------RESPONSE-------------------------------------------
        ${JSON.stringify(responce, null, 4)}
    `
    await addToLog(`${__dirname}/logs/log.txt`, log);
}


async function addToLog(path:string,content:string){
    return new Promise((resolve,reject)=>{
        fs.appendFile(path,content,(err)=>{
            if(err){
                reject(err)
            }else{
                resolve(true);
            }
        })
    });
}

function createDocumentBody(methodName:string,request:VoiceLinkRequest,responce:VoiceLinkResponce):string{
    return `

# ${methodName}

## Descripcion 

todo: 

## request body

**method:** ${request.method}

**param**  
indice | nombre | descripcion
--- | --- | ---
${createMdTable(request.param)}


### ejemplo:
\`\`\`
${JSON.stringify(request,null,4)}
\`\`\`
## responce body

**error:** 

contiene el codigo y el mensaje de error, en caso de no haber ocurrido ningun error enviara el codigo 0 junto con un mensaje vacio 

**results**  

Es un arreglo que contiene los resultados del comando, cada resultado es un arreglo de strings con los siguientes valores posicionales  
indice | nombre | descripcion
--- | --- | ---
${createMdTable(responce.results!== undefined? responce.results[0]: [])}


### ejemplo:
\`\`\`
${JSON.stringify(responce,null,4)}
\`\`\`

`;
}

function createMdTable(values:string[]){
    return values
        .map((item,index)=>`${index} | | ${item} |`)
        .join('\n');
}

export default generateDoc;