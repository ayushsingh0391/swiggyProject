Feature: Signup functionality of Swiggy user

  @Sanity
  Scenario: Provide Sign up function for the user
    Given The user is already at the swiggy page
    When user clicks on sign up
    Then user must be redirected to sign up page

  @Sanity
  Scenario Outline: Provide filling of sign up details
    Given User is already at the Signup details page
    When User enters "<Phone>" "<Name>""<Email>""<Password>"
    And User clicks Continue button
    Then User shoud be able to sign up

    Examples: 
      | Phone      | Name  | Email               | Password |
      | 9455123456 | Ayush | hakuna.ayu@gmail.com | India@12 |
