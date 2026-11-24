# UI lab results

Tool parts that I chose: Part 3 Robot Framework and Part 4 Cypress

## Part 0
- Step 0.1, Chrome version: 157.0.8103.81 (64-bit), Windows 11

- Step 0.3, ChromeDriver version: 157.0.8103.81

- Step 0.4, locator of Pizza, Please!: CSS `button[name="pizza-please"]`
- Step 0.4, locator of Excluded tools: CSS `select`
- Step 0.4, locator of Must be vegetarian: CSS `#default-checkbox`
- Step 0.4, locator of Custom Pizza Name: CSS `input#pizza-name`

- Step 0.5, pizza name: Lab Pizza 20261124-184530
- Recommended tool: Scissors
- Calories per slice: 500

### Manual test case: QP-01 — A custom pizza reaches the admin list

| Step | Action | Expected result | Actual result | Pass or fail |
|------|--------|-----------------|---------------|--------------|
| 1 | Open QuickPizza while logged out | The home heading appears | Looking to break out of your pizza routine? appeared | Pass |
| 2 | Turn on Advanced | All four advanced fields appear | All four fields appeared | Pass |
| 3 | Set calories to 600, exclude Knife, tick vegetarian and enter the pizza name | The fields show the entered values | The fields showed the requested values | Pass |
| 4 | Click Pizza, Please! | Correct name, tool other than Knife and calories per slice ≤ 600 | Lab Pizza 20261124-184530; Scissors; 500 calories per slice | Pass |
| 5 | Click Love it! while logged out | A message asks the user to log in first | Please log in first appeared | Pass |
| 6 | Open /admin and sign in with admin / admin | Latest pizza recommendations appears | Latest pizza recommendations appeared | Pass |
| 7 | Find the pizza in the admin list | The pizza name and tool match step 4 | Lab Pizza 20261124-184530 (tool=Scissors, ingredients_number=8) | Pass |

## Part 3: Robot Framework
- robot --version: Robot Framework 7.5.1 (Python 3.10.5 on win32)

- Step 3.2, failure message for the wrong title: Title should have been 'Web Form' but was 'Web form'.
- Step 3.2, after restoring the correct title: 1 test, 1 passed, 0 failed

- Step 3.8, run 1: 1 test, 1 passed, 0 failed. Elapsed time: 00:00:10.852. Pizza name: Lab Pizza 20261124-192320.
- Step 3.8, run 2: 1 test, 1 passed, 0 failed. Elapsed time: 00:00:10.372. Pizza name: 20261124-192359.

# Part 4: Cypress 
- node --version: v22.14.0, npm --version: 10.9.2 and npx cypress version: 16.2.1

- Step 4.3, failure message for the wrong title: `Timed out retrying after 10000ms`. Expected `Web Form`, but the actual title was `Web form`.

- Step 4.6, tool and calories in the answer of `POST /api/pizza`: `Scissors`, 550 calories per slice.