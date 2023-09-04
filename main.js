let num=[{
    first_name:'Mike',
    Last_name:'Sheridan'
        },
{
    first_name:'Tim',
    Last_name:'Sheridan'

},
{
    first_name:'John',
    Last_name:'Carte'  
}
]
let b=num.map(function(e){
       var c= e.first_name + " " +e.Last_name;
      return c;
       
})
document.write(JSON.stringify(b));
