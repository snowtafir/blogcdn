setInterval((function(){var n=new Date,e=new Date("2020-04-03 00:00:00"),m=n.getFullYear();yearDate=m%4==0&&m%100!=0||m%400==0?366:365,n.setTime(n.getTime()+250),tolsecond=(n-e)/1e3,days=tolsecond/60/60/24,idnum=Math.floor(days),year=idnum/yearDate,ynum=Math.floor(year),dnum=idnum-yearDate*ynum,hours=tolsecond/60/60-24*ynum*yearDate-24*dnum,hnum=Math.floor(hours),1===String(hnum).length&&(hnum="0"+hnum),minutes=tolsecond/60-1440*ynum*yearDate-1440*dnum-60*hnum,mnum=Math.floor(minutes),1===String(mnum).length&&(mnum="0"+mnum),seconds=tolsecond-86400*ynum*yearDate-86400*dnum-3600*hnum-60*mnum,snum=Math.round(seconds),1===String(snum).length&&(snum="0"+snum),document.getElementById("timeDate").innerHTML="本站安全运行&nbsp"+ynum+"&nbsp年"+dnum+"&nbsp天",document.getElementById("times").innerHTML=hnum+"&nbsp小时&nbsp"+mnum+"&nbsp分&nbsp"+snum+"&nbsp秒"}),1e3);