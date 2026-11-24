# 6688136 Sorayot Udomkijkosol

# UI Testing Lab

This lab uses Robot Framework and Cypress to test the Selenium web form and the QuickPizza QP-01 scenario. See [RESULTS.md](RESULTS.md) for the manual test results, automated test results, and reflection.

## Robot Framework

The `robot/` folder contains the web form and QuickPizza tests. To run them, install the dependencies from `robot/requirements.txt` and set `CHROMEDRIVER` to the path of your ChromeDriver. Then run this command from `robot/`:

```powershell
robot first.robot web_form.robot pizza_scenario.robot
```

## Cypress

The `cypress/` folder contains the Cypress tests for the same two sites. Run `npm.cmd ci` from `cypress/` to install the dependencies, then run:

```powershell
npx.cmd cypress run --browser chrome
```