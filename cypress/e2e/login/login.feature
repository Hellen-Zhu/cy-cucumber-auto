Feature: Login Page

  Scenario: Visit login page
    Given I open the login page
    Then I should be on the login page
  
  Scenario: Should able to login with right auth
    Given I open the login page
    Then I login with right auth
    Then I should be logged in as env(USERNAME)


