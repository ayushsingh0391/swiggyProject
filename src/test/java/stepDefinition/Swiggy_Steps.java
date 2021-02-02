package stepDefinition;

import cucumber.api.PendingException;
import io.cucumber.java.en.And;
import io.cucumber.java.en.But;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;

import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
public class Swiggy_Steps {
	
	
	ExtentReports extent= new ExtentReports(System.getProperty("user.dir")+"/basepage.html",false);
	ExtentTest logger;
	static WebDriver driver= new ChromeDriver();

    @Given("^The user is already at the swiggy page$")
    public void the_user_is_already_at_the_swiggy_page() throws Throwable {
    	
    	
		
        driver.get("https://www.swiggy.com/");
        driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
        
        WebElement Flogo=driver.findElement(By.xpath("//*[@class='r2iyh']"));
        System.out.println("********WEB PAGE asserted");
        Assert.assertTrue(Flogo.isDisplayed());
        
        
        logger=extent.startTest("SwiggyPage");
        logger.log(LogStatus.PASS,"on the home Page");
        extent.endTest(logger);
        
    }
    
    @When("^user clicks on sign up$")
    public void user_clicks_on_sign_up() throws Throwable {
       WebElement Signup =driver.findElement(By.linkText("Sign up"));
       
       Signup.click();
       Thread.sleep(3000);
       logger=extent.startTest("signupclick");
       logger.log(LogStatus.PASS,"Signup clicked");
       extent.endTest(logger);
    }

    @Given("^User is already at the Signup details page$")
    public void user_is_already_at_the_signup_details_page() throws Throwable {
    	
    	
    	Thread.sleep(3000);
    	WebElement Slogo=driver.findElement(By.xpath("//*[@class='_1Tg1D']"));
    	Assert.assertTrue(Slogo.isDisplayed());
        logger=extent.startTest("Signup detailpage");
        logger.log(LogStatus.PASS,"Signup dialog is dislayed");
        extent.endTest(logger);
    	
    }

   

    @Then("^user must be redirected to sign up page$")
    public void user_must_be_redirected_to_sign_up_page() throws Throwable {
    	
    		Thread.sleep(3000);
        WebElement Slogo=driver.findElement(By.xpath("//*[@class='_1Tg1D']"));
        
        Assert.assertTrue(Slogo.isDisplayed());
        System.out.println("****redirected");
        logger=extent.startTest("after signup clicked");
        logger.log(LogStatus.PASS,"Signup dialog is dislayed");
        extent.endTest(logger);
    
    }
    
    
    @When("^User enters \"([^\"]*)\" \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
    public void user_enters_something_somethingsomethingsomething(String phone,String name, String email, String password) throws Throwable {
        Thread.sleep(3000);
        WebElement Uphone=driver.findElement(By.xpath("/html//input[@id='mobile']"));
    	WebElement Uname=driver.findElement(By.xpath("//input[@name='name']"));
        WebElement Uemail=driver.findElement(By.xpath("//input[@name='email']"));
        WebElement UPassword=driver.findElement(By.xpath("//input[@name='password']"));
        Uphone.sendKeys(phone);
        Uname.sendKeys(name);
        Uemail.sendKeys(email);
        
        UPassword.sendKeys(password);
        logger=extent.startTest("detail entering");
        
        logger.log(LogStatus.PASS, "user detail entered"); 
        extent.endTest(logger);
    }

    @And("^User clicks Continue button$")
    public void user_clicks_continue_button() throws Throwable {
    	Thread.sleep(3000);
        WebElement Contbutton=driver.findElement(By.xpath("//*[@class='a-ayg']"));
        Contbutton.click();
      
        logger=extent.startTest("continuebt click");
        logger.log(LogStatus.PASS, "user continue clicked"); 
        extent.endTest(logger);
    } 

    @Then("^User shoud be able to sign up$")
    public void user_shoud_be_able_to_sign_up() throws Throwable {
    	Thread.sleep(2000);
    	WebElement OTPbox=driver.findElement(By.id("otp"));
    	Assert.assertTrue(OTPbox.isDisplayed());
    	logger=extent.startTest("last step");
    	logger.log(LogStatus.PASS, "register complete");
    	extent.endTest(logger);
    	extent.flush();
    	extent.close();
    
        
    }

}