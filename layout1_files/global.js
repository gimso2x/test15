function getDate(){
    var now = new Date();
    var year = now.getFullYear();
    var month = (now.getMonth()+1);
    var date = now.getDate();
    var times = now.getHours()+":"+ now.getMinutes();
    
    return year+ "년 " +month+ "월 " +date+ "일 "+times;
}  


