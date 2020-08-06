const loginSalto = require ('./loginSalto');

loginSalto.login();

var {Builder, By, until, promise} = require('selenium-webdriver');
var driver = new Builder().forBrowser("firefox").build();
    
driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div[1]/div/div[2]/nav/div/ul/li[1]/a")),60000);







