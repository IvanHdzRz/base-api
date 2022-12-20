

# [Command Name]

## Descripcion 

todo: 

## request body

**method:** [the method name]

**param**  
indice | nombre | descripcion
--- | --- | ---
0 | | |
1 | | |


### ejemplo:
```
{
    "method":"prTaskCoreConfig",
    "param":[
        "param1",
        "param2"
    ]
}
```
## responce body

**error:** 

contiene el codigo y el mensaje de error, en caso de no haber ocurrido ningun error enviara el codigo 0 junto con un mensaje vacio 

**results**  

Es un arreglo que contiene los resultados del comando, cada resultado es un arreglo de strings con los siguientes valores posicionales  
indice | nombre | descripcion
--- | --- | ---
0 | | |
1 | | |

### ejemplo:
```
{
    "error":{
        "code":"1",
        "message":"description of error"
    },
    "results":[
        ["item1","items2","item3"],
        ["item1","items2","item3"],
        ["item1","items2","item3"]
    ]
}
```
