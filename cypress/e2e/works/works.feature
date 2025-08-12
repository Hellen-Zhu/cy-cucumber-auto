Feature: All works filtering
  @auth
  Scenario Outline: Combined filters produce results
    Given I open the all works page
    When I pick channel "<channel>"
    And I pick category "<category>"
    And I pick completion "<completion>"
    And I sort by "<sort>"
    Then I should see works list not empty

    Examples:
      | channel | category | completion | sort   |
      | 男频       | 玄幻        | 已完结         | 点击量    |
      | 女频       | 都市言情       | 已完结         | 点击量    |
  @auth
  Scenario: Apply works filters from fixture
    Given I open the all works page
    When I apply works filters from fixture "worksFilters"
    Then I should see works list not empty

