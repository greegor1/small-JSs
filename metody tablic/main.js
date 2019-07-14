document.addEventListener("DOMContentLoaded", () => {
    let markers = document.querySelectorAll('.marker');
    let cities = [];

    const capit = (params) => params.charAt(0).toUpperCase() + params.slice(1)
    function pxToProc(xParam, yParam) {
        let xMax = 407;
        let yMax = 380;
        let xInt = parseInt(xParam);
        let yInt = parseInt(yParam);
        let xProc = (xInt * 100 / xMax).toFixed(2);
        let yProc = (yInt * 100 / yMax).toFixed(2);

        return [xProc, yProc]
    }
    
    cities = [...markers].map(elem => {
        const city = {}
        
        let name1 = elem.href.split('/').pop();
        city.name = capit(name1).split('-').join(' ');
        city.slug = elem.href.split('/').slice(-2).join('/');
        let x = elem.style.left.slice(0,-2);
        let y = elem.style.top.slice(0,-2); 
        city.x = pxToProc(x, y)[0];
        city.y = pxToProc(x, y)[1];
        city.intro = '1';
        city.content = '';
        return city;
    }) 

    console.log(JSON.stringify(cities));
});


