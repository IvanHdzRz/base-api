function filter(lutResponce){

    let regex=/(,\s+)/gm
    let filtered=lutResponce.replaceAll("'","")
    filtered=filtered.replaceAll("\n","")
    filtered=filtered.replaceAll(regex,", ")
    console.log(filtered)
}
