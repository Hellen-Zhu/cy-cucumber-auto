Feature: Ranking
  @auth
  Scenario Outline: Switch ranking tabs shows list
    Given I open the ranking page
    When I switch to ranking tab "<tab>"
    Then I should see ranking list items

    Examples:
      | tab   |
      | 点击榜 |
      | 新书榜 |
      | 更新榜 |
      | 评论榜 |

