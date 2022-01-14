var samurai = document.querySelectorAll('li.tea');
for(var i=0;i<samurai.length;i++)
{

    if (i%2===0)
    {
        samurai[i].className="warm";
    }
    else
    {
        samurai[i].className="cool";
    }

    
}