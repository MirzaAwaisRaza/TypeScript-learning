let views:number|string=1000
function countViews(views:number|string):void{
    if(Number(views)>999){
        views=Number(views)/1000
        console.log(`views: ${views}K`)
    }
}

countViews(views)