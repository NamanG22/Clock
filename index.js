function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hour=hours%12;
    const hourdeg = ((hour+3)*30)+(0.5 * minutes);
    const minutedeg = 90+((minutes)*6)+(0.1*seconds);
    const seconddeg = 90+((seconds)*6);

    document.querySelector('.hour-hand').style.transform = 'rotate('+hourdeg+'deg)';
    document.querySelector('.min-hand').style.transform = 'rotate('+minutedeg+'deg)';
    document.querySelector('.second-hand').style.transform = 'rotate('+seconddeg+'deg)';

    setTimeout(getTime, 1000);
}
getTime();