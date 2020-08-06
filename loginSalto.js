var {Builder, By, until, promise} = require('selenium-webdriver');


async function login(){
    var driver = new Builder().forBrowser("firefox").build();
    try{
    //open website
    await driver.get('https://app-test.saltoks.com');

    //logging into Salto KS with credentials
    await driver.wait(until.elementLocated(By.id("Email")),30000).sendKeys("ts+new17@my-clay.com");
    await driver.findElement(By.id("Password")).sendKeys("Password1!");
    await driver.findElement(By.xpath("/html/body/div/div/div/section/form/div[4]/button")).click();
    }catch(error){
        console.log(error);
    } 
    //Waiting to load Dashboard page
    await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div[1]/div/div[2]/nav/div/ul/li[1]/a")),60000);

    console.log("Login successful");
    
    //Getting the title of the page
    driver.getTitle().then(function(pageTitle){
    console.log("The title is "+pageTitle);
    });

}
//login();

module.exports = {login}


